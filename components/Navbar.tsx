"use client";

import { useRef, useState, useEffect } from "react";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import Hover from "./Hover";
import NavDropdown from "./NavDropdown";

const Navbar = () => {
  const texts = [
    "Free shipping when you spend over $50",
    "Stock up and save with weeks' of supply",
    "Save up to 50% with code: FRESH ",
  ];
  const colors = ["#f97316", "#fca5a5", "#2563eb"];
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [showDropdownNav, setShowDropdownNav] = useState<boolean>(false);
  const [pointer, setPointer] = useState<string>("");

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);

  const handleMouseEnter = (name: string) => {
    clearTimeout(timeoutRef.current);

    setShowDropdownNav(true);
    setPointer(name);
  };

  const handleMouseClick = (name: string) => {
    if (!name) {
      console.log("clear stuff");
      return setPointer("");
    }
    setPointer(name);
    console.log("clicked");
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdownNav(false);
    }, 1000);
  };

  useEffect(() => {
    const interval = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 7000);

    return () => clearTimeout(interval);
  }, [currentIndex]);

  useEffect(() => {
    const handleClick = () => {
      if (pointer !== "") setPointer("");
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [pointer]);

  return (
    <div className="relative " onClick={() => handleMouseClick()}>
      <div
        style={{
          backgroundColor: colors[currentIndex],
          transition: "background-color 1s ease",
          transitionDelay: "0.3s",
        }}
        className={`flex justify-between max-md:justify-center items-center px-17  `}
      >
        <div className="w-1/8 h-8 max-md:hidden"></div>
        <div className="flex items-center font-figtree ">
          <AnimatePresence mode="wait">
            <motion.span
              key={currentIndex}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              transition={{ duration: 0.5 }}
              className="p-2 text-[13px] font-figtree text-white font-semibold"
            >
              {texts[currentIndex]}
            </motion.span>
          </AnimatePresence>
        </div>
        <div className="flex max-md:hidden items-center mr-1 gap-6 ">
          <a href="">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              className="text-white"
            >
              <path
                d="M14.1667 1.66663H11.6667C10.5616 1.66663 9.50179 2.10561 8.72039 2.88701C7.93899 3.66842 7.5 4.72822 7.5 5.83329V8.33329H5V11.6666H7.5V18.3333H10.8333V11.6666H13.3333L14.1667 8.33329H10.8333V5.83329C10.8333 5.61228 10.9211 5.40032 11.0774 5.24404C11.2337 5.08776 11.4457 4.99996 11.6667 4.99996H14.1667V1.66663Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a href="">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              className="text-white"
            >
              <path
                d="M3.65032 2.63428C5.01668 2.63428 6.04467 2.63428 7.41103 2.63428L17.6721 17.4303H13.8046L3.65032 2.63428Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M3.65032 2.63428C5.01668 2.63428 6.04467 2.63428 7.41103 2.63428L17.6721 17.4303H13.8046L3.65032 2.63428Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <line
                x1="9.54668"
                y1="11.2286"
                x2="4.20871"
                y2="17.4337"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></line>
              <path
                d="M16.9252 2.49992L11.6155 8.6981"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a href="">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              className="text-white"
            >
              <path
                d="M9.99935 13.3333C10.8834 13.3333 11.7313 12.9821 12.3564 12.357C12.9815 11.7319 13.3327 10.884 13.3327 9.99996C13.3327 9.1159 12.9815 8.26806 12.3564 7.64294C11.7313 7.01782 10.8834 6.66663 9.99935 6.66663C9.11529 6.66663 8.26745 7.01782 7.64233 7.64294C7.0172 8.26806 6.66602 9.1159 6.66602 9.99996C6.66602 10.884 7.0172 11.7319 7.64233 12.357C8.26745 12.9821 9.11529 13.3333 9.99935 13.3333Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z"
                stroke="currentColor"
                stroke-width="1.5"
              ></path>
              <path
                d="M14.584 5.42506L14.5923 5.41589"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
          <a href="">
            <svg
              viewBox="0 0 20 20"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              width="21"
              height="21"
              className="text-white"
            >
              <path
                d="M17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667Z"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
              <path
                d="M8.33399 10C7.83953 10 7.35618 10.1466 6.94506 10.4213C6.53394 10.696 6.21351 11.0865 6.02429 11.5433C5.83507 12.0001 5.78556 12.5028 5.88202 12.9877C5.97849 13.4727 6.21659 13.9181 6.56622 14.2678C6.91585 14.6174 7.36131 14.8555 7.84626 14.952C8.33121 15.0484 8.83388 14.9989 9.29069 14.8097C9.74751 14.6205 10.138 14.3 10.4127 13.8889C10.6874 13.4778 10.834 12.9945 10.834 12.5V5C11.1115 5.83333 12.1673 7.5 14.1673 7.5"
                stroke="currentColor"
                stroke-width="1.5"
                stroke-linecap="round"
                stroke-linejoin="round"
              ></path>
            </svg>
          </a>
        </div>
      </div>
      <div className="px-15 flex gap-4 bg-red-500">
        <div className="flex-1  flex items-center gap-7.5">
          <Hover
            id={"shop"}
            onMouseOver={() => handleMouseEnter("shop")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" className="pb-1 font-figtree text-sm ">
              Shop
            </Link>
          </Hover>
          <Hover
            id={"about"}
            onMouseOver={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" className="pb-1 font-figtree text-sm ">
              About
            </Link>
          </Hover>
        </div>
        <div className="">
          <h1 className="py-3.75 min-[990px]:py-7.5 font-poppins font-bold text-[18px] tracking-widest ">
            SHILOH GLOW
          </h1>
        </div>
        <div className="flex-1  flex items-center justify-end gap-6 pr-2">
          <button>
            <span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M14.1667 14.1667L17.5 17.5M2.5 9.16667C2.5 10.9348 3.20238 12.6305 4.45262 13.8807C5.70286 15.131 7.39856 15.8333 9.16667 15.8333C10.9348 15.8333 12.6305 15.131 13.8807 13.8807C15.131 12.6305 15.8333 10.9348 15.8333 9.16667C15.8333 7.39856 15.131 5.70286 13.8807 4.45262C12.6305 3.20238 10.9348 2.5 9.16667 2.5C7.39856 2.5 5.70286 3.20238 4.45262 4.45262C3.20238 5.70286 2.5 7.39856 2.5 9.16667Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <button>
            <span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M16.2493 18.3333C16.5809 18.3333 16.8988 18.2016 17.1332 17.9671C17.3677 17.7327 17.4993 17.4148 17.4993 17.0833C17.4993 16.7517 17.3677 16.4338 17.1332 16.1994C16.8988 15.9649 16.5809 15.8333 16.2493 15.8333C15.9178 15.8333 15.5999 15.9649 15.3655 16.1994C15.131 16.4338 14.9993 16.7517 14.9993 17.0833C14.9993 17.4148 15.131 17.7327 15.3655 17.9671C15.5999 18.2016 15.9178 18.3333 16.2493 18.3333ZM7.91602 18.3333C8.24754 18.3333 8.56548 18.2016 8.7999 17.9671C9.03432 17.7327 9.16602 17.4148 9.16602 17.0833C9.16602 16.7517 9.03432 16.4338 8.7999 16.1994C8.56548 15.9649 8.24754 15.8333 7.91602 15.8333C7.5845 15.8333 7.26655 15.9649 7.03213 16.1994C6.79771 16.4338 6.66602 16.7517 6.66602 17.0833C6.66602 17.4148 6.79771 17.7327 7.03213 17.9671C7.26655 18.2016 7.5845 18.3333 7.91602 18.3333Z"
                  fill="#262428"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
                <path
                  d="M4.16602 3.33341H18.3327L16.666 12.5001M4.16602 3.33341L5.83268 12.5001H16.666M4.16602 3.33341C4.02685 2.77758 3.33268 1.66675 1.66602 1.66675M16.666 12.5001H4.35768C2.87102 12.5001 2.08268 13.1509 2.08268 14.1667C2.08268 15.1826 2.87102 15.8334 4.35768 15.8334H16.2493"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              handleMouseClick("userAuth");
            }}
          >
            <span>
              <svg
                viewBox="0 0 20 20"
                fill="none"
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
              >
                <path
                  d="M4.16602 16.6666V15.8333C4.16602 14.2862 4.7806 12.8024 5.87456 11.7085C6.96852 10.6145 8.45225 9.99992 9.99935 9.99992M9.99935 9.99992C11.5464 9.99992 13.0302 10.6145 14.1241 11.7085C15.2181 12.8024 15.8327 14.2862 15.8327 15.8333V16.6666M9.99935 9.99992C10.8834 9.99992 11.7313 9.64873 12.3564 9.02361C12.9815 8.39849 13.3327 7.55064 13.3327 6.66659C13.3327 5.78253 12.9815 4.93468 12.3564 4.30956C11.7313 3.68444 10.8834 3.33325 9.99935 3.33325C9.11529 3.33325 8.26745 3.68444 7.64233 4.30956C7.0172 4.93468 6.66602 5.78253 6.66602 6.66659C6.66602 7.55064 7.0172 8.39849 7.64233 9.02361C8.26745 9.64873 9.11529 9.99992 9.99935 9.99992Z"
                  stroke="currentColor"
                  stroke-width="1.5"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                ></path>
              </svg>
            </span>
          </button>
        </div>
        <NavDropdown
          id={"nav-dropdown"}
          show={showDropdownNav}
          currentPointer={pointer}
          onMouseEnter={() => {
            clearTimeout(timeoutRef.current);
          }}
          onMouseLeave={handleMouseLeave}
        />
      </div>
    </div>
  );
};

export default Navbar;
