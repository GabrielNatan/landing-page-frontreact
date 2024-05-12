import { CheckCircle } from "phosphor-react"
import { Button } from "../Button"

export const Clients = ()=>{
  return(
    <section className="lg:h-screen w-full flex flex-col items-center p-10 px-5 lg:pt-32 bg-slate-100">
    <div className="container text-center mb-5" >
      <h2 className="text-2xl lg:text-5xl font-extrabold max-w-xl mx-auto mb-5">Why our clients trust us</h2>
      <p  className="text-sm lg:text-md  lg:max-w-5xl mx-auto">
        Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. 
        Suspendisse lobortis vitae quis vehicula pellentesque sit id. Urna posuere 
        consequat velit vulputate faucibus pretium arcu accumsan sit. Vel venenatis 
        sapien.
      </p>
    </div>

    <div className="container flex flex-1 flex-col lg:flex-row gap-10 items-center ">

      <div className="flex flex-col 2xl:grid 2xl:grid-cols-3 2xl:grid-rows-[300px_200px] flex-1 2xl:flex-1 gap-2 2xl:gap-5">
        <img className="w-full h-full grid-cols-subgrid col-span-3 object-cover rounded-xl" src="https://images.unsplash.com/photo-1522202176988-66273c2fd55f?q=80&w=2071&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <img className="lg:hidden 2xl:flex w-full h-full grid-cols-subgrid col-span-2 object-cover rounded-xl" src="https://images.unsplash.com/photo-1517048676732-d65bc937f952?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
        <img className="lg:hidden 2xl:flex w-full h-full grid-cols-subgrid col-span-1 object-cover rounded-xl" src="https://images.unsplash.com/photo-1542744173-8e7e53415bb0?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"/>
      </div>
      <ol className="px-3 flex-1 h-full flex flex-col justify-center  lg:items-start">
        <li className="py-3 text-xl max-w-lg flex gap-1">
          <CheckCircle size={28} weight="fill"  className="fill-emerald-500 mt-[2px]"/>
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        </li>
        <li className="py-3 text-xl max-w-lg flex gap-1">
          <CheckCircle size={28} weight="fill"  className="fill-emerald-500 mt-[2px]"/>
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        </li>
        <li className="py-3 text-xl max-w-lg flex gap-1">
          <CheckCircle size={28} weight="fill"  className="fill-emerald-500 mt-[2px]"/>
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        </li>
        <li className="py-3 text-xl max-w-lg flex gap-1 mb-10">
          <CheckCircle size={28} weight="fill"  className="fill-emerald-500 mt-[2px]"/>
          Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed.
        </li>
        <Button>Ver mais</Button>
      </ol>

    </div>

  </section>
  )
}