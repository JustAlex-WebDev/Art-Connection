import GlobalStyles from "./Components/Styles/Global";
import Header from "./Components/Header";
import Menu from "./Components/Menu";
import ScrollToTop from "./Components/ScrollToTop";
import { useState, useEffect } from "react";

function App() {
  // Setting up the menu items array
  const [menu, setMenu] = useState(
    // Items
    [],
    []
  );

  // Setting up the on scroll animation of the header
  const [headerBackground, setHeaderBackground] = useState(false);

  // Fetch Menu
  const fetchMenu = async () => {
    const res = await fetch("http://localhost:5000/menu");
    const data = await res.json();

    return data;
  };

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
      <Menu menu={menu} />
      <ScrollToTop scrollToTopBtn={scrollToTopBtn} onScollToTop={scollToTop} />
    </>
  );
}

export default App;
