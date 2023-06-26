import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({
  nav,
  setNav,
  favouritesSection,
  user,
  totalItemsShoppingCart,
  logOut,
}) => {
  return (
    <div
      onClick={() => setNav(false)}
      className={
        nav
          ? "md:hidden fixed right-0 top-0 w-full h-[100vh] h-[100svh] z-50"
          : "md:hidden fixed right-[-100%] top-0 w-full h-[100vh] h-[100svh] z-50"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          nav
            ? "md:hidden fixed right-0 top-[9.5vh] flex flex-col items-center justify-between w-full xxsm:w-[50%] h-[90.5vh] h-[90.5svh] bg-secondary shadow-xl z-50 text-lg transition-all ease-in-out duration-300 border-l"
            : "fixed w-full xxsm:w-[50%] right-[-100%] top-[9.5vh] h-[90.5vh] h-[90.5svh] flex flex-col items-center justify-between transition-all ease-in-out duration-300"
        }
      >
        <ul className="p-4 w-full">
          <li className="border-b py-6 flex justify-center overflow-hidden">
            <Link
              to="/"
              className={nav ? "translatey-y-0" : "translate-y-[200%]"}
            >
              <div onClick={() => setNav(!nav)} className="hover:opacity-50">
                Home
              </div>
            </Link>
          </li>
          <li className="border-b py-6 flex justify-center overflow-hidden">
            <Link
              to="/account"
              className={nav ? "translate-y-0" : "translate-y-[200%]"}
            >
              <div onClick={() => setNav(!nav)} className="hover:opacity-50">
                Account
              </div>
            </Link>
          </li>
          <li className="border-b py-6 flex justify-center overflow-hidden">
            <Link
              to="/favourites"
              className={nav ? "translate-y-0" : "translate-y-[200%]"}
            >
              <div onClick={() => setNav(!nav)} className="hover:opacity-50">
                {user ? (
                  <span className="absolute pl-7 -top-2">
                    {favouritesSection?.length}
                  </span>
                ) : null}
                <AiOutlineHeart title="Favourites" size={25} />
              </div>
            </Link>
          </li>
          <li className="border-b py-6 flex justify-center overflow-hidden">
            <Link
              to="/shoppingcart"
              className={nav ? "translate-y-0" : "translate-y-[200%]"}
            >
              <div onClick={() => setNav(!nav)} className="hover:opacity-50">
                {user ? (
                  <span className="absolute pl-8 -top-2">
                    {totalItemsShoppingCart}
                  </span>
                ) : null}
                <FiShoppingCart title="Shopping Cart" size={25} />
              </div>
            </Link>
          </li>
          <li className="py-6 flex justify-center overflow-hidden">
            <div className={nav ? "translate-y-0" : "translate-y-[200%]"}>
              <ThemeToggle />
            </div>
          </li>
        </ul>
        {user?.email ? (
          <div
            className={
              nav
                ? "flex flex-col w-full p-4 opacity-100 ease-in-out"
                : "flex flex-col w-full p-4 opacity-0 ease-in-out"
            }
          >
            <button
              onClick={logOut}
              className="w-full my-2 p-3 bg-button text-button rounded-2xl shadow-md hover:opacity-50"
            >
              Sign Out
            </button>
          </div>
        ) : (
          <div className="flex flex-col w-full p-4">
            <Link
              to="/signin"
              className={
                nav ? "opacity-100 ease-in-out" : "opacity-0 ease-in-out"
              }
            >
              <button
                onClick={() => setNav(!nav)}
                className="w-full my-2 p-3 border rounded-2xl shadow-md hover:opacity-50"
              >
                Sign In
              </button>
            </Link>
            <Link
              to="/signup"
              className={
                nav ? "opacity-100 ease-in-out" : "opacity-0 ease-in-out"
              }
            >
              <button
                onClick={() => setNav(!nav)}
                className="w-full my-2 p-3 bg-button text-button rounded-2xl shadow-md hover:opacity-50"
              >
                Sign Up
              </button>
            </Link>
          </div>
        )}
      </div>
    </div>
  );
};

export default MobileMenu;
