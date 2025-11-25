"use client";
import { motion } from "framer-motion";
import { fadeUp } from "@/animation/motionVarients";

interface Props {
  children: React.ReactNode;
  className?: string;
}

const AnimatedDiv = ({ children, className }: Props) => {
  return (
    <motion.div
      variants={fadeUp}
      initial="hidden"
      animate="visible"
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default AnimatedDiv;
