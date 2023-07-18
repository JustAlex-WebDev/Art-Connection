import React, { useState, useContext } from "react";
import { Link } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { UserAuth } from "../context/AuthContext";
import MobileMenu from "./MobileMenu";
import { useFavouritesSection } from "../context/FavouritesContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { motion as m } from "framer-motion";
import { ThemeContext } from "../context/ThemeContext";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";

const Navbar = () => {
  let totalItemsShoppingCart = 0;
  const { favouritesSection } = useFavouritesSection();
  const { shoppingCart } = useShoppingCart();
  const [nav, setNav] = useState(false);
  const [navbarShadow, setNavbarShadow] = useState(false);
  const { theme, setTheme } = useContext(ThemeContext);
  const { user, logOut } = UserAuth();
  const { scrollToTopFunction } = useScrollToTopFunction();

  // Navbar Shadow on scroll
  const scrollNavbarShadow = () => {
    if (window.scrollY >= 15) {
      setNavbarShadow(true);
    } else {
      setNavbarShadow(false);
    }
  };
  window.addEventListener("scroll", scrollNavbarShadow);

  return (
    <m.div
      initial={{ y: "-100%" }}
      animate={{ y: "0" }}
      transition={{ duration: 1, delay: 1 }}
      className={`bg-secondary w-full fixed top-0 z-50 duration-300 ${
        navbarShadow ? "shadow-md" : "shadow-sm"
      } ${theme === "dark" ? "shadow-white" : null}`}
    >
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.25, duration: 0.5 }}
        className="main-div flex items-center justify-between h-20 font-bold text-primary"
      >
        <Link to="/" onClick={scrollToTopFunction}>
          <h1 title="Home" className="text-xl hover:opacity-50">
            Art Connection
          </h1>
        </Link>
        <div className="hidden md:block">
          <ThemeToggle />
        </div>
        {user?.email ? (
          <div className="hidden md:flex items-center">
            <Link
              to="/account"
              onClick={scrollToTopFunction}
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              Account
            </Link>
            <button
              onClick={logOut}
              className="bg-button text-button px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
            >
              Sign Out
            </button>
            <Link
              to="/favourites"
              onClick={scrollToTopFunction}
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <span className="absolute pt-5 pl-7 top-0">
                {favouritesSection?.length}
              </span>
              <AiOutlineHeart title="Favourites" size={25} />
            </Link>
            <Link
              to="/shoppingcart"
              onClick={scrollToTopFunction}
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <span className="absolute pt-5 pl-8 top-0">
                {shoppingCart?.forEach(
                  (item) => (totalItemsShoppingCart += item.numberOfUnits),
                  0
                )}
                {totalItemsShoppingCart}
              </span>
              <FiShoppingCart title="Shopping Cart" size={25} />
            </Link>
          </div>
        ) : (
          <div className="hidden md:flex items-center">
            <Link
              to="/signin"
              onClick={scrollToTopFunction}
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              onClick={scrollToTopFunction}
              className="bg-button text-button px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
            >
              Sign Up
            </Link>
            <Link
              to="/favourites"
              onClick={scrollToTopFunction}
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <AiOutlineHeart title="Favourites" size={25} />
            </Link>
            <Link
              to="/shoppingcart"
              onClick={scrollToTopFunction}
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <FiShoppingCart title="Shopping Cart" size={25} />
            </Link>
          </div>
        )}

        {/*Mobile Menu */}

        {/* Icon */}
        <button
          onClick={() => setNav(!nav)}
          className="block md:hidden cursor-pointer z-50 hover:opacity-50"
        >
          {nav ? (
            <AiOutlineClose title="Close Menu" size={20} />
          ) : (
            <AiOutlineMenu title="Open Menu" size={20} />
          )}
        </button>

        {/* Menu */}
        <MobileMenu
          nav={nav}
          setNav={setNav}
          favouritesSection={favouritesSection}
          user={user}
          totalItemsShoppingCart={totalItemsShoppingCart}
          logOut={logOut}
        />
      </m.div>
    </m.div>
  );
};

export default Navbar;
