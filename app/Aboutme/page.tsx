import { AnimatedList } from '@/components/magicui/animated-list'
import { BoxReveal } from '@/components/magicui/box-reveal'
import { AnimatedTestimonials } from '@/components/ui/animated-testimonials'
import { CardStack } from '@/components/ui/card-stack'
import { DraggableCardBody, DraggableCardContainer } from '@/components/ui/draggable-card'
import { Timeline } from '@/components/ui/timeline'
import { img } from 'framer-motion/client'
import React from 'react'

const page = () => {

  const CARDS = [
  {
    id: 0,
    name: "",
    designation: "",
    content: (
      <img src="/talksync-certificate.jpg" alt="" />
    ),
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: (
      <img src="/ts4.jpg" alt="" />
    ),
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: (
     <img src="/ts2.jpg" alt="" />
    ),
  },
  {
    id: 3,
    name: "",
    designation: "",
    content: (
     <img src="/ts3.jpg" alt="" />
    ),
  },
  {
    id: 4,
    name: "",
    designation: "",
    content: (
     <img src="/ts1.jpg" alt="" />
    ),
  },
];

const CARDS1 = [
  {
    id: 0,
    name: "",
    designation: "",
    content: (
      <img src="/ace1.jpg" alt="" />
    ),
  },
  {
    id: 1,
    name: "",
    designation: "",
    content: (
      <img src="/ace2.jpg" alt="" />
    ),
  },
  {
    id: 2,
    name: "",
    designation: "",
    content: (
     <img src="/ace3.jpg" alt="" />
    ),
  },
 
];

const reviews = [
  {
    name: "HTML",
    body: "The standard markup language for creating web pages.",
    img: "https://img.icons8.com/?size=100&id=zRvbzAjx4VWY&format=png&color=000000",
  },
  {
    name: "CSS",
    body: "The language for describing the presentation of web pages.",
    img: "https://img.icons8.com/?size=100&id=7gdY5qNXaKC0&format=png&color=000000",
  },
  {
    name: "JavaScript",
    body: "The programming language for the web.",
    img: "https://img.icons8.com/?size=100&id=Nkym0Ujb8VGI&format=png&color=000000",
  },
  {
    name: "TypeScript",
    body: "A typed superset of JavaScript that compiles to plain JavaScript.",
    img: "https://img.icons8.com/?size=100&id=wpZmKzk11AzJ&format=png&color=000000",
  },
  {
    name: "Python",
    body: "A high-level, interpreted programming language.",
    img: "https://img.icons8.com/?size=100&id=l75OEUJkPAk4&format=png&color=000000",
  },
  {
    name: "Angular",
    body: "The web development framework for building applications.",
    img: "https://img.icons8.com/?size=100&id=j9DnICNnlhGk&format=png&color=000000",
  },
  {
    name: "React",
    body: "A JavaScript library for building user interfaces.",
    img: "https://img.icons8.com/?size=100&id=Nlsua06Gvxel&format=png&color=000000",
  },
  {
    name: "Next.js",
    body: "The React framework for production.",
    img: "https://img.icons8.com/?size=100&id=yUdJlcKanVbh&format=png&color=000000",
  },
  {
    name: "Node.js",
    body: "A JavaScript runtime built on Chrome's V8 engine.",
    img: "https://img.icons8.com/?size=100&id=hsPbhkOH4FMe&format=png&color=000000",
  },
  {
    name: "Tailwind CSS",
    body: "A utility-first CSS framework for rapid UI development.",
    img: "https://img.icons8.com/?size=100&id=x7XMNGh2vdqA&format=png&color=000000",
  },
];



const firstRow = reviews.slice(0, reviews.length / 2)
const secondRow = reviews.slice(reviews.length / 2)

const ReviewCard = ({ img, name, body }: { img: string; name: string; body: string }) => {
  return (
    <figure className="relative h-full w-64 cursor-pointer overflow-hidden rounded-xl border p-4 
        border-gray-950/[.1] bg-gray-950/[.01] hover:bg-gray-950/[.05] 
        dark:border-gray-50/[.1] dark:bg-gray-50/[.10] dark:hover:bg-gray-50/[.15]">
      <div className="flex flex-row items-center gap-2">
        <img className="rounded-full" width="32" height="32" alt={name} src={img} />
        <div className="flex flex-col">
          <figcaption className="text-sm font-medium dark:text-white">{name}</figcaption>
        </div>
      </div>
      <blockquote className="mt-2 text-sm">{body}</blockquote>
    </figure>
  )
}

 const items = [
    {
      title: "Doggy",
      image:
        "/a14.jpg",
      className: "absolute top-10 left-[20%] rotate-[-5deg]",
    },
    {
      title: "Architecture",
      image:
        "/a20.jpg",
      className: "absolute top-40 left-[25%] rotate-[-7deg]",
    },
    {
      title: "Fruit",
      image:
        "/fruit2.jpg",
      className: "absolute top-5 left-[40%] rotate-[8deg]",
    },
    {
      title: "SunSet",
      image:
        "/sky5.jpg",
      className: "absolute top-32 left-[55%] rotate-[10deg]",
    },
    {
      title: "Meggi",
      image:
        "/food5.jpg",
      className: "absolute top-20 right-[35%] rotate-[2deg]",
    },
    {
      title: "Yaak",
      image:
        "/a20.jpg",
      className: "absolute top-24 left-[45%] rotate-[-7deg]",
    },
    {
      title: "J.P. Morgan",
      image:
        "/a8.jpg",
      className: "absolute top-8 left-[30%] rotate-[4deg]",
    },
  ];


  const testimonials1 = [
    {
      quote:
        " I began my engineering journey in a friendly and supportive learning environment that encouraged growth and collaboration. ",
      name: "",
      designation: " College Life ",
      src: "/hoc1.jpg",
    },
    {
      quote:
        "I also enjoyed and contributed to the celebration of various college festivals, creating memorable experiences with peers.",
      name: "",
      designation: " Festivals ",
      src: "/hoc2.jpg",
    },
    {
      quote:
        "Finally, as the Class Representative, I learned responsibility and honed my organizational and communication skills.",
      name: "",
      designation: " Class Representative ",
      src: "/hoc3.jpg",
    },
    {
      quote:
        "Taking on leadership roles, I became the Media & Social Media Head of the ACE and ISTE clubs, where I managed events and digital presence.",
      name: "",
      designation: "Social Media's Head",
      src: "/hoc4.jpg",
    },
    
  ]

  const testimonials = [
    {
      quote:
        " I began my diploma journey in a friendly and supportive learning environment that encouraged growth and collaboration. ",
      name: "",
      designation: " College Life ",
      src: "/vp2.jpg",
    },
    {
      quote:
        "I also enjoyed and contributed to the celebration of various college festivals, creating memorable experiences with peers.",
      name: "",
      designation: " Festivals ",
      src: "/vp5.jpg",
    },
    {
      quote:
        "Finally, as the Class Representative, I learned responsibility and honed my organizational and communication skills.",
      name: "",
      designation: " Class Representative ",
      src: "/vp3.jpg",
    },
    {
      quote:
        "Taking on leadership roles, I became the team leader of my final year project team, where I managed my team and project.",
      name: "",
      designation: "Team Leader",
      src: "/vp1.jpg",
    },
    
  ]

  const data = [
    {
      title: "2025",
      content: (
        <div>
          <h1 className='text-4xl font-bold'>Intern at csociety.info.tech</h1>
          <p className="mb-8 text-2xl font-bold text-gray-300 md:text-sm dark:text-neutral-200">
            I have completed my 3 month internship at csociety.infotech <br /> as full stack MEAN Developer
            intern on-site. 
          </p>
          <div className="grid grid-cols-2 gap-4">
            <img src="/bank.png" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img src="https://assets.aceternity.com/templates/startup-2.webp" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img src="https://assets.aceternity.com/templates/startup-3.webp" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
            <img src="https://assets.aceternity.com/templates/startup-4.webp" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow-[0_0_24px_rgba(34,_42,_53,_0.06),_0_1px_1px_rgba(0,_0,_0,_0.05),_0_0_0_1px_rgba(34,_42,_53,_0.04),_0_0_4px_rgba(34,_42,_53,_0.08),_0_16px_68px_rgba(47,_48,_55,_0.05),_0_1px_0_rgba(255,_255,_255,_0.1)_inset] md:h-44 lg:h-60" />
          </div>
        </div>
      ),
    },
    { title: "2025", content: ( <div> <h1 className='text-4xl font-bold'>Bachelor of Engineering in Information Technology</h1> <p className="mb-8 text- xl font-normal text-gray-300"> I had completed my B.E. Degree in Information Technology <br /> from Pillai HOC college of engineering with first class ranking. </p> <AnimatedTestimonials testimonials={testimonials1}/> </div> ), 
      },
      { title: "2022", content: ( <div> <h1 className='text-4xl font-bold'>Diploma in Information Technology</h1> <p className="mb-8 text- xl font-normal text-gray-300"> I had completed my B.E. Degree in Information Technology <br /> from Pillai HOC college of engineering with first class ranking. </p> <AnimatedTestimonials testimonials={testimonials}/> </div> ), },
      
    ]
  





  return (
    <div className='bg-black text-white h-full w-full'>
      <div>
        
<div className="grid grid-cols-2 grid-rows-1 gap-0 py-10 px-10">

    <div className='flex justify-between' >
      
<div className="grid grid-cols-2 grid-rows-1 gap-4 ">

    <div className='flex justify-center'>
      <div className="bg-white roboto-condensed border-white border-3 h-[45vh] w-[23vw] rounded-full overflow-hidden ">
        <img className="h-full w-full object-cover" src="/photo1.jpg" alt="profile" />
      </div>
    </div>

    <div className='py-10' >
 <div className=''>
          <BoxReveal>
            <h3 className='text-5xl font-bold font-serif'>Rushikesh Mhatre</h3>
          </BoxReveal>
        </div>

        <div className='py-5'>
          <BoxReveal>
            <h3 className='text-3xl font-bold'> A Software Developer & Designer </h3>
            <h3 className='text-3xl font-bold py-2'> Intern at csociety.Infotech </h3>
            <h5 className='text-xl font-bold py-1'> hrishi210402@gmail.com  </h5>
          </BoxReveal>
        </div>

    </div>

</div>
    
    </div>

    <div className='flex justify-center py-10'>
       <div className=' h-[60vh]'>
          <AnimatedList>
            <p className=' anton-regular w-[20vw] h-[5vh] py-2 bg-amber-200 text-black text-center '>Backend Developer</p>
            <p className=' anton-regular w-[20vw] h-[5vh] py-2 bg-green-200 text-black text-center  '>Frontend Developer</p>
            <p className=' anton-regular w-[20vw] h-[5vh] py-2 bg-blue-200 text-black text-center  '>UI/UX</p>
            <p className=' anton-regular w-[20vw] h-[5vh] py-2 bg-red-200 text-black text-center  '>Web-Developer</p>
            <p className=' anton-regular w-[20vw] h-[5vh] py-2 bg-gray-300 text-black text-center  '>Software Designer</p>
            <p className=' anton-regular w-[20vw] h-[5vh] py-2 bg-gray-300 text-black text-center  '>FreeLancer</p>
          </AnimatedList>
        </div>
    </div>

</div>

<div className='  bg-amber-100'>
    <div className="relative  w-full overflow-clip">
      <Timeline data={data} />
    </div>
</div> 



<div className='flex justify-center py-20'>
  
<div className="grid grid-cols-4 grid-rows-4 gap-4">

    <div className="col-span-2 row-span-2">
      <div className='py-10 px-10'>
      <span className='text-3xl font-bold font-serif'>TalkSync– Real-Time Virtual Meeting Platform</span><br />
      <span className='text-xl text-gray-300 font-sans'>Angular, FastAPI, Whisper AI, Vercel</span> <br />
      <span className='text-xl text-gray-300 font-sans'>Live Project Link : <a className='underline' href="https://talk-sync.vercel.app/">Talksync</a> </span> <br /><br />
      <span className='text-xl text-gray-300 font-sans'>IJIRT Publish Research Paper : </span><a className='underline font-bold' href="https://ijirt.org/article?manuscript=176390">Research paper</a> <br />
    </div>
    </div>

    <div className="col-span-2 row-span-2 col-start-3">
      <div className="flex items-center justify-center w-full ">
      <CardStack items={CARDS}/>
      </div>
    </div>

    <div className="col-span-4 row-span-2 row-start-3 py-20 px-20">
       <span className=' text-xl roboto-condensed'>TalkSync is a full-featured real-time video conferencing application that goes beyond 
        traditional meeting platforms by integrating <br /> Indian language translation for subtitles and
         AI-powered meeting summaries. The goal is to remove language barriers in communication  <br />
         while ensuring participants and administrators have access to concise meeting
          documentation.</span>
    </div>

</div>
      
</div> 


 
<div className=' py-20'>
  
<div className="grid grid-cols-4 grid-rows-4 gap-4">

    <div className="col-span-2 row-span-2">
      <div className='py-10 px-10'>
      <span className='text-3xl font-bold font-serif'>ACE & ISTE Student Clubs</span><br />    
      <span className='text-xl text-gray-300 font-sans'>Media & Social Media Head</span> <br /><br /> 
      <span className='text-xl text-gray-300 font-sans'>ISTE Student Club : <a className='underline font-bold' href="https://phcet.ac.in/students/student-activities/student-associations/iste-2/">The Indian Society for Technical Education </a> </span> <br />
      <span className='text-xl text-gray-300 font-sans'>ACE Student Club : </span><a className='underline font-bold' href="https://phcet.ac.in/students/student-activities/student-associations/ace/">Association of Coders and Encoders</a> <br />

    </div>
    </div>
    <div className="col-span-2 row-span-2 col-start-3">
      <div className="flex items-center justify-center w-full ">
      <CardStack items={CARDS1}/>
      </div>
    </div>
     <div >
      
    </div>


    <div className="col-span-4 row-span-2 row-start-3 py-20 px-20">
       <span className='text-xl'>
        Being part of the ACE Student Club and the ISTE Student Chapter, I took on the role of Media & Social Media Head <br /> where
        I wasn’t just a participant but also a storyteller. From capturing candid moments to designing engaging posts, <br />
        I showcased every workshop, expert talk, and event on the official social platforms. This experience allowed me to <br />
        blend my creativity with technology, while also actively participating in the events and contributing to the clubs’ <br />
        growth and visibility.
      </span>

    </div>

</div>
      
</div>   

<div className='py-20'>
<div className="grid grid-cols-2 grid-rows-2 gap-4 ">

    <div className='px-10 py-50'>
      <span className='text-3xl font-bold font-serif'>FocusFolio -Personal Photography</span><br />
      <span className='text-xl text-gray-300 font-sans'>-Personal Photography</span> <br /><br />
      <span className='text-xl text-gray-300 font-sans'>FocusFolio is live : <a className='underline font-bold' href="https://focusfolio.vercel.app/"> FocusFolio </a> </span> <br />
    </div>

    <div className='' >
      <div className="">
      <DraggableCardContainer className="relative right-20  h-[40rem] w-full overflow-clip">
      <p className="absolute top-1/2 mx-auto max-w-sm -translate-y-3/4 text-center text-2xl font-black text-neutral-400 md:text-4xl dark:text-neutral-800">
        Photographs clicked by Rushikesh Mhatre.
      </p>
      {items.map((item) => (
        <DraggableCardBody className={item.className}>
          <img
            src={item.image}
            alt={item.title}
            className="pointer-events-none relative z-10 h-80 w-80 object-cover"
          />
          <h3 className="mt-4 text-center text-2xl font-bold text-neutral-700 dark:text-neutral-300">
            {item.title}
          </h3>
        </DraggableCardBody>
      ))}
    </DraggableCardContainer>
      </div>
    </div>

    <div className="col-span-2 px-20 py-25 ">
      <span className='text-xl'>
        Hi, I'm Rushikesh Prabhakar Mhatre, an aspiring technologist and a passionate mobile photographer 
        from Navi Mumbai. <br /> FocusFolio is my creative space where I capture and showcase the beauty of 
        everyday life all through the lens of a mobile phone. <br /> <br />


        With an eye for detail and a love for storytelling, my photography spans a wide range of styles
         including nature, architecture, <br /> urban life, portraits, and abstract compositions.
          Every shot is a reflection of how I see the world vibrant, raw, and authentic. <br /> <br />

        What makes FocusFolio special is not just the photos, but the variety and emotion each category 
        holds. <br /> Whether it’s the golden hue of a sunset or the symmetry of city streets, each frame is 
        crafted with care, creativity, <br /> and a deep appreciation for the art of mobile photography.
      </span>
    </div>

</div>
</div>



</div>
</div>
  
  )
}

export default page
