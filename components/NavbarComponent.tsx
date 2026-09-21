"use client";

import { useRef, useState, useEffect, MouseEvent } from "react";
import { useScroll, useMotionValueEvent } from "motion/react";

import Link from "next/link";
import Hover from "./Hover";
import NavDropdown from "./NavDropdown";
import UserAuth from "./UserAuth";
import Cart from "./Cart";

const NavbarComponent = () => {
  const [showDropdownNav, setShowDropdownNav] = useState<boolean>(false);
  const [pointer, setPointer] = useState<string>("");

  const [isNavHovered, setIsNavHovered] = useState<boolean>(false);

  const timeoutRef = useRef<NodeJS.Timeout | null>(null);
  const userAuthRef = useRef<HTMLDivElement | null>(null);
  const userCartRef = useRef<HTMLDivElement | null>(null);

  const { scrollY } = useScroll();
  const [scrolled, setIsScrolled] = useState(false);
  useMotionValueEvent(scrollY, "change", (latestPx) => {
    if (latestPx > 35) {
      setIsScrolled(true);
    } else {
      setIsScrolled(false);
    }
  });

  const handleMouseEnter = (name: string) => {
    clearTimeout(timeoutRef.current);

    setShowDropdownNav(true);
    setPointer(name);
  };

  const handleMouseClick = (name?: string) => {
    if (!name) {
      return setPointer("");
    }
    setPointer(name);
    console.log(pointer);
  };

  const handleMouseLeave = () => {
    timeoutRef.current = setTimeout(() => {
      setShowDropdownNav(false);
    }, 1000);
  };

  useEffect(() => {
    const handleClick = (e: MouseEvent) => {
      if (!(e.target instanceof Node)) {
        return;
      }

      const dropdown = document.getElementById("nav-dropdown");

      if (dropdown?.contains(e.target)) {
        return;
      }

      if (userAuthRef.current?.contains(e.target)) {
        return;
      }

      if (pointer === "shop" || pointer === "about") {
        setShowDropdownNav(false);
      }
      if (pointer === "userAuth") {
        setPointer("");
      }
    };
    window.addEventListener("click", handleClick);
    return () => window.removeEventListener("click", handleClick);
  }, [pointer]);

  const isWhiteBg = scrolled || isNavHovered || showDropdownNav;

  return (
    <div
      onMouseEnter={() => setIsNavHovered(true)}
      onMouseLeave={() => {
        setIsNavHovered(false);
      }}
      className={`relative px-15 max-lg:px-10 flex gap-4 transition-colors duration-350 ease-in-out ${isWhiteBg ? "bg-white text-black" : "bg-black text-white"}`}
    >
      <div className="flex-1 flex items-center gap-7.5">
        <span className="max-lg:hidden h-[85%]">
          <Hover
            id={"shop"}
            onMouseOver={() => handleMouseEnter("shop")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" className="pb-1 font-figtree text-sm text-current ">
              Shop
            </Link>
          </Hover>
        </span>

        <span className="max-lg:hidden h-[85%]">
          <Hover
            id={"about"}
            onMouseOver={() => handleMouseEnter("about")}
            onMouseLeave={handleMouseLeave}
          >
            <Link href="#" className="pb-1 text-current font-figtree text-sm ">
              About
            </Link>
          </Hover>
        </span>
        <button className="text-current lg:hidden block w-8 ">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="w-full h-full"
            viewBox="0 0 25 25"
            fill="none"
          >
            <g id="SVGRepo_bgCarrier" stroke-width="0" />

            <g
              id="SVGRepo_tracerCarrier"
              stroke-linecap="round"
              stroke-linejoin="round"
            />

            <g id="SVGRepo_iconCarrier">
              {" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.75 7C20.75 7.41421 20.4142 7.75 20 7.75L4 7.75C3.58579 7.75 3.25 7.41421 3.25 7C3.25 6.58579 3.58579 6.25 4 6.25L20 6.25C20.4142 6.25 20.75 6.58579 20.75 7Z"
                fill="currentColor"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.75 12C20.75 12.4142 20.4142 12.75 20 12.75L4 12.75C3.58579 12.75 3.25 12.4142 3.25 12C3.25 11.5858 3.58579 11.25 4 11.25L20 11.25C20.4142 11.25 20.75 11.5858 20.75 12Z"
                fill="currentColor"
              />{" "}
              <path
                fill-rule="evenodd"
                clip-rule="evenodd"
                d="M20.75 17C20.75 17.4142 20.4142 17.75 20 17.75L4 17.75C3.58579 17.75 3.25 17.4142 3.25 17C3.25 16.5858 3.58579 16.25 4 16.25L20 16.25C20.4142 16.25 20.75 16.5858 20.75 17Z"
                fill="currentColor"
              />{" "}
            </g>
          </svg>
        </button>
      </div>
      <div className="">
        <h1 className="py-3.75 min-[990px]:py-7.5 font-poppins font-bold text-[18px] tracking-widest text-current ">
          SHILOH GLOW
        </h1>
      </div>
      <div className="flex-1 text-current flex items-center justify-end gap-6 pr-2">
        <button className="text-current">
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
              ></path>
            </svg>
          </span>
        </button>
        <button
          onClick={() => {
            handleMouseClick("cart");
          }}
          className="text-current "
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
                d="M16.2493 18.3333C16.5809 18.3333 16.8988 18.2016 17.1332 17.9671C17.3677 17.7327 17.4993 17.4148 17.4993 17.0833C17.4993 16.7517 17.3677 16.4338 17.1332 16.1994C16.8988 15.9649 16.5809 15.8333 16.2493 15.8333C15.9178 15.8333 15.5999 15.9649 15.3655 16.1994C15.131 16.4338 14.9993 16.7517 14.9993 17.0833C14.9993 17.4148 15.131 17.7327 15.3655 17.9671C15.5999 18.2016 15.9178 18.3333 16.2493 18.3333ZM7.91602 18.3333C8.24754 18.3333 8.56548 18.2016 8.7999 17.9671C9.03432 17.7327 9.16602 17.4148 9.16602 17.0833C9.16602 16.7517 9.03432 16.4338 8.7999 16.1994C8.56548 15.9649 8.24754 15.8333 7.91602 15.8333C7.5845 15.8333 7.26655 15.9649 7.03213 16.1994C6.79771 16.4338 6.66602 16.7517 6.66602 17.0833C6.66602 17.4148 6.79771 17.7327 7.03213 17.9671C7.26655 18.2016 7.5845 18.3333 7.91602 18.3333Z"
                fill="#262428"
                stroke="currentColor"
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
          className="text-current max-lg:hidden"
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
                strokeWidth="1.5"
                strokeLinecap="round"
                strokeLinejoin="round"
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
      <UserAuth
        id={"user-auth"}
        show={pointer === "userAuth"}
        onClose={() => setPointer("")}
        userAuthRef={userAuthRef}
      />
      <Cart
        id={"cart"}
        show={pointer === "cart"}
        onClose={() => setPointer("")}
        cartRef={userCartRef}
        onMouseEnter={() => setIsNavHovered(false)}
      />
    </div>
  );
};

export default NavbarComponent;
