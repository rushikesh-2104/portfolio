import { Copyright } from 'lucide-react'
import React from 'react'
import Link from 'next/link';

const Nav = () => {
  return (
    <div className='absolute top-5 max-w-screen'>
           <div className=" w-screen h-[10vh] flex justify-between py-3 px-13 bg-transparent">
  <span className='roboto-condensed text-xl font-bold text-white flex'> <Copyright/> Code By Rushikesh</span>
  <div className="flex gap-5 text-xl font-bold text-white roboto-condensed ">

    <h4>Work</h4>
    <Link href="/Aboutme"><h4>About</h4></Link>
    <Link href="/Contact"><h4>Contact</h4></Link>
  </div>
</div>
      
    </div>
  )
}

export default Nav




