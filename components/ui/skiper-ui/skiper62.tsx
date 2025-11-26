"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight } from "lucide-react";
import Image from "next/image";

import {
  ScrollVelocityContainer,
  ScrollVelocityRow,
} from "@/components/magicui/scroll-based-velocity";
import Nav from "@/components/Nav";

const Skiper62 = () => {
  const greetings = useMemo(
    () => ["नमस्कार", "नमस्ते", "નમસ્તે", "নমস্কার", "ਸਤ ਸ੍ਰੀ ਅਕਾਲ", "வணக்கம்", "Hello!"],
    []
  );

  const [key, setKey] = useState(0);
  const [showPortfolio, setShowPortfolio] = useState(false);

  useEffect(() => {
    const hasSeenIntro = sessionStorage.getItem("hasSeenIntro");
    if (hasSeenIntro) {
      setShowPortfolio(true);
    }
  }, []);

  useEffect(() => {
    if (showPortfolio) return;

    if (key < greetings.length - 1) {
      const timer = setTimeout(() => setKey((prev) => prev + 1), 500);
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => {
        sessionStorage.setItem("hasSeenIntro", "true");
        setShowPortfolio(true);
      }, 1200);

      return () => clearTimeout(timeout);
    }
  }, [key, greetings.length, showPortfolio]);

  return (
    <div className="h-full w-full  z-100 bg-black text-white overflow-x-hidden">
      <AnimatePresence mode="wait">
        {!showPortfolio && (
          <motion.section
            key="landing"
            className="flex min-h-screen items-center justify-center"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0, y: -200 }}
            transition={{ duration: 1, ease: "easeInOut" }}
          >
            <motion.h1
              key={key}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              exit={{ opacity: 0, y: -50 }}
              transition={{ duration: 0.8, ease: "easeInOut" }}
              className="whitespace-nowrap text-6xl font-bold tracking-tight md:text-8xl"
            >
              {greetings[key]}
            </motion.h1>
          </motion.section>
        )}
      </AnimatePresence>

      {showPortfolio && (
        <motion.section
          key="portfolio"
          initial={{ y: "100%", opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1, ease: "easeInOut" }}
          className="flex h-screen  flex-col items-center justify-center bg-white text-black overflow-x-hidden"
        >
          <Nav />

          <div className="hidden md:block bg-white h-[10vh] w-[20vw] absolute left-0 rounded-r-full z-1000">
            <div className="flex justify-around py-2">
              <span className="text-l py-5 px-5 scale-150 wrap-break-word">
                Located in India
              </span>
              <span>
                <Image
                  src="/world.gif"
                  alt="World"
                  width={80}
                  height={80}
                  className="h-[8vh] w-[5vw]"
                />
              </span>
            </div>
          </div>

          <div className="absolute md:left-260 left-8 bottom-35 md:bottom-125 text-white scale-130">
            <ArrowDownRight />
          </div>

          <span className="absolute z-1 md:left-270 md:bottom-90 bottom-10 text-white md:text-5xl left-10 text-4xl">
            Software Developer <br /> & Designer
          </span>

          {/* ✅ FIXED HERE */}
          <div className="bg-black h-full w-full max-w-full flex justify-center overflow-x-hidden">
            <Image
              src="/rushi.png"
              alt="Rushikesh"
              width={900}
              height={100}
              quality={100}
              className="h-full bottom-0"
            />
          </div>

          <ScrollVelocityContainer className="lora absolute  w-full overflow-x-hidden text-white top-110 md:top-140 scale-100 md:scale-180 text-9xl">
            <ScrollVelocityRow baseVelocity={10} direction={1}>
              Rushikesh Mhatre -
            </ScrollVelocityRow>
          </ScrollVelocityContainer>
        </motion.section>
      )}
    </div>
  );
};

export { Skiper62 };
