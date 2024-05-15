import { useTranslation } from "react-i18next"
import { Button } from "../Button"
import logo from "/src/assets/logo.png"
import { ButtonPopper } from "../I18n"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP,ScrollTrigger)

export const Navbar = ()=>{
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
    const to = { y:0, opacity:1, stagger:0.3, duration:0.6 }
    
    tl.fromTo( '#nav_logo > *', from, to )
    tl.fromTo( 'nav > *', from, {...to,delay:0.5,duration:0.3} )
    tl.fromTo( '#nav_btn', from, to )

  }, {scope:container})

  return(
    <div ref={container} className="flex-1 container flex items-center justify-center lg:justify-between bg-white">
      <div id="nav_logo" className="flex items-center">
        <img src={logo} className="w-14"/>
        <h1 className="text-xl font-extrabold text-purple-500">Front<span className="text-amber-500">React</span></h1>
      </div>
      <div className="fixed lg:relative top-0 left-0 h-screen lg:h-full w-screen lg:w-full bg-white lg:bg-transparent z-10 px-5  py-10 lg:p-0 translate-x-full lg:translate-x-0 flex flex-col lg:flex-row lg:justify-end lg:items-center">
        <nav className="flex flex-col lg:flex-row mb-5 lg:m-0 lg:mr-6 lg:items-center">
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium"  href="#">{t('navbar.one')}</a>
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium"href="#">{t('navbar.two')}</a>
          <a className="py-2 px-5 rounded-md text-purple-500 hover:bg-purple-300/15 font-medium mr-5"href="#">{t('navbar.three')}</a>
          <ButtonPopper/>
        </nav>
        <Button id="nav_btn">{t('navbar.button')}</Button>
      </div>
    </div>  
  )
}