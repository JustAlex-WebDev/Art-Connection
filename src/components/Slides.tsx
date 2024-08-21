import { motion as m } from "framer-motion";
import React, { useEffect, useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import { slides } from "../data";

const Slides: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState<number>(0);
  const [arrowDirection, setArrowDirection] = useState<"left" | "right">(
    "right"
  );

  // Function to go to the previous slide
  const goToPrev = () => {
    const newIndex = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(newIndex);
    setArrowDirection("left");
  };

  // Function to go to the next slide
  const goToNext = () => {
    const newIndex = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(newIndex);
    setArrowDirection("right");
  };

  // Automated slider
  const autoScroll = true;
  let slideInterval: NodeJS.Timeout;

  const startAutoScroll = () => {
    slideInterval = setInterval(goToNext, 5000);
  };

  useEffect(() => {
    if (autoScroll) {
      startAutoScroll();
    }
    return () => clearInterval(slideInterval);
  }, [currentIndex]);

  return (
    <m.div
      initial={{ y: "-250%" }}
      animate={{ y: "0%" }}
      transition={{ delay: 2, duration: 0.5 }}
      className="w-full bg-secondary duration-300"
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.75, duration: 0.5 }}
        className="main-div mt-20 bg-secondary hidden xxsm:flex h-16 text-primary text-center overflow-hidden flex-col duration-300"
      >
        <div className="h-full relative mx-12 flex items-center justify-between font-bold">
          <div
            className="z-10 cursor-pointer hover:opacity-50"
            onClick={goToPrev}
            aria-label="Previous slide"
          >
            <AiOutlineArrowLeft />
          </div>
          <div className="w-[60%] overflow-hidden">
            {slides.map((slide, index) => (
              <div
                key={index}
                className={`transition-all duration-500 ease-in-out ${
                  index === currentIndex
                    ? "animate-animateOp translate-x-0"
                    : arrowDirection === "right"
                    ? "-translate-x-full"
                    : "translate-x-full"
                }`}
              >
                {index === currentIndex && <p>{slide.title}</p>}
              </div>
            ))}
          </div>
          <div
            className="z-10 cursor-pointer hover:opacity-50"
            onClick={goToNext}
            aria-label="Next slide"
          >
            <AiOutlineArrowRight />
          </div>
        </div>
      </m.div>
    </m.div>
  );
};

export default Slides;
