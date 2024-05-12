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


export const ButtonPopper = ()=>{
  const { i18n } = useTranslation()
  const [flag, setFlag] = useState(<BrFlag/>)

  const button = useRef(null);
  const tooltip = useRef(null);
  
  const handleClickClose = (e:MouseEvent)=>{
    console.log('close')
  }

  const handleClickNon =(e)=>{
    e.stopPropagation()
  }
  const handleSelectLanguage = (selected)=>{
    setFlag(selected.flag)
    i18n.changeLanguage(selected.tag)
  }

  return(
    <>
      <button ref={button}>{flag}</button>
      {createPortal(
          <div 
            ref={tooltip}
            className='fixed p-5 z-50 w-screen h-screen bg-purple-900/25 top-0 left-0'
            onClick={handleClickClose}
          >
            <div onClick={handleClickNon} className='overflow-hidden h-40 rounded-lg max-w-72'>
              <ol className='bg-slate-50 p-5 rounded-lg max-w-72'>
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
        document.body
        )
      }
    </>
  )
}