import React from 'react'

const Profiting = () => {
  return (
    <div className='h-max w-full relative'>
      <div className=" flex flex-col md:ps-60 ">
        <div className="md:w-full md:pt-20 p-10">
          <h1 className="font-bold font-monument text-3xl md:text-5xl uppercase tracking-widest">Profiting Through</h1>
          <h1 className="gradient-text text-xl md:text-4xl font-monument pl-20 md:pl-96">AI Innovation & Decentralization</h1>
        </div>
        <div className="flex flex-col md:flex-row h-fit gap-y-5">
          <video src="/creon-logo.mp4" autoPlay loop muted className="md:w-1/2 w-full h-full object-cover px-6 md:px-0 " />
          <div className="flex flex-col justify-center items-center drop-shadow-2xl border-[#13171D] border-x gap-y-5 mx-10 md:ml-20 p-6">
            <h1 className="font-bold text-xl font-satoshi pt-2 ">The dynamic community driven business model of the future.</h1>
            <p className="font-thin text-lg font-satoshi ">At Creon, we blend the power of AI tools with the dynamic crypto and NFT markets, utilizing an innovative business model to drive profitability. This approach empowers our community, as our NFT and token holders directly benefit from the growth and prosperity of the Creon network, creating a win-win scenario for both our community and for the projects we launch.</p>
          </div>
        </div>
      </div>  
    </div>
  )
}

export default Profiting