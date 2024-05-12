export const Partners = ()=>{
  return(
    <section className="w-full flex justify-center py-10 lg:py-28 bg-slate-100">
    <div className="container flex flex-col gap-10 overflow-auto">

      <h2 className="text-4xl font-extrabold text-center sticky lg:relative left-0">Our Partners</h2>
      <div className=" flex w-[300vh] px-5   lg:w-full lg:grid lg:grid-rows-2 lg:grid-cols-4 gap-5">
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=Amazon.png" className="max-w-40 w-full" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=Dropbox.png" className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=Netflix.png" className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=PayPal.png" className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=Slack.png" className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=Spotify.png" className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=Tesla.png" className="max-w-40 w-full object-contain" />
        </div>
        <div className="flex items-center justify-center w-full border rounded-lg p-5 bg-white">
          <img src="/src/assets/Company=YouTube.png" className="max-w-40 w-full object-contain" />
        </div>
      </div>

    </div>
  </section>
  )
}