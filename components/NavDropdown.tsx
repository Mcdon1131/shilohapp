"use client";
import CosmeticImage from "@/public/cosmetics.jpg";
import CosmeticAsthetic from "@/public/cream1.jpg";
import { AnimatePresence, motion } from "motion/react";
import Image from "next/image";
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
        className="px-5 absolute left-0 right-0 bottom-0 transform translate-y-2/2 bg-white h-[65vh] text-black"
      >
        <div className="py-5 w-full">
          <section className="border flex gap-5 border-red-500 h-full">
            <div className="flex border gap-4 h-full flex-1">
              <div className="flex-1 "></div>
              <div className="flex-1 "></div>
              <div className="flex-1 "></div>
            </div>
            <div className="border flex flex-1 h-full gap-4">
              <div className="flex-1 h-full relative">
                <Image src={CosmeticImage} fill alt="this is a cosmetic" />
              </div>
              <div className="flex-1 h-full relative">
                <Image
                  src={CosmeticAsthetic}
                  fill
                  style={{ objectFit: "cover" }}
                  alt="this is a cosmetic"
                />
              </div>
            </div>
          </section>
        </div>
      </motion.div>
    </AnimatePresence>
  );
};

export default NavDropdown;
