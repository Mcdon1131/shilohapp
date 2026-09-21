"use client";
import { ReactNode } from "react";

interface HoverProps {
  children: ReactNode;
  onMouseOver: () => void;
  onMouseLeave: () => void;
  height?: string;
  marginBottom?: string;
  id: string;
}

const Hover = ({
  children,
  onMouseOver,
  onMouseLeave,
  height,
  marginBottom,
  id,
}: HoverProps) => {
  return (
    <div
      id={id}
      onMouseOver={onMouseOver}
      onMouseLeave={onMouseLeave}
      style={{ height: height || "100%", marginBottom: marginBottom || "0" }}
      className="group relative w-fit flex items-center"
    >
      {children}
      <span className="group-hover:w-full transition-all duration-250 absolute inline-block mt-4.5 w-0 h-px bg-black"></span>
    </div>
  );
};

export default Hover;
