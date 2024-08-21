import React, {
  ReactNode,
  createContext,
  useContext,
  useEffect,
  useState,
} from "react";

// Define the context type
interface ScrollToTopContextType {
  scrollToTopFunction: () => void;
  showScrollToTop: boolean;
}

// Create the context with the defined type
export const ScrollToTopContext = createContext<
  ScrollToTopContextType | undefined
>(undefined);

interface ScrollToTopContextProviderProps {
  children: ReactNode;
}

// Custom hook for scroll-to-top logic
const useScrollToTop = () => {
  const [showScrollToTop, setShowScrollToTop] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setShowScrollToTop(window.scrollY >= 40);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTopFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return { showScrollToTop, scrollToTopFunction };
};

const ScrollToTopContextProvider = ({
  children,
}: ScrollToTopContextProviderProps) => {
  const { showScrollToTop, scrollToTopFunction } = useScrollToTop();

  return (
    <ScrollToTopContext.Provider
      value={{
        scrollToTopFunction,
        showScrollToTop,
      }}
    >
      {children}
    </ScrollToTopContext.Provider>
  );
};

// Custom hook to use the ScrollToTopContext
export const useScrollToTopFunction = () => {
  const context = useContext(ScrollToTopContext);
  if (!context) {
    throw new Error(
      "useScrollToTopFunction must be used within a ScrollToTopContextProvider"
    );
  }
  return context;
};

export default ScrollToTopContextProvider;
