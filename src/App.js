import React, { useState } from "react";
import Navbar from "./components/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Favourites from "./routes/Favourites";
import ShoppingCart from "./routes/ShoppingCart";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import { paintings } from "./data";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthContextProvider } from "./context/AuthContext";

function App() {
  const [items, setItems] = useState(paintings);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const [scrollToTop, setScrollToTop] = useState(false);

  // Navbar Shadow on scroll
  const scrollNavbarShadow = () => {
    if (window.scrollY >= 15) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
  };
  // console.log(navbarShadow);
  window.addEventListener("scroll", scrollNavbarShadow);

  // Scroll To Top Functions
  const scrollToTopIndicator = () => {
    if (window.scrollY >= 40) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  // console.log(scrollToTop);
  window.addEventListener("scroll", scrollToTopIndicator);

  const scrollToTopFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <Navbar navbarShadow={navbarShadow} />
        <ScrollToTop
          scrollToTopIndicator={scrollToTop}
          scrollToTopFunction={scrollToTopFunction}
        />
        <Routes>
          <Route path="/" element={<Home items={items} />} />
          <Route path="/favourites" element={<Favourites />} />
          <Route path="/shoppingcart" element={<ShoppingCart />} />
          <Route path="/signin" element={<Signin />} />
          <Route path="/signup" element={<Signup />} />
          <Route path="/account" element={<Account />} />
        </Routes>
        <Footer />
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
