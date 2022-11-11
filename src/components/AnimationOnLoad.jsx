import React, { useContext } from "react";
import { ThreeDots } from "react-loader-spinner";
import { ThemeContext } from "../context/ThemeContext";

const AnimationOnLoad = () => {
  const { theme } = useContext(ThemeContext);

  return (
    <div className="w-full h-[100vh] bg-primary">
      <div className="animate-animateOp2 text-primary flex flex-col text-center gap-2 justify-center items-center font-bold h-[100vh]">
        <span className="text-4xl">Art</span>
        <span className="text-4xl">Connection</span>
        {theme === "dark" ? (
          <ThreeDots
            height="60"
            width="60"
            radius="6"
            color="#fff"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        ) : (
          <ThreeDots
            height="60"
            width="60"
            radius="6"
            color="#161616"
            ariaLabel="three-dots-loading"
            wrapperStyle={{}}
            wrapperClassName=""
            visible={true}
          />
        )}
      </div>
    </div>
  );
};

export default AnimationOnLoad;
