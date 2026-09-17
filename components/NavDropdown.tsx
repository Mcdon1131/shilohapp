"use client";

import { AnimatePresence, motion } from "motion/react";

interface NavDropdownProps {
  show: boolean;
  currentPointer: string;
  id: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
}
const NavDropdown = ({
  show,
  currentPointer,
  id,
  onMouseEnter,
  onMouseLeave,
}: NavDropdownProps) => {
  return (
    <AnimatePresence mode="wait">
      <motion.div
        key={show}
        id={id}
        onMouseEnter={onMouseEnter}
        onMouseLeave={onMouseLeave}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.15 }}
        style={{ display: show ? "flex" : "none" }}
        className="navDropdown absolute left-0 right-0 bottom-0 transform translate-y-2/2 bg-white h-[65vh] text-black"
      >
        {currentPointer}
      </motion.div>
    </AnimatePresence>
  );
};

export default NavDropdown;
