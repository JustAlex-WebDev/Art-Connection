import GlobalStyles from "./Components/Styles/Global";
import Header from "./Components/Header";
import ScrollToTop from "./Components/ScrollToTop";
import { useState, useEffect } from "react";

function App() {
  // Setting up the on scroll animation of the header
  const [headerBackground, setHeaderBackground] = useState(false);

  // Header-Background styles on scroll
  const scrollHeader = () => {
    if (window.scrollY >= 15) {
      setHeaderBackground(true);
    } else {
      setHeaderBackground(false);
    }
  };

  window.addEventListener("scroll", scrollHeader);

  // Scroll To Top Btn
  const scollToTopBtn = () => {
    if (window.scrollY >= 40) {
      setScrollToTopBtn(true);
    } else {
      setScrollToTopBtn(false);
    }
  };

  window.addEventListener("scroll", scollToTopBtn);

  // Scroll To Top
  const scollToTop = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <>
      <GlobalStyles />
      <Header headerBackground={headerBackground} />
      <ScrollToTop scrollToTopBtn={scrollToTopBtn} onScollToTop={scollToTop} />
    </>
  );
}

export default App;
