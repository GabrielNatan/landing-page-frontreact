import { useRef, useState } from 'react';
import { BrFlag } from './br';
import { UsFlag } from './us';
import { EsFlag } from './es';
import { useTranslation } from 'react-i18next';
import * as DropdownMenu from '@radix-ui/react-dropdown-menu';
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
  const flagDefault = languages.find(el=>el.tag === i18n.language)?.flag || <BrFlag/>;
  const [flag, setFlag] = useState(flagDefault)

  const button = useRef(null);

  const handleSelectLanguage = (selected:Languages)=>{
    setFlag(selected.flag)
    i18n.changeLanguage(selected.tag)
  }


  return(
    <>
     <DropdownMenu.Root>
      <DropdownMenu.Trigger asChild>
        <button ref={button}>{flag}</button>
      </DropdownMenu.Trigger>

      <DropdownMenu.Portal >
        <DropdownMenu.Content className="DropdownMenuContent" sideOffset={10} style={{zIndex:900}}>
          <ol className='bg-white p-5 border rounded-lg max-w-72' >
                {
                  languages.map(el=>{
                    return(
                      <DropdownMenu.Item className="DropdownMenuItem">
                        <li className='p-2 hover:bg-slate-100 cursor-pointer flex gap-2 items-center border-b' onClick={()=>handleSelectLanguage(el)}>
                        {el.flag} {el.label}
                        </li>
                      </DropdownMenu.Item>
                    )
                  })
                }
              </ol>
        </DropdownMenu.Content>
      </DropdownMenu.Portal>
    </DropdownMenu.Root>
   
    </>
  )
}