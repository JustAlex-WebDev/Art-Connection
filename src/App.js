import React, { useState, useEffect } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import { AnimatePresence } from "framer-motion";
import Home from "./routes/Home";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";
import Account from "./routes/Account";
import Favourites from "./routes/Favourites";
import ShoppingCart from "./routes/ShoppingCart";
import Checkout from "./routes/Checkout";
import ScrollToTop from "./components/ScrollToTop";
import AnimationOnLoad from "./components/AnimationOnLoad";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthContextProvider } from "./context/AuthContext";
import FavouritesContextProvider from "./context/FavouritesContext";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";
import Painting from "./routes/Painting";

function App() {
  const [scrollToTop, setScrollToTop] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  // Scroll To Top Functions
  const scrollToTopIndicator = () => {
    if (window.scrollY >= 40) {
      setScrollToTop(true);
    } else {
      setScrollToTop(false);
    }
  };
  window.addEventListener("scroll", scrollToTopIndicator);

  const scrollToTopFunction = () => {
    document.documentElement.scrollTop = 0;
  };

  // Animation on Load
  useEffect(() => {
    setLoading(true);
    setTimeout(() => {
      setLoading(false);
    }, 4550);
  }, []);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        <FavouritesContextProvider>
          <ShoppingCartContextProvider>
            {loading ? (
              <AnimationOnLoad />
            ) : (
              <>
                <ScrollToTop
                  scrollToTopIndicator={scrollToTop}
                  scrollToTopFunction={scrollToTopFunction}
                />

                <AnimatePresence initial={false}>
                  <Routes location={location} key={location.pathName}>
                    <Route path="/" element={<Home />} />
                    <Route path="/:id" element={<Painting />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route path="/signin" element={<Signin />} />
                    <Route path="/signup" element={<Signup />} />
                    <Route path="/account" element={<Account />} />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                </AnimatePresence>
              </>
            )}
          </ShoppingCartContextProvider>
        </FavouritesContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
