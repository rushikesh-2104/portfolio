"use client";

import React, { useEffect, useId, useRef, useState } from "react";
import { AnimatePresence, motion } from "motion/react";
import { useOutsideClick } from "@/hooks/use-outside-click";

export default function ExpandableCardDemo() {
  const [active, setActive] = useState<(typeof cards)[number] | boolean | null>(
    null
  );
  const ref = useRef<HTMLDivElement>(null);
  const id = useId();

  useEffect(() => {
    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setActive(false);
      }
    }

    if (active && typeof active === "object") {
      document.body.style.overflow = "hidden";
    } else {
      document.body.style.overflow = "auto";
    }

    window.addEventListener("keydown", onKeyDown);
    return () => window.removeEventListener("keydown", onKeyDown);
  }, [active]);

  useOutsideClick(ref, () => setActive(null));

  return (
    <>
      <AnimatePresence>
        {active && typeof active === "object" && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 bg-black/20 h-full w-full z-10"
          />
        )}
      </AnimatePresence>
      <AnimatePresence>
        {active && typeof active === "object" ? (
          <div className="fixed inset-0  grid place-items-center z-[100]">
            <motion.button
              key={`button-${active.title}-${id}`}
              layout
              initial={{
                opacity: 0,
              }}
              animate={{
                opacity: 1,
              }}
              exit={{
                opacity: 0,
                transition: {
                  duration: 0.05,
                },
              }}
              className="flex absolute top-2 right-2 lg:hidden items-center justify-center bg-white rounded-full h-6 w-6"
              onClick={() => setActive(null)}
            >
              <CloseIcon />
            </motion.button>
            <motion.div
              layoutId={`card-${active.title}-${id}`}
              ref={ref}
              className="w-full max-w-[500px]  h-full md:h-fit md:max-h-[90%]  flex flex-col bg-white dark:bg-neutral-900 sm:rounded-3xl overflow-hidden"
            >
              <motion.div layoutId={`image-${active.title}-${id}`}>
                <img
                  width={200}
                  height={200}
                  src={active.src}
                  alt={active.title}
                  className="w-full h-80 lg:h-80 sm:rounded-tr-lg sm:rounded-tl-lg object-cover object-top"
                />
              </motion.div>

              <div>
                <div className="flex justify-between items-start p-4">
                  <div className="">
                    <motion.h3
                      layoutId={`title-${active.title}-${id}`}
                      className="font-bold text-neutral-700 dark:text-neutral-200"
                    >
                      {active.title}
                    </motion.h3>
                    <motion.p
                      layoutId={`description-${active.description}-${id}`}
                      className="text-neutral-600 dark:text-neutral-400"
                    >
                      {active.description}
                    </motion.p>
                  </div>

                  <motion.a
                    layoutId={`button-${active.title}-${id}`}
                    href={active.ctaLink}
                    target="_blank"
                    className="px-4 py-3 text-sm rounded-full font-bold bg-green-500 text-white"
                  >
                    {active.ctaText}
                  </motion.a>
                </div>
                <div className="pt-4 relative px-4">
                  <motion.div
                    layout
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1 }}
                    exit={{ opacity: 0 }}
                    className="text-neutral-600 text-xs md:text-sm lg:text-base h-40 md:h-fit pb-10 flex flex-col items-start gap-4 overflow-auto dark:text-neutral-400 [mask:linear-gradient(to_bottom,white,white,transparent)] [scrollbar-width:none] [-ms-overflow-style:none] [-webkit-overflow-scrolling:touch]"
                  >
                    {typeof active.content === "function"
                      ? active.content()
                      : active.content}
                  </motion.div>
                </div>
              </div>
            </motion.div>
          </div>
        ) : null}
      </AnimatePresence>
      <ul className="max-w-2xl mx-auto w-full gap-4">
        {cards.map((card, index) => (
          <motion.div
            layoutId={`card-${card.title}-${id}`}
            key={`card-${card.title}-${id}`}
            onClick={() => setActive(card)}
            className="p-4 flex flex-col md:flex-row justify-between items-center hover:scale-110 transition duration-500   dark:hover:bg-neutral-900 rounded-xl cursor-pointer"
          >
            <div className="flex gap-4 flex-col md:flex-row ">
              <motion.div layoutId={`image-${card.title}-${id}`}>
                <img
                  width={100}
                  height={100}
                  src={card.src}
                  alt={card.title}
                  className="h-40 w-40 md:h-14 md:w-14 rounded-lg object-cover object-top"
                />
              </motion.div>
              <div className="">
                <motion.h3
                  layoutId={`title-${card.title}-${id}`}
                  className="font-medium text-neutral-200 dark:text-neutral-200  text-center md:text-left"
                >
                  {card.title}
                </motion.h3>
                <motion.p
                  layoutId={`description-${card.description}-${id}`}
                  className="text-neutral-400 dark:text-neutral-400  text-center md:text-left"
                >
                  {card.description}
                </motion.p>
              </div>
            </div>
            <motion.button
              layoutId={`button-${card.title}-${id}`}
              className="px-4 py-2 text-sm rounded-full font-bold bg-gray-100 hover:bg-green-500 hover:text-white text-black mt-4 md:mt-0"
            >
              {card.ctaText}
            </motion.button>
          </motion.div>
        ))}
      </ul>
    </>
  );
}

export const CloseIcon = () => {
  return (
    <motion.svg
      initial={{
        opacity: 0,
      }}
      animate={{
        opacity: 1,
      }}
      exit={{
        opacity: 0,
        transition: {
          duration: 0.05,
        },
      }}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
      className="h-4 w-4 text-black"
    >
      <path stroke="none" d="M0 0h24v24H0z" fill="none" />
      <path d="M18 6l-12 12" />
      <path d="M6 6l12 12" />
    </motion.svg>
  );
};

const cards = [
  {
    description: "FocusFolio",
    title: "Personal Photography website",
    src: "/postable logo.png",
    ctaText: "Visit",
    ctaLink: "https://focusfolio.vercel.app/",
    content: () => {
      return (
        <p>
          This is where your mobile photography journey begins.
          Discover art in the everyday, captured through a mobile lens.
          Galleries, short films, and creative snapshots — all curated with heart.
        </p>
      );
    },
  },
  {
    description: "Resume Builder",
    title: "Made With Angular Framework",
    src: "https://img.icons8.com/bubbles/100/resume.png",
    ctaText: "Visit",
    ctaLink: "https://resume-builds.vercel.app/",
    content: () => {
      return (
        <p>
          esumeBuilds is a user-friendly web application designed
           to help users create, customize, preview, and export
            professional resumes with minimal effort. It offers clean,
             attractive templates and real-time editing, empowering users
              to produce polished resumes in minutes.
        </p>
      );
    },
  },

  {
    description: "One Fitness Studio",
    title: "Web-Design Using Figma",
    src: "/logo.png",
    ctaText: "View",
    ctaLink: "https://github.com/rushikesh-2104/One-Fitness-Studio-Figma-Web-Design",
    content: () => {
      return (
        <p>
          Designed a modern, responsive fitness studio website prototype in Figma 
          with a focus on clean UI, intuitive navigation, and strong visual branding.
           The design highlights fitness programs, trainers, membership plans, and a
            motivational brand presence to attract potential clients.
        </p>
      );
    },
  },
  {
    description: "Alexa - Voice Assistant",
    title: "Made using Python",
    src: "https://img.icons8.com/color/48/google-assistant--v1.png",
    ctaText: "Visit",
    ctaLink: "https://github.com/rushikesh-2104/alexa",
    content: () => {
      return (
        <p>
         “alexa” is a project built in Python (with some use of OpenCV / image processing)
          that implements vision-based features (or image frame analysis). It handles image
           frames, possibly for detection or classification tasks. The project aims to
            process image data, analyze frames, and output results based on the visual content.
        </p>
      );
    },
  },
  {
    description: "Cafe-App",
    title: "Made using MERN Stack",
    src: "https://img.icons8.com/bubbles/100/cafe.png",
    ctaText: "View",
    ctaLink: "https://github.com/pranayvartak/cafe-manager-2",
    content: () => {
      return (
        <p>
          Cafe-Manager-2 is a web-application built using JavaScript 
          (with Pug for templating and CSS for styling) aimed at managing 
          operations in a café. It assists with tracking orders, managing menu items,
           and simplifying day-to-day café workflows via an intuitive interface.
        </p>
      );
    },
  },
  {
    description: "Smart Attendence Management System",
    title: "Diploma Final Year Project",
    src: "https://img.icons8.com/nolan/64/face-id.png",
    ctaText: "View",
    ctaLink: "https://github.com/rushikesh-2104/SMART-ATTENDENCE-SYSTEM",
    content: () => {
      return (
        <p>
         Smart Attendance System is an application designed to automate and streamline 
         tracking student (or employee) attendance using modern technologies like face 
         recognition (or RFID / biometric), real-time logging, and reporting. It reduces
        manual attendance taking, improves accuracy, and provides insightful data over time.
        </p>
      );
    },
  },
  {
    description: "Covid-19 Prevention",
    title: "Made using W3-Core",
    src: "https://img.icons8.com/fluency/48/covid-19.png",
    ctaText: "View",
    ctaLink: "https://github.com/rushikesh-2104/covid-19-prevention",
    content: () => {
      return (
        <p>
         COVID-19 Prevention is an application aimed at helping users protect 
         themselves and others by providing tools, information, and possibly monitoring
          features related to COVID-19 protocols. The goal is to raise awareness, help 
          track symptoms or exposures, and facilitate preventive practices.
        </p>
      );
    },
  },
];
