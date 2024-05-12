import { Hero } from "./components/Hero"
import { Navbar } from "./components/Navbar"
import { Clients } from "./components/Clients"
import { Numbers } from "./components/Numbers"
import { Partners } from "./components/Partners"
import { Blog } from "./components/Blog"
import { Questions } from "./components/Questions"
import { Footer } from "./components/Footer"

export const App =()=>{
  return(
    <div>
      <header className="h-16 lg:h-28 w-full flex items-center justify-center border-b fixed top-0 left-0 bg-white">
        <Navbar/>
      </header>
      <main className="w-full min-h-screen flex items-center justify-center pt-36 flex-col">
        <Hero/>

        <Clients/>

        <Numbers/>
      
        <Partners/>
      
        <Blog/>

        <Questions/> 
     
      </main>

      <footer className="w-full flex flex-col lg:flex-row justify-center bg-slate-100">
        <Footer/>
      </footer>
    </div>
  )
}