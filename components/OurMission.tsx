import Image from 'next/image'
import React from 'react'
import Missions from './Missions'

const OurMission = () => {
  return (
    <div className="h-screen w-full relative">
      <div className="flex flex-col md:flex-row md:ps-40 md:pt-28">
        <div className="flex flex-col w-1/2 gap-y-20">
          <h1 className="font-monument text-2xl md:text-4xl font-semibold tracking-widest uppercase">Our vision is to support the innovation of AI blockchain projects <span className="gradient-text">while prioritizing communities and democratizing profits</span></h1>
          <div className="flex justify-end items-end p-6">
            <Image src="/CREON1.png" alt="" width={112} height={148}/>
          </div>
        </div>
        <div className="flex flex-col">
          <Missions/>
        </div>
      </div>
    </div>
  )
}

export default OurMission