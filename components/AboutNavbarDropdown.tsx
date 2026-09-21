import Link from "next/link";
import { motion } from "motion/react";
import ProductImage from "@/public/products.jpg";
import AboutImage from "@/public/about.jpg";
import Hover from "./Hover";
import Image from "next/image";

const AboutNavbarDropdown = () => {
  return (
    <section className="flex gap-5 h-full">
      <div className="flex  gap-4 h-full flex-1">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.1, duration: 0.15 }}
          className="flex-1 flex flex-col gap-3.75 text-sm"
        >
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">DISCOVER</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            height="fit-content"
            id="category1"
          >
            <Link href="#">ABOUT US</Link>
          </Hover>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.2, duration: 0.15 }}
          className="flex-1 flex flex-col gap-3.75 text-sm"
        >
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category2"
            height="fit-content"
          >
            <Link href="#">CONTACT </Link>
          </Hover>

          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            height="fit-content"
            id="category1"
          >
            <Link href="#">FAQs</Link>
          </Hover>
          <Hover
            onMouseOver={() => {}}
            onMouseLeave={() => {}}
            id="category1"
            height="fit-content"
          >
            <Link href="#">CONTACT US</Link>
          </Hover>
        </motion.div>
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ delay: 0.3, duration: 0.15 }}
          className="flex-1 flex flex-col gap-1.25"
        ></motion.div>
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
              src={AboutImage}
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
              <p className=" font-normal text-sm">OUR STORY</p>
              <span className="group-hover:w-full transition-all duration-250 absolute inline-block w-0 h-px bg-black left-0 -mt-0.5"></span>
            </div>
            <div className="w-fit mt-0.5">
              <p className=" font-normal text-[16px]">
                Origin and future vision
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
              src={ProductImage}
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
              <p className="font-normal text-sm">PRODUCTS</p>
              <span className="group-hover:w-full transition-all duration-250 absolute inline-block w-0 h-[0.5px] bg-black left-0 -mt-0.5"></span>
            </div>
            <div className="w-fit mt-0.5">
              <p className="font-normal text-[16px]">
                Explore our full range of products
              </p>
            </div>
          </motion.div>
        </button>
      </div>
    </section>
  );
};

export default AboutNavbarDropdown;
