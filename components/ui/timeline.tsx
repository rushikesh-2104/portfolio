"use client";
import {
  useMotionValueEvent,
  useScroll,
  useTransform,
  motion,
} from "motion/react";
import React, { useEffect, useRef, useState } from "react";
import { AnimatedTestimonials } from "./animated-testimonials";
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
    id: 1,
    title: "Internship",
    content: (
      <div>
        <h1 className='text-4xl font-bold'>Intern at csociety.info.tech</h1>
        <p className="mb-8 text-2xl font-bold text-gray-300 md:text-sm dark:text-neutral-200">
          I have completed my 3 month internship at csociety.infotech <br /> 
          as full stack MEAN Developer intern on-site.
        </p>
        <div className="grid grid-cols-2 gap-4">
          <img src="/bank.png" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60" />
          <img src="https://assets.aceternity.com/templates/startup-2.webp" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60" />
          <img src="https://assets.aceternity.com/templates/startup-3.webp" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60" />
          <img src="https://assets.aceternity.com/templates/startup-4.webp" alt="startup template" className="h-20 w-full rounded-lg object-cover shadow md:h-44 lg:h-60" />
        </div>
      </div>
    ),
  },
  {
    id: 2,
    title: "2025",
    content: (
      <div>
        <h1 className='text-4xl font-bold'>Bachelor of Engineering in Information Technology</h1>
        <p className="mb-8 text-xl font-normal text-gray-300">
          I had completed my B.E. Degree in Information Technology <br /> 
          from Pillai HOC college of engineering with first class ranking.
        </p>
        <AnimatedTestimonials testimonials={testimonials1}/>
      </div>
    ),
  },
  {
    id: 3,
    title: "2022",
    content: (
      <div>
        <h1 className='text-4xl font-bold'>Diploma in Information Technology</h1>
        <p className="mb-8 text-xl font-normal text-gray-300">
          I had completed my Diploma in Information Technology <br /> 
          from Pillai HOC Polytechnic with first class ranking.
        </p>
        <AnimatedTestimonials testimonials={testimonials}/>
      </div>
    ),
  },
];

export const Timeline = () => {
  const ref = useRef<HTMLDivElement>(null);
  const containerRef = useRef<HTMLDivElement>(null);
  const [height, setHeight] = useState(0);

  useEffect(() => {
    if (ref.current) {
      const rect = ref.current.getBoundingClientRect();
      setHeight(rect.height);
    }
  }, [ref]);

  const { scrollYProgress } = useScroll({
    target: containerRef,
    offset: ["start 10%", "end 50%"],
  });

  const heightTransform = useTransform(scrollYProgress, [0, 1], [0, height]);
  const opacityTransform = useTransform(scrollYProgress, [0, 0.1], [0, 1]);

  return (
    <div 
      className="w-full  bg-black dark:bg-neutral-950 font-sans md:px-10"
      ref={containerRef}
    >
      <div className="max-w-7xl mx-auto py-20 px-4 md:px-8 lg:px-10">
        <h2 className="text-lg md:text-4xl mb-4 text-white dark:text-white max-w-4xl">
          Changelog from my journey
        </h2>
        <p className="text-neutral-700 dark:text-gray-100 text-sm md:text-base max-w-sm">
          I&apos;ve been working for software developement and designing for the past 6 years. Here&apos;s
          a timeline of my journey.
        </p>
      </div>

      <div ref={ref} className="relative max-w-7xl mx-auto pb-20">

        {data.map((item,index) => (
  <div
    key={index}
    className="flex justify-start pt-10 md:pt-40 md:gap-10"
  >
    <div className="sticky flex flex-col md:flex-row z-40 items-center top-40 self-start max-w-xs lg:max-w-sm md:w-full">
      <div className="h-10 absolute left-3 md:left-3 w-10 rounded-full bg-black dark:bg-black flex items-center justify-center">
        <div className="h-4 w-4 rounded-full bg-neutral-200 dark:bg-neutral-800 border border-neutral-300 dark:border-neutral-700 p-2" />
      </div>
      <h3 className="hidden md:block text-xl md:pl-20 md:text-5xl font-bold text-neutral-500 dark:text-neutral-500 ">
        {item.title}
      </h3>
    </div>

    <div className="relative pl-20 pr-4 md:pl-4 w-full">
      <h3 className="md:hidden block text-2xl mb-4 text-left font-bold text-neutral-500 dark:text-neutral-500">
        {item.title}
      </h3>
      {item.content}
    </div>
  </div>
))}

        <div
          style={{
            height: height + "px",
          }}
          className="absolute md:left-8 left-8 top-0 overflow-hidden w-[2px] bg-[linear-gradient(to_bottom,var(--tw-gradient-stops))] from-transparent from-[0%] via-neutral-200 dark:via-neutral-700 to-transparent to-[99%]  [mask-image:linear-gradient(to_bottom,transparent_0%,black_10%,black_90%,transparent_100%)] "
        >
          <motion.div
            style={{
              height: heightTransform,
              opacity: opacityTransform,
            }}
            className="absolute inset-x-0 top-0  w-[2px] bg-gradient-to-t from-purple-500 via-blue-500 to-transparent from-[0%] via-[10%] rounded-full"
          />
        </div>
      </div>
    </div>
  );
};
