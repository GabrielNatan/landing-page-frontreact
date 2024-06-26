import { useTranslation } from "react-i18next"
import { Button } from "../Button"
import gsap from "gsap"
import { useGSAP } from "@gsap/react"
import { ScrollTrigger } from "gsap/all"
import { useRef } from "react"

gsap.registerPlugin(useGSAP,ScrollTrigger)

export const Blog = ()=>{
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
        y:-30,
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
    <section className="w-full flex justify-center px-5">

    <div className="container flex flex-col  py-10 lg:py-40 gap-10">

      <h2 className="text-4xl font-extrabold text-center">{t('blog.title')}</h2>
      <div ref={container} className="flex gap-10 justify-center flex-col lg:flex-row">

          <div className="flex flex-col flex-1 rounded-md p-5 border shadow-md gap-4 max-w-96">
            <img src="https://images.unsplash.com/photo-1517430816045-df4b7de11d1d?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-sm w-full h-40 object-cover object-center"/>
            <div className="flex flex-1 flex-col gap-2 justify-between ">
              <strong>{t('blog.articles.one.title')}</strong>
              <p>
                {t('blog.articles.one.description')}
              </p>
              <Button>{t('blog.articles.button')}</Button>
            </div>
          </div>
          <div className="flex flex-col flex-1 rounded-md p-5 border shadow-md gap-4 max-w-96">
            <img src="https://images.unsplash.com/photo-1550745165-9bc0b252726f?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-sm w-full h-40 object-cover object-center"/>
            <div className="flex flex-1 flex-col gap-2 justify-between">
              <strong>{t('blog.articles.two.title')}</strong>
              <p>
              {t('blog.articles.two.description')}
              </p>
              <Button>{t('blog.articles.button')}</Button>
            </div>
          </div>
          <div className="flex flex-col flex-1 rounded-md p-5 border shadow-md gap-4 max-w-96">
            <img src="https://images.unsplash.com/photo-1525547719571-a2d4ac8945e2?q=80&w=1964&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className="rounded-sm w-full h-40 object-cover object-center"/>
            <div className="flex flex-1 flex-col gap-2 justify-between">
              <strong>{t('blog.articles.three.title')}</strong>
              <p>
              {t('blog.articles.three.description')}
              </p>
              <Button>{t('blog.articles.button')}</Button>
            </div>
          </div>

      </div>
    </div>

  </section>
  )
}