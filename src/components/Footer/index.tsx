import { FacebookLogo, InstagramLogo, TwitterLogo, YoutubeLogo } from "phosphor-react"
import { Button } from "../Button"
import logo from "/src/assets/logo.png"
export const Footer = ()=>{
  return(
    <div className="container flex justify-center  flex-col lg:flex-row relative lg:h-96 px-5 pt-5">
      <form className="container text-slate-50 lg:-top-14  lg:absolute w-full p-10 bg-violet-950 rounded-3xl flex gap-10 items-center flex-col lg:flex-row">

        <div className="flex-1">
          <h3 className="text-3xl  font-bold">Não Perca nada!</h3>
          <p className="text-xl">Cadastre sue email agora e tenha noticias de ultima hora.</p>
        </div>
        
        <div >
          <div className="flex gap-3 lg:items-end flex-col lg:flex-row">
            <div className="flex flex-col ">
              <label className="text-sm" htmlFor="name">Nome</label>
              <input className="p-2 rounded-md my-2 max-w-96" id="name" type="text"/>
            </div>
            <div className="flex flex-col">
              <label className="text-sm" htmlFor="email">Email</label>
              <input className="p-2 rounded-md my-2 max-w-96" id="email" type="email"/>
            </div>
            <div className="mb-2">
              <Button type="submit" >Inscreva-se</Button>
            </div>
          </div>
          <div > 
            <input id="checkbox" type="checkbox"/>
            <label htmlFor="checkbox" className="max-w-96"> Seu email aqui vai blablablabla vai blablablabla vai blablablabla vai blablablabla </label>
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
            Amet minim mollit non deserunt
            ullamco est sit aliqua dolor do amet
            sintelit officia consequat
          </p>
        </div>
        <ol>
          <li className="font-bold">Heading</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ol>
        <ol>
          <li className="font-bold">Heading</li>
          <li>Link 1</li>
          <li>Link 2</li>
          <li>Link 3</li>
          <li>Link 4</li>
        </ol>
        <div className="flex flex-col gap-3">
          <strong>Connect with us</strong>
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