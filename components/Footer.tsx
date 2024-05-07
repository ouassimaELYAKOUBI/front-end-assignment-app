import Image from 'next/image'
import { SOCIAL_MEDIA } from "@/constants";

const Footer = () => {
  return (
    <footer className="md:block hidden font-satoshi absolute bottom-0 z-40  inset-x-36">
      <div className='flex items-center justify-between '>
      <div className="flex justify-center items-center gap-10">
        <p className='text-base font-thin leading-[130%]'>© Creon 2023. All rights reserved.</p>
        <div className='flex gap-3 items-center justify-center'>
              
              {SOCIAL_MEDIA?.map(icon=>(
                <div key={icon.img} className="rounded-full border-2 border-white flex items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-200 ease-in cursor-pointer">
                <Image src={icon.img}  alt="" className=" w-6 h-6 m-2 "/>
                </div>
              ))

              }
            
      </div>
      </div>
      <div className='flex justify-center items-center gap-2 '>
        <p className="text-base leading-[130%] font-thin">Powered by</p>
        <Image src="/niftablesLogo.png" alt="" width={101} height={18}/>
      </div>
      </div>
    </footer>
  )
}

export default Footer