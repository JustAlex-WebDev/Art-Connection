import React from "react";
import { motion as m } from "framer-motion";

const PageTransition = () => {
  return (
    <m.div
      initial={{ zIndex: "50" }}
      animate={{ zIndex: "-10", display: "none" }}
      transition={{ duration: 1, delay: 2 }}
      className="absolute top-0 w-full h-full flex justify-between overflow-hidden"
    >
      <m.div className="h-full flex justify-center items-center bg-primary animate-pageTransition">
        <m.div
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-r-2 border-r-zinc-300 w-full"
        ></m.div>
      </m.div>
      <m.div className="h-full  flex justify-center items-center bg-primary animate-pageTransition">
        <m.div
          initial={{ height: "0%" }}
          animate={{ height: "100%" }}
          transition={{ duration: 1, delay: 0.5 }}
          className="border-l-2 border-l-zinc-300 w-full"
        ></m.div>
      </m.div>
    </m.div>
  );
};

export default PageTransition;
