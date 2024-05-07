import React from 'react'

const Hero = () => {
  return (
    <div className="h-screen w-full relative ">
      
      <div className='flex flex-col absolute mt-64 md:mt-96 w-4/5 md:w-3/4 md:ps-20  gap-y-6 md:gap-y-12 px-6 md:px-0'>
        <h1 className='font-monument font-extrabold text-3xl md:text-5xl uppercase tracking-widest'>The world's first platform for Tokenizing AI blockchain projects</h1>
            <p className="gradient-border w-fit gradient-text font-satoshi py-2 font-bold text-lg md:text-[22px]">Hold the Creon Pass NFT and earn passive income from AI Tools</p>
      
      </div>
      <video src="/main-background-video.mp4" autoPlay muted loop className="absolute inset-0 w-full h-full object-cover z-[-10]"/>
    
    </div>
  )
}

export default Hero