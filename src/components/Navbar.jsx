import React, { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMenu, AiOutlineClose, AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import ThemeToggle from "./ThemeToggle";
import { UserAuth } from "../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../firebase";
import { useRef } from "react";

const Navbar = ({ navbarShadow }) => {
  let totalItemsShoppingCart = 0;
  const [itemsShoppingCart, setItemsShoppingCart] = useState([]);
  const [itemsFavourites, setItemsFavourites] = useState([]);
  const [nav, setNav] = useState(false);
  const navRef = useRef();
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
      navigate("/");
    } catch (e) {
      console.log(e.message);
    }
  };

  useEffect(() => {
    const handleNav = (e) => {
      console.log(e);
      if (e.path[1] !== navRef.current) {
        setNav(false);
      }
    };

    document.body.addEventListener("click", handleNav);

    return () => document.body.removeEventListener("click", handleNav);
  }, []);

  return (
    <div
      className={
        navbarShadow
          ? "bg-secondary w-full shadow-md fixed top-0 z-50"
          : "bg-secondary w-full shadow-sm fixed top-0 z-50"
      }
    >
      <div className="main-div flex items-center justify-between h-20 font-bold text-primary">
        <Link to="/">
          <h1 className="text-xl hover:opacity-50">Art Connection</h1>
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
              <AiOutlineHeart size={25} />
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
              <FiShoppingCart size={25} />
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
              <AiOutlineHeart size={25} />
            </Link>
            <Link
              to="/shoppingcart"
              className="p-4 hover:opacity-50 duration-100 ease-in-out"
            >
              <FiShoppingCart size={25} />
            </Link>
          </div>
        )}

        {/* Menu Icon */}
        <button
          ref={navRef}
          onClick={() => setNav(!nav)}
          className="block md:hidden cursor-pointer z-10 hover:opacity-50"
        >
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </button>
        {/* Mobile Menu */}
        <div
          className={
            nav
              ? "md:hidden fixed right-0 top-[5.2rem] flex flex-col items-center justify-between w-[50%] h-[91.8%] bg-secondary shadow-xl z-50 text-lg"
              : "fixed right-[-100%] top-20 h-[90%] flex flex-col items-center justify-between ease-in-out duration-300"
          }
        >
          <ul className="p-4 w-full">
            <li
              onClick={() => setNav(!nav)}
              className="border-b py-6 flex justify-center"
            >
              <Link to="/" className="hover:opacity-50">
                Home
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="border-b py-6 flex justify-center"
            >
              <Link to="/account" className="hover:opacity-50">
                Account
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="border-b py-6 flex justify-center"
            >
              <Link to="/favourites" className="hover:opacity-50">
                <span className="absolute pl-7 top-44">
                  {itemsFavourites?.length}
                </span>
                <AiOutlineHeart size={25} />
              </Link>
            </li>
            <li
              onClick={() => setNav(!nav)}
              className="border-b py-6 flex justify-center"
            >
              <Link to="/shoppingcart" className="hover:opacity-50">
                {user ? (
                  <span className="absolute pl-8 top-64">
                    {totalItemsShoppingCart}
                  </span>
                ) : null}
                <FiShoppingCart size={25} />
              </Link>
            </li>
            <li className="py-6 flex justify-center">
              <ThemeToggle />
            </li>
          </ul>
          {user?.email ? (
            <div className="flex flex-col w-full p-4">
              <button
                onClick={() => setNav(!nav)}
                className="w-full my-2 p-3 bg-button text-button rounded-2xl shadow-md hover:opacity-50"
              >
                Sign Out
              </button>
            </div>
          ) : (
            <div className="flex flex-col w-full p-4">
              <Link to="/signin" className="hover:opacity-50">
                <button
                  onClick={() => setNav(!nav)}
                  className="w-full my-2 p-3 border rounded-2xl shadow-md"
                >
                  Sign In
                </button>
              </Link>
              <Link to="/signup" className="hover:opacity-50">
                <button
                  onClick={() => setNav(!nav)}
                  className="w-full my-2 p-3 bg-button text-button rounded-2xl shadow-md"
                >
                  Sign Up
                </button>
              </Link>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default Navbar;
