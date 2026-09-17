"use client";
import { motion, AnimatePresence } from "motion/react";
import Link from "next/link";
import InputField from "./InputField";

interface UserAuthProps {
  show: boolean;
  onClose?: () => void;
  onClick?: (component: string) => void;
}

const UserAuth = ({ show, onClick, onClose }: UserAuthProps) => {
  return (
    <AnimatePresence>
      {show && (
        <motion.div
          onClick={(e) => {
            e.stopPropagation();
            onClick?.("userAuth");
          }}
          initial={{ opacity: 0, y: "20px" }}
          animate={{ opacity: 1, y: "0px" }}
          exit={{
            opacity: 0,
            y: "10px",
            transition: { duration: 0.15 },
          }}
          className="absolute w-87.5  bottom-0 right-10 translate-y-2/2 bg-white text-black p-2 pb-4 shadow-lg z-50"
        >
          <div className="relative flex justify-between items-center py-2 w-[95%] mx-auto gap-3">
            <h1>Sign in or create account</h1>
            <button
              type="button"
              onClick={(e) => {
                e.stopPropagation();
                onClose?.();
              }}
              className="inline-block p-1 bg-[#f0f0f0] rounded-sm hover:bg-[#e0e0e0] transition-colors"
              aria-label="Close user menu"
            >
              <svg
                className="aspect-square"
                xmlns="http://www.w3.org/2000/svg"
                viewBox="0 0 24 24"
                fill="none"
                aria-hidden="true"
                height="21px"
              >
                <path
                  fill="currentColor"
                  d="M15.97 17.03a.75.75 0 1 0 1.06-1.06L13.06 12l3.97-3.97a.75.75 0 0 0-1.06-1.06L12 10.94 8.03 6.97a.75.75 0 0 0-1.06 1.06L10.94 12l-3.97 3.97a.75.75 0 1 0 1.06 1.06L12 13.06l3.97 3.97Z"
                />
              </svg>
            </button>
          </div>
          <Link
            className="bg-[#5533EA] w-[95%] mt-2 text-center block mx-auto py-3 text-white"
            href="/signin"
          >
            Sign In
          </Link>
          <div className="flex my-3 items-center gap-4 w-[95%] mx-auto">
            <span className="flex-1 h-px bg-black/20"></span>
            <p className="text-[12px] text-black/60">OR</p>
            <span className="flex-1 h-px bg-black/20"></span>
          </div>
          <InputField type="email" placeholder="Email" width="95%" />
          <div className="flex mt-5 w-[95%] gap-2 mx-auto justify-between">
            <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer border border-black/30 text-black/80 py-3 text-sm hover:bg-gray-100 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                aria-hidden="true"
                className="w-4 h-4"
                viewBox="0 0 16 16"
              >
                <path
                  fill="currentColor"
                  d="M4.667 2.32v-.75a.75.75 0 0 0-.624.333zm-2 10.666h-.75c0 .414.336.75.75.75zm8.666-10.667.624-.416a.75.75 0 0 0-.624-.334zm2 10.667v.75a.75.75 0 0 0 .75-.75zM2.667 5.319l-.624-.416a.75.75 0 0 0-.126.416zm10.666 0h.75a.75.75 0 0 0-.126-.416zm-8 4.25a.75.75 0 0 0 0 1.5v-1.5M8 11.07a.75.75 0 0 0 0-1.5v1.5m-5.333 1.917v.75h10.666v-1.5H2.667zm2-10.667-.624-.416-2 3 .624.416.624.416 2-3zm6.666 0-.624.416 2 3 .624-.416.624-.416-2-3zm2 3h-.75v7.667h1.5V5.319zm-8.666-3v.75H8v-1.5H4.667zM8 2.32v.75h3.333v-1.5H8zm-5.333 3v.75H8v-1.5H2.667zM8 5.32v.75h5.333v-1.5H8zm0 0h.75v-3h-1.5v3zm-5.333 0h-.75v7.667h1.5V5.319zm2.666 5v.75H8v-1.5H5.333z"
                ></path>
              </svg>
              <span>Orders</span>
            </button>
            <button className="flex-1 flex items-center justify-center gap-2 cursor-pointer border border-black/30 text-black/80  py-3 font-normal text-sm hover:bg-gray-100 transition-colors duration-200">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                fill="none"
                viewBox="0 0 16 16"
                aria-hidden="true"
                className="w-4 h-4"
              >
                <path
                  stroke="currentColor"
                  stroke-linejoin="round"
                  stroke-width="1.333"
                  d="M4.077 12.54c.887-1.144 2.257-1.873 3.923-1.873s3.036.73 3.923 1.873m-7.846 0A5.98 5.98 0 0 0 8 14c1.5 0 2.87-.55 3.923-1.46m-7.846 0a6 6 0 1 1 7.845 0M10 6.667a2 2 0 1 1-4 0 2 2 0 0 1 4 0Z"
                ></path>
              </svg>
              <span>Profile</span>
            </button>
          </div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default UserAuth;
