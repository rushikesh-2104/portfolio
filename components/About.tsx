import React from 'react'
import { HoverExpand_001 } from './ui/skiper-ui/skiper52';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { ArrowDownLeft, Copyright } from 'lucide-react';
import { Link004 } from './ui/skiper-ui/skiper40';
import Link from 'next/link';
import Image from 'next/image';

const About = () => {
  const images = [
    { src: "/ofsposter.png", alt: "One Fitness Studio Web-Design", code: "#01" },
    { src: "/resumeposter.png", alt: "Resume maker", code: "#02" },
    { src: "/sasposter.png", alt: "Face recognization", code: "#03" },
    { src: "/voiceposter.png", alt: "Voice assistance", code: "#04" },
    { src: "/talksyncposter.png", alt: "TalkSync Project", code: "#05" },
    { src: "/coronaposter.png", alt: "Covid Prevention", code: "#06" },
    { src: "https://cdn.dribbble.com/userupload/16714261/file/original-32311956f97c735076b83ad5a879fdc4.png?resize=1504x1128&vertical=center", alt: "External Project", code: "#07" },
  ];

  return (
    <div className='roboto-condensed w-screen h-[280vh] py-20 px-10 flex justify-center bg-black z-1000 absolute'>
      <div className='text-white'>
        {/* Fixed unescaped quotes */}
        <h1 className='text-5xl text-center italic'>
          &quot;Turning concepts into reality through code and design.&quot;
        </h1>
        <br />

        <div className="relative top-40 left-20 w-[80vw] border-t border-gray-300"></div>

        <Link href="/Aboutme">
              
  <div className="relative top-12 left-200 w-[15vw] h-[30vh] rounded-full bg-white text-black flex justify-center items-center text-3xl overflow-hidden group">
    <span className="lora relative z-10">About Me</span>
    <span className="absolute inset-0 bg-amber-100  scale-0 group-hover:scale-100  transition-transform duration-300 ease-out rounded-full "></span>
  </div>
</Link>


        <div className='text-xl relative top-40 '>RECENT WORKS :</div>

        <HoverExpand_001 images={images} className='relative top-50 ' />

        <Link href="/Work">
          <InteractiveHoverButton className='top-80 left-130'>
            Detailed Work
          </InteractiveHoverButton>
        </Link>

        {/* Fixed unescaped apostrophe */}
        <h1 className='roboto-condensed text-8xl relative top-102 left-105'>
          &nbsp; &nbsp; Let&apos;s work <br /> together
        </h1>
        <br />

        <div className="bg-white border-white border-2 h-[15vh] w-[8vw] rounded-full overflow-hidden relative top-45 left-93">
          <Image
            className="h-full w-full object-cover"
            src="/photo1.jpg"
            alt="profile"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="relative top-140 left-30 w-[70vw] border-t border-gray-300"></div>

        <Link href="/Contact">
          <div className="relative top-110 left-200 w-[15vw] h-[30vh] rounded-full bg-white text-black flex justify-center items-center text-3xl overflow-hidden group">
          <span className="lora relative z-10">Contact Me</span>
          <span className="absolute inset-0 bg-amber-100 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full"></span>
          </div>
        </Link>

        <div className="relative top-45 left-350 text-white scale-130">
          <ArrowDownLeft/>
        </div>

        <div className="h-[5vh] w-[15vw] relative top-80 left-50 text-center p-2 border border-white rounded-full text-white bg-black 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black">
  hrishi210402@gmail.com
</div>

<div className="h-[5vh] w-[10vw] relative top-70 left-120 text-center p-2 border border-white rounded-full text-white bg-black 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black">
  +91 7208553533
</div>


        <div className='relative top-135 flex justify-between px-5 text-gray-300'>
          <span>version</span>
          <span className='relative right-57'>Socials</span>
        </div>

        <div className='relative top-140 flex justify-between px-5 text-gray-300'>
          <span className='flex'> 2025 <Copyright/> Edition</span>
          <span className="flex">
            <Link004 href="https://www.instagram.com/emoji2104/">Instagram</Link004>
            <Link004 href="https://www.linkedin.com/in/contactrushikesh21/">LinkedIn</Link004>
            <Link004 href="https://github.com/rushikesh-2104">Github</Link004>
          </span>
        </div>
      </div>
    </div>
  )
}

export default About;
