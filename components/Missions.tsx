import React from 'react'
import {missions} from '@/constants';
import Image from 'next/image'

const Missions = () => {
  return (
    <div className="flex flex-col items-start justify-start gap-y-10">
        {
            missions?.map(item=>(
                <div key={item.icon} className="flex flex-row gap-x-20">
                    <div>
                        <Image src={item.icon} alt="" width={56} height={62} className="z-10 absolute  transition-opacity duration-300 flex-shrink-0"/>
                    </div>
                    <div>
                        <h1 className="text-xl font-bold font-satoshi">{item.title}</h1>
                    </div>

                </div>

            ))
        }
    </div>
  )
}

export default Missions