"use client"
import Hover from "./Hover";
import { motion } from "motion/react";
import CosmeticImage from "@/public/cosmetics.jpg";
import Image from "next/image";
import CosmeticAsthetic from "@/public/cream1.jpg";
import Link from "next/link";

const ShopNavDropdown = () => {
  return (
    <section className="flex gap-5 h-full">
      <div className="flex  gap-4 h-full flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.15 }}
          className="flex-1 flex flex-col gap-1.25"
        >
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
            marginBottom="8px"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            height="fit-content"
            id="category1"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.15 }}
          className="flex-1 flex flex-col gap-1.25"
        >
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category2"
            height="fit-content"
            marginBottom="8px"
          >
            <Link href="#">Cosmetic </Link>
          </Hover>

          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            height="fit-content"
            id="category1"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.15 }}
          className="flex-1 flex flex-col gap-1.25"
        >
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category3"
            height="fit-content"
            marginBottom="8px"
          >
            <Link href="#">Cosmetic 3</Link>
          </Hover>

          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            height="fit-content"
            id="category1"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">Cosmetic 1</Link>
          </Hover>
        </motion.div>
      </div>
      <div className="flex flex-1 h-full gap-2">
        <button className="group rounded-xs overflow-hidden flex-1 flex flex-col items-center justify-center h-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.4, duration: 0.15 }}
            className="relative flex-1 w-full"
          >
            <Image
              src={CosmeticImage}
              style={{ objectFit: "cover" }}
              fill
              alt="this is a cosmetic"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.45, duration: 0.15 }}
            className=" w-full h-20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <div className="relative w-fit">
              <p className=" font-normal text-sm">BUY NOW & SAVE 50%</p>
              <span className="group-hover:w-full transition-all duration-250 absolute inline-block w-0 h-px bg-primary-text left-0 -mt-0.5"></span>
            </div>
            <div className="w-fit mt-0.5">
              <p className="font-normal text-[16px]">
                Limited time offer through Sunday
              </p>
            </div>
          </motion.div>
        </button>
        <button className="group rounded-xs overflow-hidden flex-1 flex flex-col items-center justify-center h-full relative">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.5, duration: 0.15 }}
            className="relative flex-1 w-full"
          >
            <Image
              src={CosmeticAsthetic}
              style={{ objectFit: "cover" }}
              fill
              alt="this is a cosmetic"
            />
          </motion.div>
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: 0.55, duration: 0.15 }}
            className=" w-full h-20 bg-white/5 backdrop-blur-sm flex flex-col items-center justify-center"
          >
            <div className="relative w-fit">
              <p className=" font-normal text-sm">DAILY MOISTURIZER & SPF 20</p>
              <span className="group-hover:w-full transition-all duration-250 absolute inline-block w-0 h-[0.5px] bg-black left-0 -mt-0.5"></span>
            </div>
            <div className="w-fit mt-0.5">
              <p className="font-normal text-[16px]">
                Treat all skin types to intense thermal hydration
              </p>
            </div>
          </motion.div>
        </button>
      </div>
    </section>
  );
};

export default ShopNavDropdown;
