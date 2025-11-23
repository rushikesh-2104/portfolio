// import { Copyright } from 'lucide-react'
// import React from 'react'
// import Link from 'next/link';

// const Nav = () => {
//   return (
//     <div className='absolute top-5 w-screen'>
//       <div className="w-screen h-[10vh] flex justify-between py-3 px-13 bg-transparent">
//         <span className='lora text-xl font-bold text-white flex items-center gap-2'>
//           <Copyright /> Code By Rushikesh
//         </span>
        
//         <div className="flex gap-8 text-xl font-bold text-white lora">
//           <Link href="/Work" className="group relative">
//             <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
//               Work
//             </h4>
//             <span className="absolute bottom-3 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
//           </Link>

//           <Link href="/Aboutme" className="group relative">
//             <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
//               About
//             </h4>
//             <span className="absolute bottom-3 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
//           </Link>

//           <Link href="/Contact" className="group relative">
//             <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
//               Contact
//             </h4>
//             <span className="absolute bottom-3 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
//           </Link>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Nav
"use client";
import { Copyright, Menu, X } from "lucide-react";
import React, { useState } from "react";
import Link from "next/link";

const Nav = () => {
  const [open, setOpen] = useState(false);

  return (
    <div className="absolute top-5 w-full z-50">
      <div className="w-full h-[10vh] flex justify-between items-center py-3 px-4 md:px-12 bg-transparent">
        
        {/* Logo */}
        <span className="lora text-lg md:text-xl font-bold text-white flex items-center gap-2">
          <Copyright /> Code By Rushikesh
        </span>

        {/* Desktop Menu */}
        <div className="hidden md:flex gap-8 text-xl font-bold text-white lora">
          {["Work", "Aboutme", "Contact"].map((item) => (
            <Link key={item} href={`/${item}`} className="group relative">
              <h4 className="transition-transform duration-300 ease-in-out group-hover:scale-110">
                {item === "Aboutme" ? "About" : item}
              </h4>
              <span className="absolute bottom-0 left-0 h-[2px] w-full scale-x-0 bg-white transition-transform duration-300 ease-in-out group-hover:scale-x-100 origin-center"></span>
            </Link>
          ))}
        </div>

        {/* Mobile Menu Button */}
        <button 
          className="md:hidden text-white"
          onClick={() => setOpen(!open)}
        >
          {open ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* Mobile Dropdown Menu */}
      {open && (
        <div className="md:hidden flex flex-col gap-6 px-6 py-4 text-white text-lg font-bold bg-black/80 backdrop-blur-md">
          <Link href="/Work" onClick={() => setOpen(false)}>Work</Link>
          <Link href="/Aboutme" onClick={() => setOpen(false)}>About</Link>
          <Link href="/Contact" onClick={() => setOpen(false)}>Contact</Link>
        </div>
      )}
    </div>
  );
};

export default Nav;
