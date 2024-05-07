import { creonPass } from '@/constants'
import React from 'react'

const CreonPass = () => {
  return (
    <div className="h-max w-full relative ">
      <div className='flex md:flex-row flex-col md:gap-x-16 gap-y-0'>
      <div className="flex flex-col w-11/12 md:w-full md:ps-40 p-10 gap-y-6 md:gap-y-12 px-6 md:px-0">
        <p className="font-monument font-extrabold text-3xl md:text-5xl uppercase tracking-widest py-2 md:py-0 md:w-3/4">Creon pass nft</p>
        <div className='border-t border-[#13171D] drop-shadow-2xl  w-fit md:pt-8 pt-6'>
          <div className="bg-black ">
            <p className="gradient-text font-satoshi py-2 font-bold text-lg md:text-[22px]">The Creon NFT pass unlocks access to AI projects, the Creon launchpad, and a ticket to generate passive income through AI-driven tools</p>
          </div>
        </div>
        <div className=''>
          {creonPass?.map(content=>(
            <div className="border rounded-lg p-3 mb-3 w-fit drop-shadow-2xl border-[#13171D]" key={content.label}>
              <p className="text-lg font-satoshi">{content.label}</p>
            </div>
          ))}
        </div>
        <div className="bg-gradient-to-r from-[#3D8BFF] to-[#AB23FF] rounded-lg flex items-center justify-center p-3 w-3/4">
          <button className="font-satoshi font-bold text-lg">Buy Creon Pass</button>
        </div>
      </div>
      <div className="w-3/4  flex items-center justify-center">
        <video src="/nft-video.mp4" autoPlay muted loop className=" w-full md:h-full h-auto md:pt-20 md:pr-8 p-4 object-cover" />
        </div>
        </div>
    </div>
  )
}

export default CreonPass