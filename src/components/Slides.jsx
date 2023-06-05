import React, { useEffect, useState } from "react";
import { slides } from "../data";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
// import { BsDot } from "react-icons/bs";

const Slides = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [arrow, setArrow] = useState("");

  const goToPrev = () => {
    const isFirstSlide = currentIndex === 0;
    const newIndex = isFirstSlide ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setArrow("left");
  };

  const goToNext = () => {
    const isLastSlide = currentIndex === slides.length - 1;
    const newIndex = isLastSlide ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setArrow("right");
  };

  //  Automated slider
  const autoScroll = true;
  let slideInterval;

  function auto() {
    slideInterval = setInterval(goToNext, 5000);
  }

  useEffect(() => {
    if (autoScroll) {
      auto();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  //  Check out a particular slide
  //   const goToSlide = (slideIndex) => {
  //     setCurrentIndex(slideIndex);
  //   };

  return (
    <div className="w-full bg-secondary duration-300">
      <div className="main-div mt-20 bg-secondary hidden xxsm:flex h-16 text-primary text-center overflow-hidden flex-col duration-300">
        <div className="h-full relative mx-12 flex items-center justify-between font-bold">
          <div
            className="z-10 cursor-pointer hover:opacity-50"
            onClick={goToPrev}
          >
            <AiOutlineArrowLeft />
          </div>
          <div className="w-[60%] overflow-hidden">
            {/* <div>{slides[currentIndex].title}</div> */}
            {slides.map((slide, index) => (
              <div
                className={
                  index === currentIndex
                    ? "animate-animateOp translate-x-0 transition-all duration-500 ease-in-out"
                    : `${
                        arrow === "right"
                          ? "-translate-x-full"
                          : "translate-x-full"
                      } transition-all duration-500 ease-in-out`
                }
                key={index}
              >
                {index === currentIndex && (
                  <>
                    <p>{slide.title}</p>
                  </>
                )}
              </div>
            ))}
          </div>
          <div
            className="z-10 cursor-pointer hover:opacity-50"
            onClick={goToNext}
          >
            <AiOutlineArrowRight />
          </div>
        </div>
        {/* <div className="flex mx-8 justify-center items-center gap-4">
        {slides.map((slide, slideIndex) => (
          <div
            key={slideIndex}
            className={`cursor-pointer ${
              slideIndex === currentIndex ? `text-[#435e2d]` : ``
            }`}
            onClick={() => goToSlide(slideIndex)}
          >
            <BsDot size="15" />
          </div>
        ))}
      </div> */}
      </div>
    </div>
  );
};

export default Slides;
