import { useTranslation } from "react-i18next"
import { Button } from "../Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

export const Hero = ()=>{
  const { t } = useTranslation()

  const container = useRef(null)

  useGSAP(()=>{
    if(!container.current)return;

    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: container.current,
        start:'top +=500'
      }
    })
    const from = { y:-30, opacity:0 }
    const to = { y:0, opacity:1, stagger:0.3, duration:0.6,delay:0.5 }
    
    tl.fromTo( '#hero_left > *', from, to )
    tl.fromTo( '#cont_img', from, to )
    tl.fromTo( 'img',{
      scale:0.9,
      opacity:0
    },{
      scale:1,
      opacity:1,
      duration:2
    } )
    
  },{scope:container})


  return(
    <section ref={container} className="container flex h-full min-h-[80vh] flex-col lg:flex-row items-center p-5">
      <div id="hero_left" className="flex-1 flex flex-col justify-center lg:items-start items-center text-center lg:text-start mb-10 lg:m-0">
        <h1 className="text-5xl lg:text-7xl font-extrabold w-2/3 mb-4">{t('hero.title')}</h1>
        <h2 className="mb-4 text-xl">{t('hero.subtitle')}</h2>
        <Button>{t('hero.button')}</Button>
      </div>
      <div id="cont_img" className="flex-1 bg-slate-200/50 rounded-3xl flex items-center justify-center p-5 lg:p-10 h-min">
        <img 
          className="rounded-2xl object-cover object-top w-full h-[27rem] lg:h-[35rem] " 
          src="https://plus.unsplash.com/premium_photo-1682125454953-0cce2249a554?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        />
      </div>
    </section>
  )
}