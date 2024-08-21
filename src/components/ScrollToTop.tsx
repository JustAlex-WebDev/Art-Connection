import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";

// Define the prop types for ScrollToTop
interface ScrollToTopProps {
  scrollToTopIndicator: boolean;
}

const ScrollToTop: React.FC<ScrollToTopProps> = ({ scrollToTopIndicator }) => {
  const { scrollToTopFunction } = useScrollToTopFunction();

  return (
    <div
      onClick={scrollToTopFunction} // Handle the click internally
      className={
        scrollToTopIndicator
          ? "flex bg-transparent fixed h-12 w-12 bottom-5 right-3 z-40 rounded-full justify-center items-center border-solid border-2 border-primary cursor-pointer hover:opacity-50 duration-300"
          : "hidden bg-transparent fixed h-12 w-12 bottom-5 right-3 z-40 rounded-full justify-center items-center border-solid border-2 border-primary cursor-pointer hover:opacity-50"
      }
    >
      <AiOutlineArrowUp className="text-primary h-6 w-6" />
    </div>
  );
};

export default ScrollToTop;
