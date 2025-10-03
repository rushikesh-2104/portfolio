import { Copyright } from 'lucide-react'
import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='absolute top-5 w-screen'>
      <div className="w-screen h-[10vh] flex justify-between py-3 px-13 bg-transparent">
        <span className='lora text-xl font-bold text-white flex items-center gap-2'>
          <Copyright /> Code By Rushikesh
        </span>
        
        <div className="flex gap-8 text-xl font-bold text-white lora">
          <Link href="/Work" className="group relative">
            <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
              Work
            </h4>
            <span className="absolute bottom-3 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
          </Link>

          <Link href="/Aboutme" className="group relative">
            <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
              About
            </h4>
            <span className="absolute bottom-3 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
          </Link>

          <Link href="/Contact" className="group relative">
            <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
              Contact
            </h4>
            <span className="absolute bottom-3 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
          </Link>
        </div>
      </div>
    </div>
  )
}

export default Nav
