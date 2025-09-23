import React from 'react'
import { HoverExpand_001 } from './ui/skiper-ui/skiper52';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { ArrowDownLeft } from 'lucide-react';
import { Copyright } from 'lucide-react'
import { Link004 } from './ui/skiper-ui/skiper40';
import Link from 'next/link';
import Aboutme from '../app/Aboutme/page';  
import Contact from '../app/Contact/page';




const About = () => {
  
  const images = [
    {
      src: "/ofsposter.png",
      alt: "One Fitness Studio Web-Design",
      code: "# 01",
    },
    {
      src: "/resumeposter.png",
      alt: "Resume maker",
      code: "# 02",
    },

    {
      src: "/sasposter.png",
      alt: "Face recognization",
      code: "# 03",
    },

    {
      src: "/voiceposter.png",
      alt: "voice assistance",
      code: "# 04",
    },
    {
      src: "/talksyncposter.png",
      alt: "Description 4",
      code: "# 04",
    },
    {
      src: "/coronaposter.png",
      alt: "Description 4",
      code: "# 04",
    },
    {
      src: "https://cdn.dribbble.com/userupload/16714261/file/original-32311956f97c735076b83ad5a879fdc4.png?resize=1504x1128&vertical=center",
      alt: "Description 4",
      code: "# 04",
    },

    
  ];

  


  

  return (
    <div className='roboto-condensed w-screen h-[280vh]  py-20 px-10 flex justify-center bg-black z-1000 absolute'>
      <div className='text-white'>
      <h1 className='text-5xl text-center italic'>"Turning concepts into reality through code and design."</h1> <br />
      <div className="relative top-40 left-20  w-[80vw] border-t border-gray-300"></div>
      <Link href="/Aboutme">      
      <div className=' relative top-12 left-250 w-[15vw] h-[30vh] rounded-full bg-white text-black flex justify-center items-center  text-3xl hover:bg-amber-100 '>About Me</div>
      </Link>
      <div className='relative top-30 left-20 font-sans'>RECENT WORKS</div>
      <HoverExpand_001 images={images} className='relative top-50 left-40  '/>
      
      <Link href="/Work">
      <InteractiveHoverButton className='top-80 left-170 '>
        Detailed Work
      </InteractiveHoverButton>
      </Link>
      


    
    
    <h1 className='roboto-condensed text-8xl relative top-102 left-105'>&nbsp; &nbsp; Let's work <br />  together</h1> <br />
    
    <div className="bg-white border-white border-2 h-[15vh] w-[8vw] rounded-full overflow-hidden relative top-45 left-93">
     <img
      className="h-full w-full object-cover"
      src="/photo1.jpg"
      alt="profile"
      />
    </div>

    
    <div className="relative top-140 left-30  w-[70vw] border-t border-gray-300"></div>
    <Link href="/Contact">
    <div className='lora relative top-110 left-200 w-[15vw] h-[30vh] rounded-full bg-white text-black flex justify-center items-center text-3xl hover:bg-amber-100 ' >Contact Me</div>
    </Link>
    

    <div className="relative top-45 left-350 text-white scale-130">
      <ArrowDownLeft/>
    </div>

    <div className='h-[5vh] w-[15vw] relative top-80 left-50 text-center p-2 border-white border-1 rounded-full text-white bg-black hover:bg-white hover:text-black '>hrishi210402@gmail.com</div>
    <div className='h-[5vh] w-[10vw] relative top-70 left-120 text-center p-2 border-white border-1 rounded-full text-white bg-black hover:bg-white hover:text-black '>+91 7208553533</div>

    <div className='relative top-95 flex justify-between px-5 text-gray-300 '>
      <span>version</span>
      <span className='relative right-57'>Socials</span>
    </div>

    <div className='relative top-100 flex justify-between px-5 text-gray-300 '>
      <span className='flex'> 2025 <Copyright/> Edition</span>
      <span className="flex">
        <Link004 href="https://www.instagram.com/emoji2104/">Instagram</Link004>
        <Link004 href="https://www.linkedin.com/in/contactrushikesh21/">LinkedIn</Link004>
        <Link004 href="https://github.com/rushikesh-2104">Github</Link004>
        <h3></h3>
      </span>
    </div>

    </div>
    </div>
  
  
  )
}

export default About
