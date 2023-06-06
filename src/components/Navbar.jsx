import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import MobileMenu from "./MobileMenu";

const Navbar = ({ navbarShadow, setSignedUp }) => {
  let totalItemsShoppingCart = 0;
  const [itemsShoppingCart, setItemsShoppingCart] = useState([]);
  const [itemsFavourites, setItemsFavourites] = useState([]);
  const [nav, setNav] = useState(false);
  const { user, logOut } = UserAuth();
  const navigate = useNavigate();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setItemsShoppingCart(doc.data()?.shoppingCart);
    });
  }, [user?.email]);

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setItemsFavourites(doc.data()?.favourites);
    });
  }, [user?.email]);

  const handleSignOut = async (e) => {
    try {
      await logOut();
      setSignedUp(false);
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div
      className={`bg-secondary w-full fixed top-0 z-50 duration-300 ${
        navbarShadow ? "shadow-md" : "shadow-sm"
      }`}
    >
      <div className="main-div flex items-center justify-between h-20 font-bold text-primary">
        <Link to="/">
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
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              Account
            </Link>
            <button
              onClick={handleSignOut}
              className="bg-button text-button px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
            >
              Sign Out
            </button>
            <Link
              to="/favourites"
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <span className="absolute pt-5 pl-7 top-0">
                {itemsFavourites?.length}
              </span>
              <AiOutlineHeart title="Favourites" size={25} />
            </Link>
            <Link
              to="/shoppingcart"
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <span className="absolute pt-5 pl-8 top-0">
                {itemsShoppingCart?.forEach(
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
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              Sign In
            </Link>
            <Link
              to="/signup"
              className="bg-button text-button px-5 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
            >
              Sign Up
            </Link>
            <Link
              to="/favourites"
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <AiOutlineHeart title="Favourites" size={25} />
            </Link>
            <Link
              to="/shoppingcart"
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
          className="block md:hidden cursor-pointer z-10 hover:opacity-50"
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
          itemsFavourites={itemsFavourites}
          user={user}
          totalItemsShoppingCart={totalItemsShoppingCart}
          handleSignOut={handleSignOut}
        />
      </div>
    </div>
  );
};

export default Navbar;
