import { useTranslation } from "react-i18next"
import { Button } from "../Button"

export const Hero = ()=>{
  const { t } = useTranslation()

  return(
    <section className="container flex h-full min-h-[80vh] flex-col lg:flex-row items-center p-5">
      <div className="flex-1 flex flex-col justify-center lg:items-start items-center text-center lg:text-start mb-10 lg:m-0">
        <h1 className="text-5xl lg:text-7xl font-extrabold w-2/3 mb-4">{t('hero.title')}</h1>
        <h2 className="mb-4 text-xl">{t('hero.subtitle')}</h2>
        <Button>{t('hero.button')}</Button>
      </div>
      <div className="flex-1 bg-slate-200/50 rounded-3xl flex items-center justify-center p-5 lg:p-10 h-min">
        <img 
          className="rounded-2xl object-cover object-top w-full h-[27rem] lg:h-[35rem] " 
          src="https://plus.unsplash.com/premium_photo-1682125454953-0cce2249a554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  )
}