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
import Navbar from "./components/Navbar";
import ScrollToTop from "./components/ScrollToTop";
import Footer from "./components/Footer";
import AnimationOnLoad from "./components/AnimationOnLoad";
import Slides from "./components/Slides";
import { paintings } from "./data";
import { ThemeProvider } from "./context/ThemeContext";
import { AuthContextProvider } from "./context/AuthContext";
import FavouritesContextProvider from "./context/FavouritesContext";
import ShoppingCartContextProvider from "./context/ShoppingCartContext";

function App() {
  const [items, setItems] = useState(paintings);
  const [scrollToTop, setScrollToTop] = useState(false);
  const [loading, setLoading] = useState(false);
  const location = useLocation();
  const [signedUp, setSignedUp] = useState(false);

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
                <Navbar setSignedUp={setSignedUp} />
                <ScrollToTop
                  scrollToTopIndicator={scrollToTop}
                  scrollToTopFunction={scrollToTopFunction}
                />
                <Slides />
                <AnimatePresence>
                  <Routes location={location} key={location.pathName}>
                    <Route path="/" element={<Home items={items} />} />
                    <Route path="/favourites" element={<Favourites />} />
                    <Route path="/shoppingcart" element={<ShoppingCart />} />
                    <Route
                      path="/signin"
                      element={<Signin setSignedUp={setSignedUp} />}
                    />
                    <Route
                      path="/signup"
                      element={<Signup setSignedUp={setSignedUp} />}
                    />
                    <Route
                      path="/account"
                      element={
                        <Account
                          signedUp={signedUp}
                          setSignedUp={setSignedUp}
                        />
                      }
                    />
                    <Route path="/checkout" element={<Checkout />} />
                  </Routes>
                </AnimatePresence>
                <Footer />
              </>
            )}
          </ShoppingCartContextProvider>
        </FavouritesContextProvider>
      </AuthContextProvider>
    </ThemeProvider>
  );
}

export default App;
