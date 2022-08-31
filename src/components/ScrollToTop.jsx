import React from "react";
import { AiOutlineArrowUp } from "react-icons/ai";

const ScrollToTop = ({ scrollToTopIndicator, scrollToTopFunction }) => {
  return (
    <div
      onClick={scrollToTopFunction}
      className={
        scrollToTopIndicator
          ? "flex bg-transperant fixed h-12 w-12 bottom-5 right-3 z-40 rounded-full justify-center items-center border-solid border-2 border-primary cursor-pointer hover:opacity-50"
          : "hidden bg-transperant fixed h-12 w-12 bottom-5 right-3 z-40 rounded-full justify-center items-center border-solid border-2 border-primary cursor-pointer hover:opacity-50"
      }
    >
      <AiOutlineArrowUp className="text-primary h-6 w-6" />
    </div>
  );
};

export default ScrollToTop;
