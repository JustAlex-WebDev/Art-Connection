import GlobalStyles from "./Components/Styles/Global";
import Header from "./Components/Header";
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

  return (
    <>
      <GlobalStyles />
      <Header headerBackground={headerBackground} />
    </>
  );
}

export default App;
