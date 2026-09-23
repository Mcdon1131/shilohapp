"use client";
interface SideBarProps {
  sidebarRef?: React.RefObject<HTMLDivElement | null>;
  id: string;
  onClose: () => void;
  show: boolean;
}

import { AnimatePresence, motion } from "motion/react";
import { useRef } from "react";

const SideBar = ({ sidebarRef, id, onClose, show }: SideBarProps) => {
  const sideBarContainer = useRef<HTMLDivElement | null>(null);

  const HandleOnMouseClick = (e: React.MouseEvent<HTMLDivElement>) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <AnimatePresence mode="wait">
      {show && (
        <motion.div
          onClick={(e) => {
            HandleOnMouseClick(e);
          }}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0, transition: { delay: 0.25, duration: 1 } }}
          key={id}
          ref={sidebarRef}
          className="bg-[rgba(230,230,230,0.7)] fixed inset-0"
        >
          <motion.div
            ref={sideBarContainer}
            initial={{ x: "-100%" }}
            animate={{ x: 0 }}
            transition={{ duration: 0.25 }}
            exit={{ x: "-100%" }}
            className="bg-[rgb(237_236_234)] absolute flex flex-col h-dvh w-[90%] max-w-112.5 left-0"
          >
            <header className="flex justify-between py-4 px-3 relative">
              <div></div>
              <button className="mr-2" onClick={() => onClose()}>
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="20px"
                  height="20px"
                  viewBox="0 0 512 512"
                  version="1.1"
                >
                  <title>cancel</title>
                  <g
                    id="Page-1"
                    stroke="none"
                    strokeWidth="1"
                    fill="none"
                    fill-rule="evenodd"
                  >
                    <g
                      id="work-case"
                      fill="#000000"
                      transform="translate(91.520000, 91.520000)"
                    >
                      <polygon
                        id="Close"
                        points="328.96 30.2933333 298.666667 1.42108547e-14 164.48 134.4 30.2933333 1.42108547e-14 1.42108547e-14 30.2933333 134.4 164.48 1.42108547e-14 298.666667 30.2933333 328.96 164.48 194.56 298.666667 328.96 328.96 298.666667 194.56 164.48"
                      ></polygon>
                    </g>
                  </g>
                </svg>
              </button>
              <span className="absolute bottom-0 w-[95%] left-[50%] -translate-x-1/2 border-b border-gray-400"></span>
            </header>
            <section className=" flex-1 flex items-center justify-center relative"></section>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default SideBar;
