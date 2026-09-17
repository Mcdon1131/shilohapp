"use client"; 

import { motion, AnimatePresence } from "motion/react";
import { useState, useEffect } from "react";

const AnnouncementBar = () => {
  const colors = ["#242424", "#254137", "#4e2c2c"];
  const texts = [
    "Free shipping when you spend over $50",
    "Stock up and save with weeks' of supply",
    "Save up to 50% with code: FRESH ",
  ];
  
  const [currentIndex, setCurrentIndex] = useState<number>(0);

  useEffect(() => {
    const timer = setTimeout(() => {
      setCurrentIndex((prev) => (prev + 1) % texts.length);
    }, 7000);

    return () => clearTimeout(timer);
  }, [currentIndex, texts.length]);

  return (
    <div
      style={{
        backgroundColor: colors[currentIndex],
        transition: "background-color 1s ease",
        transitionDelay: "0.3s",
      }}
      className="flex justify-between max-md:justify-center items-center px-17"
    >
      <div className="w-1/8 h-8 max-md:hidden"></div>
      
      <div className="flex items-center font-figtree">
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

      <div className="flex max-md:hidden items-center mr-1 gap-6">
        {/* Facebook */}
        <a href="#" aria-label="Facebook">
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* X / Twitter */}
        <a href="#" aria-label="X">
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <line
              x1="9.54668"
              y1="11.2286"
              x2="4.20871"
              y2="17.4337"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M16.9252 2.49992L11.6155 8.6981"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>

        {/* Instagram */}
        <a href="#" aria-label="Instagram">
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
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
            <path
              d="M2.5 13.3333V6.66667C2.5 5.5616 2.93899 4.50179 3.72039 3.72039C4.50179 2.93899 5.5616 2.5 6.66667 2.5H13.3333C14.4384 2.5 15.4982 2.93899 16.2796 3.72039C17.061 4.50179 17.5 5.5616 17.5 6.66667V13.3333C17.5 14.4384 17.061 15.4982 16.2796 16.2796C15.4982 17.061 14.4384 17.5 13.3333 17.5H6.66667C5.5616 17.5 4.50179 17.061 3.72039 16.2796C2.93899 15.4982 2.5 14.4384 2.5 13.3333Z"
              stroke="currentColor"
              strokeWidth="1.5"
            />
            <path
              d="M14.584 5.42506L14.5923 5.41589"
              stroke="currentColor"
              strokeWidth="1.5"
              strokeLinecap="round"
              strokeLinejoin="round"
            />
          </svg>
        </a>
      </div>
    </div>
  );
};

export default AnnouncementBar;