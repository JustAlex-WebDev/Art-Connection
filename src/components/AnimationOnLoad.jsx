import React, { useState, useEffect, useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";
import { motion as m } from "framer-motion";
import { Circle } from "rc-progress";

const AnimationOnLoad = () => {
  const { theme } = useContext(ThemeContext);
  const [percent, setPercent] = useState(0);
  const limiter = 100;

  useEffect(() => {
    const incrementer = setInterval(() => {
      setPercent((prev) => {
        if (prev < limiter) return prev + 1;
        clearInterval(incrementer);
        return prev;
      });
    }, 25);
  }, []);
  // console.log(percent);

  return (
    <div className="w-full h-[100vh] bg-primary flex justify-center items-center animate-animateOp text-primary overflow-hidden">
      <m.div
        initial={{ scale: 1 }}
        animate={{ scale: 300 }}
        transition={{ duration: 2, delay: 3, ease: "easeIn" }}
        exit={{ scale: 1 }}
        className="w-40 h-40 rounded-full flex justify-center items-center animate-pulse shadow-lg"
      >
        {theme === "dark" ? (
          <Circle
            className="w-40 h-40 opacity-70"
            percent={percent}
            strokeWidth={2}
            strokeColor="#fff"
            trailColor="#000000"
          />
        ) : (
          <Circle
            className="w-40 h-40 opacity-70"
            percent={percent}
            strokeWidth={2}
            strokeColor="#000000"
            trailColor="#fff"
          />
        )}

        <div className="text-lg font-bold z-10 absolute animate-animateOp2 uppercase">
          <m.div
            initial={{ opacity: 1 }}
            animate={{ opacity: 0 }}
            transition={{ delay: 3.25, duration: 1 }}
            className="overflow-hidden"
          >
            art
          </m.div>
        </div>
        <div className="overflow-hidden w-40 h-40 rounded-full text-xs font-bold absolute animate-animateOp2 uppercase flex flex-col justify-center items-center gap-1">
          <div className="animate-onLoadAnimation1">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "200%", x: "10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-between gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation2">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "200%", x: "10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-evenly gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation1">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "200%", x: "10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-between gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation2">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "200%", x: "10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-evenly gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation1">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "200%", x: "10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-between gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation2">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "-200%", x: "-10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-evenly gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation1">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "-200%", x: "-10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-between gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation2">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "-200%", x: "-10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-evenly gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation1">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "-200%", x: "-10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-between gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
          <div className="animate-onLoadAnimation2">
            <m.div
              initial={{ y: "-0%", x: "0%", opacity: 0.3 }}
              animate={{ y: "-200%", x: "-10%", opacity: 0 }}
              transition={{ delay: 3.25, duration: 0.5 }}
              className="w-40 flex justify-evenly gap-2 overflow-hidden"
            >
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
              <div>connection</div>
            </m.div>
          </div>
        </div>
      </m.div>
    </div>
  );
};

export default AnimationOnLoad;
