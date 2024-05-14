import { useTranslation } from "react-i18next"
import Amazon from "/src/assets/Company=Amazon.png"
import Dropbox from "/src/assets/Company=Dropbox.png"
import Netflix from "/src/assets/Company=Netflix.png"
import PayPal from "/src/assets/Company=PayPal.png"
import Slack from "/src/assets/Company=Slack.png"
import Spotify from "/src/assets/Company=Spotify.png"
import Tesla from "/src/assets/Company=Tesla.png"
import YouTube from "/src/assets/Company=YouTube.png"
import { useRef } from "react"
import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"

gsap.registerPlugin(useGSAP,ScrollTrigger)

export const Partners = ()=>{

  const { t } = useTranslation()
  const container = useRef<HTMLDivElement | null>(null)

  useGSAP(()=>{
    if(!container.current)return;
    const element = container.current
    const tl = gsap.timeline({
      scrollTrigger:{
        trigger: container.current,
        start:'top +=500'
      }
    })

    tl.fromTo(  
      element.children,
      {
        y:30,
        opacity:0
      },
      {
        y:0,
        opacity:1,
        stagger:0.3,
        duration:0.7,
      }
    )

  },{scope:container})

  return(
    <section className="w-full flex justify-center py-10 lg:py-28 bg-slate-100">
    <div className="container flex flex-col gap-10 overflow-auto">

      <h2 className="text-4xl font-extrabold text-center sticky lg:relative left-0">{t('partners.title')}</h2>
      <div ref={container} className=" flex w-[300vh] px-5  lg:overflow-hidden lg:w-full lg:grid lg:grid-rows-2 lg:grid-cols-4 gap-5">
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={Amazon} className="max-w-40 w-full" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={Dropbox} className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={Netflix} className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={PayPal} className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={Slack} className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={Spotify} className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={Tesla} className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src={YouTube} className="max-w-40 w-full object-contain" />
        </div>
      </div>

    </div>
  </section>
  )
}