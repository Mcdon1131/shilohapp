"use client";

import { AnimatePresence, motion } from "motion/react";
import ShopNavDropdown from "./ShopNavDropdown";
import AboutNavbarDropdown from "./AboutNavbarDropdown";
import SearchComponent from "./SearchComponent";

interface NavDropdownProps {
  show: boolean;
  currentPointer: string;
  id: string;
  onMouseEnter: () => void;
  onMouseLeave: () => void;
  onClose: () => void;
}
const NavDropdown = ({
  show,
  currentPointer,
  id,
  onMouseEnter,
  onMouseLeave,
  onClose
}: NavDropdownProps) => {
  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          key={id}
          id={id}
          onMouseEnter={onMouseEnter}
          onMouseLeave={onMouseLeave}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { duration: 0.15 } }}
          transition={{ duration: 0.15 }}
          className={`flex ${currentPointer === "search" ? "" : "px-5"} absolute left-0 right-0 bottom-0 transform translate-y-full bg-white h-[65vh]  text-primary-text`}
        >
          <div
            className={`${currentPointer === "search" ? "" : "py-5"} w-full`}
          >
            {currentPointer === "shop" ? (
              <ShopNavDropdown />
            ) : currentPointer === "about" ? (
              <AboutNavbarDropdown />
            ) : currentPointer === "search" ? (
              <SearchComponent onClose={onClose}/>
            ) : (
              ""
            )}
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default NavDropdown;
