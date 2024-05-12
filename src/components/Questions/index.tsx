import { Plus } from "phosphor-react"

export const Questions = ()=>{
  return(
   
    <section className="w-full py-10 lg:pb-40 px-5 flex justify-center">
    <div className="container w-full flex gap-5  flex-col lg:flex-row">

      <img 
        src="https://plus.unsplash.com/premium_photo-1661281213530-eb396b7f6dee?q=80&w=2072&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" 
        className="flex-1 object-cover object-center lg:w-[50%] rounded-lg 
      "/>

      <div className="flex-1">

        <h2 className="text-4xl font-extrabold mb-5">Frequently asked questions</h2>

        <ol className="flex flex-col gap-5">
          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>Lorem ipsum dolar sit amet consectetur</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                Lorem ipsum dolor sit amet consectetur. 
                Pulvinar arcu mattis in at sodales condimentum. 
                Gravida arcu aliquet rutrum erat varius. 
                Tellus felis sed pretium in egestas. 
              </p>
            </div>
          </li>

          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>Lorem ipsum dolar sit amet consectetur</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                Lorem ipsum dolor sit amet consectetur. 
                Pulvinar arcu mattis in at sodales condimentum. 
                Gravida arcu aliquet rutrum erat varius. 
                Tellus felis sed pretium in egestas. 
              </p>
            </div>
          </li>

          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>Lorem ipsum dolar sit amet consectetur</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                Lorem ipsum dolor sit amet consectetur. 
                Pulvinar arcu mattis in at sodales condimentum. 
                Gravida arcu aliquet rutrum erat varius. 
                Tellus felis sed pretium in egestas. 
              </p>
            </div>
          </li>

          <li className="flex flex-col border rounded-lg">
            <div className="flex justify-between px-5 py-4">
              <strong>Lorem ipsum dolar sit amet consectetur</strong>
              <Plus size={20}/>
            </div>
            <div className="hidden h-0">
              <p  className="px-5 py-2">
                Lorem ipsum dolor sit amet consectetur. 
                Pulvinar arcu mattis in at sodales condimentum. 
                Gravida arcu aliquet rutrum erat varius. 
                Tellus felis sed pretium in egestas. 
              </p>
            </div>
          </li>


        </ol>

      </div>

    </div>
  </section> 
  )
}