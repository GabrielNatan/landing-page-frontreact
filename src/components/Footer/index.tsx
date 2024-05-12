import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react"
import { Button } from "../Button"
import logo from "/src/assets/logo.png"
import { useTranslation } from "react-i18next"

export const Footer = ()=>{
  const { t } = useTranslation()

  return(
    <div className="container flex justify-center  flex-col lg:flex-row relative lg:h-96 px-5 pt-5">
      <form className="container text-slate-50 lg:-top-14  lg:absolute w-full p-10 bg-violet-950 rounded-3xl flex gap-10 items-center flex-col lg:flex-row">

        <div className="flex-1">
          <h3 className="text-3xl  font-bold">{t('newsletter.title')}</h3>
          <p className="text-xl">{t('newsletter.subtitle')}</p>
        </div>
        
        <div >
          <div className="flex gap-3 lg:items-end flex-col lg:flex-row">
            <div className="flex flex-col ">
              <label className="text-sm" htmlFor="name">{t('newsletter.form.labelOne')}</label>
              <input className="p-2 rounded-md my-2 max-w-96" id="name" type="text"/>
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="email">{t('newsletter.form.labelTwo')}</label>
              <input className="p-2 rounded-md my-2 max-w-96" id="email" type="email"/>
            </div>
            <div className="mb-2">
              <Button type="submit" >{t('newsletter.form.button')}</Button>
            </div>
          </div>
          <div > 
            <input id="checkbox" type="checkbox"/>
            <label htmlFor="checkbox" className="max-w-96"> {t('newsletter.form.checkbox')}</label>
          </div>
        </div>
        
      </form>

      <div className="lg:mt-40 py-6 lg:border-t w-full flex flex-col gap-5 lg:grid lg:grid-cols-4">
        <div>
          <div>
            <div className="flex items-center">
              <img src={logo} className="w-16"/>
              <h1 className="text-xl font-extrabold text-purple-500">Front<span className="text-amber-500">React</span></h1>
            </div>
          </div>
          <p>
          {t('footer.one')}
          </p>
        </div>
        <ol>
          <li className="font-bold">{t('footer.two.title')}</li>
          <li>{t('footer.two.linkOne')}</li>
          <li>{t('footer.two.linkTwo')}</li>
          <li>{t('footer.two.linkThree')}</li>
          <li>{t('footer.two.linkFour')}</li>
        </ol>
        <ol>
          <li className="font-bold">{t('footer.three.title')}</li>
          <li>{t('footer.three.linkOne')}</li>
          <li>{t('footer.three.linkTwo')}</li>
          <li>{t('footer.three.linkThree')}</li>
          <li>{t('footer.three.linkFour')}</li>
        </ol>
        <div className="flex flex-col gap-3">
          <strong>{t('footer.four')}</strong>
          <div className="flex gap-3">
            <YoutubeLogo size={32} />
            <FacebookLogo size={32} />
            <InstagramLogo size={32} />
            <TwitterLogo size={32} />
          </div>
        </div>
      </div>

    </div>
  )
}