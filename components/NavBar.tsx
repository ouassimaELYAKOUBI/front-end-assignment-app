'use client'
import { NAV_LINKS, SOCIAL_MEDIA } from "@/constants";
import Image from "next/image";
import Link from "next/link";
import { useState } from "react";

const NavBar = () => {
  const [open, setOpen] = useState(false);
 
  return (
    <nav className="absolute w-full md:p-6 font-satoshi">
           {/* {open && <div className="absolute  top-0 left-0 bg-transparent z-50  h-full w-screen backdrop-blur-sm"></div>}*/}
      
      <div className="flex items-center justify-between">
       <div className="mx-7">
          <Link href="/" className="backdrop-blur-none">
            <Image src="/Logo.png" alt="logo" width={140} height={39} />
          </Link>
        </div>
        <div className="md:block hidden px-8 py-2 font-medium">
          <ul className="flex items-center gap-12 text-lg justify-center">
            {NAV_LINKS?.map(link=>(
              <Link href={link.href} key={link.key} className="font-bold">{link.label}{" "}<span className="align-top font-bold text-xs text-[#AB23FF] uppercase">{link.available}</span>
              </Link>
            ))}
            <button className="rounded-lg border-2 px-8 py-2 hover:bg-[#3D8BFF] ">Connect</button>

          </ul>

        </div>
        {/*mobile menu */}
        <div className="flex flex-row-reverse items-center md:hidden relative ">
        <div onClick={()=>setOpen(!open)} className='z-[999] text-3xl md:hidden m-5 '>
        {open ? (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-11 h-11 cursor-pointer bg-blue-500 rounded-lg p-2">
            <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>

        ) : (
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8 cursor-pointer">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        )}

        </div>
        {open && (
          <button className="rounded-lg border-2 px-8 py-2 hover:bg-[#3D8BFF] ml-3 md:hidden">Connect</button>
        )}
        </div>
        <div className={`md:hidden absolute w-2/3 h-screen px-7  font-medium top-0 duration-300 py-8 ${open? 'right-0 ':'right-[-100%]'} 	`}>
          <ul className="flex flex-col justify-start items-start h-full gap-10 py-4 mt-10 text-lg ">
            {NAV_LINKS?.map(link=>(
                <Link href={link.href} key={link.key} className="font-bold">{link.label}{" "}<span className="align-top font-bold text-xs text-[#AB23FF] uppercase">{link.available}</span>
                </Link>
              ))}
          </ul>
          <div className='absolute left-0 bottom-4 flex gap-x-3 items-center'>
              
                {SOCIAL_MEDIA?.map(icon=>(
                  <div key={icon.img} className="rounded-full border-2 border-white flex items-center justify-center hover:bg-[#3D8BFF] hover:border-transparent duration-200 ease-in cursor-pointer">
                  <Image src={icon.img}  alt="" className=" w-6 h-6 m-2 "/>
                  </div>
                ))

                }
              
        </div>
        </div>
        
        
      </div> 

    </nav>
  )
}

export default NavBar