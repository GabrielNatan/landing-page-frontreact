import { useGSAP } from "@gsap/react"
import gsap from "gsap"
import { ScrollTrigger } from "gsap/all"
import { Plus } from "phosphor-react"
import { useRef } from "react"
import { useTranslation } from "react-i18next"

gsap.registerPlugin(useGSAP,ScrollTrigger)

export const Questions = ()=>{

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
   
    <section className="w-full py-10 lg:pb-40 px-5 flex justify-center">
    <div ref={container} className="container w-full flex gap-5  flex-col lg:flex-row">

      <img 
        src="https://plus.unsplash.com/premium_photo-1661281213530-eb396b7f6dee?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className="flex-1 object-cover object-center lg:w-[50%] rounded-lg 
      "/>

      <div className="flex-1">

        <h2 className="text-4xl font-extrabold mb-5">{t('questions.title')}</h2>

        <ol className="flex flex-col gap-5">
          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>{t('questions.one.title')}</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                {t('questions.one.description')}
              </p>
            </div>
          </li>

          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>{t('questions.two.title')}</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                {t('questions.two.description')}
              </p>
            </div>
          </li>

          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>{t('questions.three.title')}</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                {t('questions.three.description')}
              </p>
            </div>
          </li>

          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>{t('questions.four.title')}</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                {t('questions.four.description')}
              </p>
            </div>
          </li>


        </ol>

      </div>

    </div>
  </section> 
  )
}