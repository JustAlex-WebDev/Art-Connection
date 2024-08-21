import { AnimatePresence } from "framer-motion";
import { useEffect, useState } from "react";
import { Route, Routes, useLocation } from "react-router-dom";
import AnimationOnLoad from "./components/AnimationOnLoad";
import ScrollToTop from "./components/ScrollToTop";
import { ContextProviders } from "./context/ContextProviders";
import { useScrollToTopFunction } from "./context/ScrollToTopContext";
import Account from "./routes/Account";
import Checkout from "./routes/Checkout";
import Favourites from "./routes/Favourites";
import Home from "./routes/Home";
import Painting from "./routes/Painting";
import ShoppingCart from "./routes/ShoppingCart";
import Signin from "./routes/Signin";
import Signup from "./routes/Signup";

function App() {
  const [loading, setLoading] = useState(false);
  const location = useLocation();

  useEffect(() => {
    setLoading(true);
    const timer = setTimeout(() => setLoading(false), 4550);
    return () => clearTimeout(timer);
  }, []);

  return (
    <ContextProviders>
      {loading ? (
        <AnimationOnLoad />
      ) : (
        <>
          <ScrollToTopWrapper />
          <AnimatePresence initial={false}>
            <Routes location={location} key={location.pathname}>
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
    </ContextProviders>
  );
}

// New component to ensure the hook is called after the context provider is rendered
function ScrollToTopWrapper() {
  const { scrollToTopFunction, showScrollToTop } = useScrollToTopFunction();

  return <ScrollToTop scrollToTopIndicator={showScrollToTop} />;
}

export default App;
