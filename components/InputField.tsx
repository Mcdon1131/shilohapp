import React from "react";

interface InputFieldProps {
  type: string;
  placeholder: string;
  width?: string;
}

const InputField = ({ type, placeholder, width }: InputFieldProps) => {
  const inputType = type.toLowerCase();

  return (
    <form
      className="mx-auto relative w-full"
      style={width ? { width } : undefined}
    >
      {/* CHANGE 1: rounded-px → rounded-md */}
      <div className="relative w-full border border-black/30 rounded-md">
        <input
          className="peer w-full focus:outline-none p-3 pt-5 text-md bg-transparent placeholder-transparent"
          type={inputType}
          id={inputType}
          placeholder={placeholder}
        />

        <label
          className="
            absolute left-3 top-1/2
            -translate-y-1/2
            text-black/40 text-sm
            transition-all duration-200
            pointer-events-none
            origin-left

            peer-placeholder-shown:top-1/2
            peer-placeholder-shown:-translate-y-1/2
            peer-placeholder-shown:text-base

            peer-focus:top-2
            peer-focus:-translate-y-1.5
            peer-focus:text-xs
            peer-focus:text-black

            /* CHANGE 2:
               Added these classes so the label stays at the top
               when the input contains text but is no longer focused. */
            peer-[:not(:placeholder-shown)]:top-2
            peer-[:not(:placeholder-shown)]:-translate-y-1.5
            peer-[:not(:placeholder-shown)]:text-xs
          "
          htmlFor={inputType}
        >
          {placeholder}
        </label>
      </div>
      <button
        className="absolute cursor-pointer z-10 right-4 top-[50%] -translate-y-1/2 block aspect-square w-7"
        type="submit"
        
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="w-full h-full"
          viewBox="0 0 24 24"
          fill="none"
        >
          <rect width="24" height="24" fill="white" />
          <path
            d="M6 12H18M18 12L13 7M18 12L13 17"
            stroke="#000000"
            stroke-linecap="round"
            stroke-linejoin="round"
          />
        </svg>
      </button>
    </form>
  );
};

export default InputField;
