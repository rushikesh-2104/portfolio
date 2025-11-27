"use client";

import { AnimatePresence, motion } from "framer-motion";
import React, { useState, useRef, useEffect } from "react";
import { cn } from "@/lib/utils";
import Image from "next/image";

const Skiper52 = () => {
  const images = [
    { src: "/images/x.com/13.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/32.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/20.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/21.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/19.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/1.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/2.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/images/x.com/3.jpeg", alt: "Illustrations by my fav AarzooAly", code: "#23" },
    { src: "/zudio.png", alt: "Illustrations by my fav AarzooAly", code: "#23" },
  ];

  return (
    <div className="flex h-full w-full items-center justify-center overflow-hidden bg-[#f5f4f3]">
      <HoverExpand_001 images={images} />
    </div>
  );
};

export { Skiper52 };

const HoverExpand_001 = ({
  images,
  className,
}: {
  images: { src: string; alt: string; code: string }[];
  className?: string;
}) => {
  const [activeImage, setActiveImage] = useState<number | null>(1);
  const [currentSlide, setCurrentSlide] = useState(0);
  const mobileRef = useRef<HTMLDivElement | null>(null);

  /* ✅ AUTO CAROUSEL + DOT SYNC */
  useEffect(() => {
    const el = mobileRef.current;
    if (!el) return;

    let index = 0;

    const interval = setInterval(() => {
      const cardWidth = el.firstElementChild?.clientWidth || 0;
      index = (index + 1) % images.length;

      setCurrentSlide(index);

      el.scrollTo({
        left: index * cardWidth,
        behavior: "smooth",
      });
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <motion.div
      initial={{ opacity: 0, translateY: 20 }}
      animate={{ opacity: 1, translateY: 0 }}
      transition={{ duration: 0.3, delay: 0.5 }}
      className={cn("relative w-full max-w-6xl px-5", className)}
    >
      {/* ================= DESKTOP VIEW ================= */}
      <div className="hidden md:flex w-full items-center justify-center gap-1">
        {images.map((image, index) => (
          <motion.div
            key={index}
            className="relative cursor-pointer overflow-hidden rounded-3xl"
            initial={{ width: "2.5rem", height: "20rem" }}
            animate={{
              width: activeImage === index ? "24rem" : "5rem",
              height: "24rem",
            }}
            transition={{ duration: 0.3, ease: "easeInOut" }}
            onClick={() => setActiveImage(index)}
            onHoverStart={() => setActiveImage(index)}
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 400px"
            />
          </motion.div>
        ))}
      </div>

      {/* ================= MOBILE AUTO CAROUSEL ================= */}
      <div
        ref={mobileRef}
        className="flex md:hidden w-full overflow-x-auto gap-4 py-4 scroll-smooth"
      >
        {images.map((image, index) => (
          <div
            key={index}
            className="relative min-w-[80vw] h-[50vh] rounded-2xl overflow-hidden flex-shrink-0"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-contain"
              sizes="100vw"
            />
          </div>
        ))}
      </div>

      {/* ✅ DOT INDICATORS (MOBILE ONLY) */}
      <div className="flex md:hidden justify-center gap-2 mt-3">
        {images.map((_, index) => (
          <span
            key={index}
            className={`h-2 w-2 rounded-full transition-all duration-300 ${
              currentSlide === index
                ? "bg-black scale-125"
                : "bg-gray-400"
            }`}
          />
        ))}
      </div>

    </motion.div>
  );
};

export { HoverExpand_001 };
