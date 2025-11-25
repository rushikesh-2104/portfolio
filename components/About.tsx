import React from 'react'
import { HoverExpand_001 } from './ui/skiper-ui/skiper52';
import { InteractiveHoverButton } from './magicui/interactive-hover-button';
import { ArrowDownLeft, Copyright } from 'lucide-react';
import { Link004 } from './ui/skiper-ui/skiper40';
import Link from 'next/link';
import Image from 'next/image';
import AnimatedDiv from './animatedDiv';

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
<div className='roboto-condensed w-screen overflow-x-hidden md:h-[280vh] h-[220vh] py-20 px-10 flex justify-center bg-black z-1000 absolute'>
      <div className='text-white'>
        {/* Fixed unescaped quotes */}
        <h1 className='md:text-5xl text-lg text-center  italic'>
          &quot;Turning concepts into reality  through code and design.&quot;
        </h1>

        

        <div className="relative md:top-40 top-50 md:left-20 left-70  w-[80vw] border-t border-gray-300"></div>

        <Link href="/Aboutme">
              
  <div className="relative md:top-12 md:left-200 top-15 left-100 md:w-[15vw] w-[60vw]  h-[30vh] rounded-full bg-white text-black flex justify-center items-center text-3xl overflow-hidden group">
    <span className="lora relative z-10">About Me</span>
    <span className="absolute inset-0 bg-amber-100  scale-0 group-hover:scale-100  transition-transform duration-300 ease-out rounded-full "></span>
  </div>
</Link>


        <div className='md:text-xl relative md:top-40 top-0'>RECENT WORKS :</div>

      <div className='md:w-0 w-full'>
        <HoverExpand_001 images={images} className='relative md:top-50 top-30 md:w-[100vw] w-full  ' />
      </div>

        <Link href="/Work">
          <InteractiveHoverButton className='md:top-80 top-80 left-100 md:left-130'>
            Detailed Work
          </InteractiveHoverButton>
        </Link>

        <AnimatedDiv>
        <h1 className='roboto-condensed md:text-8xl text-5xl relative md:top-102 top-120 md:left-105 left-70'>
          &nbsp; &nbsp; Let&apos;s work <br /> together
        </h1>
        </AnimatedDiv>
        <br />

        <div className="bg-white border-white border-2 md:h-[15vh] h-[0vh] md:w-[8vw] rounded-full overflow-hidden relative md:top-45 md:left-93">
          <Image
            className="h-full w-full object-cover"
            src="/photo1.jpg"
            alt="profile"
            width={500}
            height={500}
            priority
          />
        </div>

        <div className="relative md:top-140 top-120  md:left-30 left-70 w-[70vw] border-t border-gray-300"></div>

        <Link href="/Contact">
          <div className="relative md:top-110 top-100 md:left-200 left-120 md:w-[15vw] w-[40vw] h-[20vh] text-center  md:h-[30vh] rounded-full bg-white text-black flex justify-center items-center text-3xl overflow-hidden group">
          <span className="lora relative z-10">Contact Me</span>
          <span className="absolute inset-0 bg-amber-100 scale-0 group-hover:scale-100 transition-transform duration-300 ease-out rounded-full"></span>
          </div>
        </Link>

        {/* <div className="relative md:top-45  md:left-250  text-white scale-130">
          <ArrowDownLeft/>
        </div> */}

        <div className="md:h-[5vh] h-[5vh] w-[45vw] md:w-[15vw] relative md:top-83 top-80 left-70 md:left-50 text-center p-2 border border-white rounded-full text-white bg-black 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black">
  hrishi210402@gmail.com
</div>

<div className="md:h-[5vh] h-[5vh] w-[45vw] md:w-[10vw] relative md:top-74 top-85 md:left-120 left-70 text-center p-2 border border-white rounded-full text-white bg-black 
  transition-all duration-300 ease-in-out transform hover:scale-105 hover:bg-white hover:text-black">
  +91 7208553533
</div>


<div className="relative text-gray-300 md:absolute md:bottom-50  w-full">
  <span className='relative md:left-0 md:top-0 top-120 left-80'>version</span>
  <span className='relative left-120 md:left-220 md:top-0 top-120'>Socials</span>
</div>


        <div className='relative top-125 md:left-0 right-75 md:top-130 flex justify-between md:px-5 text-gray-300'>
          <span className='flex relative md:bottom-0 bottom-0 md:left-0 left-150'> 2025 <Copyright/> Edition</span>
          <span className="md:flex ">
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
