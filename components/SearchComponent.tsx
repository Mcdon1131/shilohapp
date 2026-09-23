"use client";

interface SearchComponentProps {
  onClose: () => void;
}

const SearchComponent = ({ onClose }: SearchComponentProps) => {
  return (
    <section className="h-[90%] overflow-y-auto">
      <div className="w-full md:px-15 px-3.75 md:py-7.5 py-5 flex">
        <button className="p-3 bg-[rgb(244,244,244)] cursor-pointer">
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
        </button>
        <input
          type="text"
          className="flex-1 bg-[rgb(244,244,244)] outline-none"
          placeholder="Search our products..."
        />
        <button
          onClick={() => {
            onClose();
          }}
          className="p-3 bg-[rgb(244,244,244)] cursor-pointer"
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
      <div className="pb-10 md:px-15 px-3.75 h-full flex flex-col gap-10 md:flex-row md:gap-5">
        <div className="w-full flex flex-col gap-5 md:flex-1">
          <h2 className="pb-2.5 relative font-nanum text-primary-text text-md font-thin">
            <span>Popular categories</span>
            <span className="absolute w-full h-px bg-gray-300 bottom-0 left-0"></span>
          </h2>
          <div className="flex md:flex-col gap-5 text-primary-text text-md">
            <span>Super Detox</span>
            <span>Energy Boosting</span>
            <span>Super Green</span>
          </div>
        </div>
        <div className="border flex flex-col gap-5  w-full min-h-full md:flex-2">
          <h2 className="pb-2.5 relative font-nanum text-primary-text text-md font-thin">
            <span>Best Sellers</span>
            <span className="absolute w-full h-px bg-gray-300 bottom-0 left-0"></span>
          </h2>
          <div className="flex-1 border-2"></div>
        </div>
      </div>
    </section>
  );
};

export default SearchComponent;
