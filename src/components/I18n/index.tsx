import { useRef, useState } from 'react';
import { createPortal } from 'react-dom';
import { BrFlag } from './br';
import { UsFlag } from './us';
import { EsFlag } from './es';
import { useTranslation } from 'react-i18next';

const languages = [
  {
    label:'Português',
    flag:<BrFlag/>,
    tag:'pt-BR'
  },
  {
    label:'Inglês',
    flag:<UsFlag/>,
    tag:'en-US'
  },
  {
    label:'Espanhol',
    flag:<EsFlag/>,
    tag:'es-ES'
  },
]

type Languages = typeof languages[0]

export const ButtonPopper = ()=>{
  const { i18n } = useTranslation()
  const [flag, setFlag] = useState(<BrFlag/>)
  const [open, setOpen] = useState(false)

  const button = useRef(null);
  const tooltip = useRef(null);
  
  const handleClickClose = ()=>{
    setOpen(false)

  }


  const handleSelectLanguage = (selected:Languages)=>{
    setFlag(selected.flag)
    i18n.changeLanguage(selected.tag)
  }

  const handleClickI18n = ()=>{
    setOpen(true)
  }

  return(
    <>
      <button onClick={handleClickI18n} ref={button}>{flag}</button>
      {open && createPortal(
          <div 
            ref={tooltip}
            className='fixed  z-50 w-screen h-screen top-0 left-0'
            onClick={handleClickClose}
          >
            <div onClick={handleClickClose} className={`overflow-hidden rounded-lg max-w-72 translate-y-[86.5px] translate-x-[1240px]`}>
              <ol className='bg-white p-5 border rounded-lg max-w-72'>
                {
                  languages.map(el=>{
                    return(
                      <li className='p-2 hover:bg-slate-100 cursor-pointer flex gap-2 items-center border-b' onClick={()=>handleSelectLanguage(el)}>
                      {el.flag} {el.label}
                      </li>
                    )
                  })
                }
              
              </ol>
            </div>
          </div>
        , 
        document.body,
        )
      }
    </>
  )
}