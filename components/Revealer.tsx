"use client";
import { motion } from "motion/react";
import { ReactNode } from "react";

interface RevealerProps {
  children: ReactNode;
  delay?: number ;
}

const Revealer = ({ children, delay }: RevealerProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: "10px" }}
      animate={{ opacity: 1, y: "0px" }}
      transition={{ delay: delay || 0, duration: 0.15 }}
    >
      {children}
    </motion.div>
  );
};

export default Revealer;
