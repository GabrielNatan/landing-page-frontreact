export const Numbers = ()=>{
  return(
    <section className="p-10 lg:p-40">

    <div className="container flex flex-col text-center">
      <h2 className=" text-xl font-extrabold lg:text-4xl max-w-2xl mb-5 text-center m-auto">Our business strategy has helped many businesses across the globe</h2>
      <p className="text-sm lg:text-lg">Lorem ipsum dolor sit amet consectetur. Elementum nisl duis tortor sed. Suspendisse lobortis vitae quis vehicula pellentesque sit id</p>
      <div className="w-full flex lg:gap-5 my-2 lg:my-10 flex-col lg:flex-row">
        <div className="flex flex-1  border-b lg:border-b-0 lg:border-r  py-5 lg:pb-0 lg:my-10 flex-col">
          <strong>Clientes</strong>
          <span className="text-3xl">12K</span>
        </div>

        <div className="flex flex-1  border-b lg:border-b-0 lg:border-r  py-5 lg:pb-0 lg:my-10 flex-col">
          <strong>Annual growth</strong>
          <span className="text-3xl">55%</span>
        </div>

        <div className="flex flex-1  border-b lg:border-b-0 lg:border-r  py-5 lg:pb-0 lg:my-10 flex-col">
          <strong>No of projects</strong>
          <span className="text-3xl">5K</span>
        </div>

        <div className="flex flex-1  py-5 lg:pb-0 lg:my-10 flex-col">
          <strong>Positive ratings</strong>
          <span className="text-3xl">80%</span>
        </div>
      </div>
      <img className="hidden lg:flex w-full h-[600px] rounded-xl" src="https://images.unsplash.com/photo-1522071820081-009f0129c71c?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"  />
    </div>

  </section>
  )
}