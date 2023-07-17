import React, { createContext, useContext } from "react";

export const ScrollToTopContext = createContext();

const ScrollToTopContextProvider = (props) => {
  const scrollToTopFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <ScrollToTopContext.Provider
      value={{
        scrollToTopFunction,
      }}
    >
      {props.children}
    </ScrollToTopContext.Provider>
  );
};

export const useScrollToTopFunction = () => useContext(ScrollToTopContext);

export default ScrollToTopContextProvider;
