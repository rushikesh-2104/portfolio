"use client";

import { AnimatedList } from '@/components/magicui/animated-list'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { CardStack } from '@/components/ui/card-stack'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card'
import { Timeline } from '@/components/ui/timeline'
import React from 'react'
import Image from 'next/image'

const Page = () => {
  const CARDS = [
    { id: 0, name: "", designation: "", content: (<Image src="/talksync-certificate.jpg" alt="Talksync certificate" width={500} height={300} className="object-cover" />) },
    { id: 1, name: "", designation: "", content: (<Image src="/ts4.jpg" alt="Talksync 4" width={500} height={300} className="object-cover" />) },
    { id: 2, name: "", designation: "", content: (<Image src="/ts2.jpg" alt="Talksync 2" width={500} height={300} className="object-cover" />) },
    { id: 3, name: "", designation: "", content: (<Image src="/ts3.jpg" alt="Talksync 3" width={500} height={300} className="object-cover" />) },
    { id: 4, name: "", designation: "", content: (<Image src="/ts1.jpg" alt="Talksync 1" width={500} height={300} className="object-cover" />) },
  ];

  const CARDS1 = [
    { id: 0, name: "", designation: "", content: (<Image src="/ace1.jpg" alt="ACE 1" width={500} height={300} className="object-cover" />) },
    { id: 1, name: "", designation: "", content: (<Image src="/ace2.jpg" alt="ACE 2" width={500} height={300} className="object-cover" />) },
    { id: 2, name: "", designation: "", content: (<Image src="/ace3.jpg" alt="ACE 3" width={500} height={300} className="object-cover" />) },
  ];

  const items = [
    { title: "Doggy", image: "/a14.jpg", className: "absolute top-10 left-[20%] rotate-[-5deg]" },
    { title: "Architecture", image: "/a20.jpg", className: "absolute top-40 left-[25%] rotate-[-7deg]" },
    { title: "Fruit", image: "/fruit2.jpg", className: "absolute top-5 left-[40%] rotate-[8deg]" },
    { title: "SunSet", image: "/sky5.jpg", className: "absolute top-32 left-[55%] rotate-[10deg]" },
    { title: "Meggi", image: "/food5.jpg", className: "absolute top-20 right-[35%] rotate-[2deg]" },
    { title: "Yaak", image: "/a20.jpg", className: "absolute top-24 left-[45%] rotate-[-7deg]" },
    { title: "J.P. Morgan", image: "/a8.jpg", className: "absolute top-8 left-[30%] rotate-[4deg]" },
  ];

  return (
    <div className='bg-black text-white h-full w-full'>
      <div>
        {/* Header Section */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-0 py-10 px-6 md:px-10">
          <div className='flex justify-between'>
            <div className="md:grid grid-cols-2 grid-rows-1 gap-4 ">
              <div className='flex justify-center'>
                <div className="bg-white relative roboto-condensed border-white border-3 h-[45vh] w-[23vw] rounded-full overflow-hidden  hidden md:block">
                  <Image
                    src="/photo1.jpg"
                    alt="profile"
                    fill
                    className="object-cover"
                    priority
                  />
                </div>
              </div>
              <div className='py-5 relative'>
                <BoxReveal>
                  <h3 className='md:text-5xl text-5xl font-bold font-serif'>Rushikesh Mhatre</h3>
                </BoxReveal>
                <div className='md:py-5 py-8'>
                  <BoxReveal>
                    <h3 className='text-3xl font-bold'> A Software Developer &amp; Designer </h3>
                    <h3 className='text-3xl font-bold py-2'> Intern at csociety.Infotech </h3>
                    <h5 className='text-xl font-bold py-1'> hrishi210402@gmail.com </h5>
                  </BoxReveal>
                </div>
              </div>
            </div>
          </div>
          <div className='flex justify-center py-10 '>
            <div className=' h-[40vh] '>
              <AnimatedList>
                <p className=' anton-regular md:w-[20vw] w-[65vw] h-[5vh] py-2 bg-amber-200 text-black text-center '>Backend Developer</p>
                <p className=' anton-regular md:w-[20vw] h-[5vh] py-2 bg-green-200 text-black text-center  '>Frontend Developer</p>
                <p className=' anton-regular md:w-[20vw] h-[5vh] py-2 bg-blue-200 text-black text-center  '>UI/UX</p>
                <p className=' anton-regular md:w-[20vw] h-[5vh] py-2 bg-red-200 text-black text-center  '>Web-Developer</p>
                <p className=' anton-regular md:w-[20vw] h-[5vh] py-2 bg-gray-300 text-black text-center  '>Software Designer</p>
                <p className=' anton-regular md:w-[20vw] h-[5vh] py-2 bg-gray-300 text-black text-center  '>FreeLancer</p>
              </AnimatedList>
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className='bg-amber-100'>
          <div className="relative w-full overflow-clip">
            <Timeline />
          </div>
        </div>

        {/* Project Section */}
        <div className='flex md:mx-15 justify-center py-20 '>
          <div className="md:grid grid-cols-4 grid-rows-4 gap-4">
            <div className="col-span-2 row-span-2">
              <div className='py-10 md:px-10 px-5'>
                <span className='text-3xl font-bold font-serif'>TalkSync– Real-Time Virtual Meeting Platform</span><br />
                <span className='text-xl text-gray-300 font-sans'>Angular, FastAPI, Whisper AI, Vercel</span> <br />
                <span className='text-xl text-gray-300 font-sans'>Live Project Link : <a className='underline' href="https://talk-sync.vercel.app/">Talksync</a> </span> <br /><br />
                <span className='text-xl text-gray-300 font-sans'>IJIRT Publish Research Paper : </span><a className='underline font-bold' href="https://ijirt.org/article?manuscript=176390">Research paper</a> <br />
              </div>
            </div>
            <div className="col-span-2 row-span-2 col-start-3">
              <div className="flex items-center justify-center w-full ">
                <CardStack items={CARDS} />
              </div>
            </div>
            <div className="col-span-4 row-span-2 row-start-3 py-20 md:px-20 px-5">
              <span className=' text-xl roboto-condensed'>
                TalkSync is a full-featured real-time video conferencing application that goes beyond traditional meeting platforms
                by integrating <br /> Indian language translation for subtitles and AI-powered meeting summaries.
                The goal is to remove language barriers in communication <br /> while ensuring participants and administrators
                have access to concise meeting documentation.
              </span>
            </div>
          </div>
        </div>

        {/* Clubs Section */}
        <div className=' py-10'>
          <div className="md:grid grid-cols-4 grid-rows-4 gap-4">
            <div className="col-span-2 row-span-2">
              <div className='py-10 md:px-25 px-5'>
                <span className='text-3xl font-bold font-serif'>ACE &amp; ISTE Student Clubs</span><br />
                <span className='text-xl text-gray-300 font-sans'>Media &amp; Social Media Head</span> <br /><br />
                <span className='text-xl text-gray-300 font-sans'>ISTE Student Club : <a className='underline font-bold' href="https://phcet.ac.in/students/student-activities/student-associations/iste-2/">&quot;The Indian Society for Technical Education&quot;</a> </span> <br />
                <span className='text-xl text-gray-300 font-sans'>ACE Student Club : </span><a className='underline font-bold' href="https://phcet.ac.in/students/student-activities/student-associations/ace/">Association of Coders and Encoders</a> <br />
              </div>
            </div>
            <div className="col-span-2 row-span-2 col-start-3">
              <div className="flex items-center justify-center w-full object-fill">
                <CardStack items={CARDS1} />
              </div>
            </div>
            <div className="col-span-4 row-span-2 row-start-3 py-20 md:px-20 px-5">
              <span className='text-xl'>
                Being part of the ACE Student Club and the ISTE Student Chapter, I took on the role of Media &amp; Social Media Head <br />
                where I wasn&apos;t just a participant but also a storyteller. From capturing candid moments to designing engaging posts, <br />
                I showcased every workshop, expert talk, and event on the official social platforms. This experience allowed me to <br />
                blend my creativity with technology, while also actively participating in the events and contributing to the clubs&apos; <br />
                growth and visibility.
              </span>
            </div>
          </div>
        </div>

        {/* Photography Section */}
        <div className='py-10 md:px-20 '>
          <div className="md:grid grid-cols-2 grid-rows-2 gap-4 ">
            <div className='md:px-10 px-5 md:py-50 py-30'>
              <span className='text-3xl font-bold font-serif'>FocusFolio - Personal Photography</span><br />
              <span className='text-xl text-gray-300 font-sans'>- Personal Photography</span> <br /><br />
              <span className='text-xl text-gray-300 font-sans'>FocusFolio is live : <a className='underline font-bold' href="https://focusfolio.vercel.app/"> FocusFolio </a> </span> <br />
            </div>
            <div className='px-3 md:px-0'>
              <DraggableCardContainer className="relative md:right-20 h-[40rem] w-full overflow-clip">
                <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
                  Photographs clicked by Rushikesh Mhatre.
                </p>
                {items.map((item) => (
                  <DraggableCardBody key={item.title} className={item.className}>
                    <Image
                      src={item.image}
                      alt={item.title}
                      width={320}
                      height={320}
                      className="pointer-events-none relative z-10 h-80 w-80 object-cover"
                    />
                    <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
                      {item.title}
                    </h3>
                  </DraggableCardBody>
                ))}
              </DraggableCardContainer>
            </div>
            <div className="col-span-2 md:px-20 px-5 py-25 ">
              <span className='text-xl'>
                Hi, I&apos;m Rushikesh Prabhakar Mhatre, an aspiring technologist and a passionate mobile photographer from Navi Mumbai. <br />
                FocusFolio is my creative space where I capture and showcase the beauty of everyday life all through the lens of a mobile phone. <br /><br />
                With an eye for detail and a love for storytelling, my photography spans a wide range of styles including nature, architecture, <br />
                urban life, portraits, and abstract compositions. Every shot is a reflection of how I see the world vibrant, raw, and authentic. <br /><br />
                What makes FocusFolio special is not just the photos, but the variety and emotion each category holds. <br />
                Whether it&apos;s the golden hue of a sunset or the symmetry of city streets, each frame is crafted with care, creativity, <br />
                and a deep appreciation for the art of mobile photography.
              </span>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Page
