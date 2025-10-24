"use client";

import { AnimatePresence, motion } from "framer-motion";
import { useEffect, useMemo, useState } from "react";
import { ArrowDownRight } from 'lucide-react';
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
    if (key < greetings.length - 1) {
      const timer = setTimeout(() => setKey((prev) => prev + 1), 500);
      return () => clearTimeout(timer);
    } else {
      const timeout = setTimeout(() => setShowPortfolio(true), 1200);
      return () => clearTimeout(timeout);
    }
  }, [key, greetings.length]);

  return (
    <div className="min-h-screen w-screen z-100 bg-black text-white overflow-x-hidden">
      {/* === Landing Section === */}
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
              transition={{
                duration: 0.8,
                ease: "easeInOut",
              }}
              className="whitespace-nowrap text-6xl font-bold tracking-tight md:text-8xl"
            >
              {greetings[key]}
            </motion.h1>
          </motion.section>
        )}
      </AnimatePresence>

      {/* === Portfolio Section === */}
      {showPortfolio && (
        <div>
          <motion.section
            key="portfolio"
            initial={{ y: "100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="flex h-screen flex-col items-center justify-center bg-white text-black"
          >
            <Nav/>

            <div className="bg-white h-[10vh] w-[20vw] absolute left-0 bottom-100 rounded-r-full z-1000">
              <div className="flex justify-around py-2">
                <span className="text-l py-5 px-5 scale-150 wrap-break-word">Located in India</span>
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

            <div className="absolute z-1000 right-120 bottom-125 text-white scale-130">
              <ArrowDownRight/>
            </div>

            <span className="absolute z-1000 right-15 bottom-90 text-white text-5xl">
              Software Developer <br /> & Designer
            </span>

            <div className="bg-black w-screen flex justify-center">
              <Image 
                src="/rushi.png" 
                alt="Rushikesh" 
                width={900} 
                height={1000} 
                className="relative h-[100vh] bottom-0" 
              />
            </div>

            <ScrollVelocityContainer className="lora absolute text-white top-140 scale-180 text-9xl">
              <ScrollVelocityRow baseVelocity={10} direction={1}>
                Rushikesh Mhatre -
              </ScrollVelocityRow>
            </ScrollVelocityContainer>
          </motion.section>
        </div>
      )}
    </div>
  );
};

export { Skiper62 };
