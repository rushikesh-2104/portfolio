"use client";

import { useState, useEffect, useCallback } from "react";

interface TypewriterEffectProps {
  text: string;
  speed?: number; // milliseconds per character
  loop?: boolean;
  onComplete?: () => void;
}

export const TypewriterEffect: React.FC<TypewriterEffectProps> = ({
  text,
  speed = 100,
  loop = false,
  onComplete,
}) => {
  const [displayedText, setDisplayedText] = useState("");
  const [index, setIndex] = useState(0);

  // Memoized animate function
  const animate = useCallback(() => {
    if (index < text.length) {
      setDisplayedText((prev) => prev + text[index]);
      setIndex((prev) => prev + 1);
    } else if (loop) {
      setTimeout(() => {
        setDisplayedText("");
        setIndex(0);
      }, speed);
    } else {
      onComplete?.();
    }
  }, [index, text, loop, speed, onComplete]);

  useEffect(() => {
    const timer = setTimeout(() => {
      animate();
    }, speed);

    return () => clearTimeout(timer);
  }, [animate, speed]);

  return <span>{displayedText}</span>;
};
