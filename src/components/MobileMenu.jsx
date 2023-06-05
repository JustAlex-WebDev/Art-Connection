import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";

const MobileMenu = ({
  nav,
  setNav,
  itemsFavourites,
  user,
  totalItemsShoppingCart,
  handleSignOut,
}) => {
  return (
    <div
      className={
        nav
          ? "md:hidden fixed right-0 top-20 flex flex-col items-center justify-between w-full xxsm:w-[50%] h-[91.8vh] h-[91.8svh] bg-secondary shadow-xl z-50 text-lg transition-all ease-in-out duration-500 border-l"
          : "fixed w-full xxsm:w-[50%] right-[-100%] top-20 h-[91.8vh] h-[91.8svh] flex flex-col items-center justify-between transition-all ease-in-out duration-500"
      }
    >
      <ul className="p-4 w-full">
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center overflow-hidden"
        >
          <Link
            to="/"
            className={
              nav
                ? "translate-y-0 transition-all duration-300 delay-300"
                : "translate-y-[200%] transition-all duration-300 delay-300"
            }
          >
            <div className="hover:opacity-50">Home</div>
          </Link>
        </li>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center overflow-hidden"
        >
          <Link
            to="/account"
            className={
              nav
                ? "translate-y-0 transition-all duration-300 delay-[350ms]"
                : "translate-y-[200%] transition-all duration-300 delay-[350ms]"
            }
          >
            <div className="hover:opacity-50">Account</div>
          </Link>
        </li>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center overflow-hidden"
        >
          <Link
            to="/favourites"
            className={
              nav
                ? "translate-y-0 transition-all duration-300 delay-[400ms]"
                : "translate-y-[200%] transition-all duration-300 delay-[400ms]"
            }
          >
            <div className="hover:opacity-50">
              <span className="absolute pl-7 -top-2">
                {itemsFavourites?.length}
              </span>
              <AiOutlineHeart title="Favourites" size={25} />
            </div>
          </Link>
        </li>
        <li
          onClick={() => setNav(!nav)}
          className="border-b py-6 flex justify-center overflow-hidden"
        >
          <Link
            to="/shoppingcart"
            className={
              nav
                ? "translate-y-0 transition-all duration-300 delay-[450ms]"
                : "translate-y-[200%] transition-all duration-300 delay-[450ms]"
            }
          >
            <div className="hover:opacity-50">
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
          <div
            className={
              nav
                ? "translate-y-0 transition-all duration-300 delay-[500ms]"
                : "translate-y-[200%] transition-all duration-300 delay-[500ms]"
            }
          >
            <ThemeToggle />
          </div>
        </li>
      </ul>
      {user?.email ? (
        <div
          className={
            nav
              ? "flex flex-col w-full p-4 opacity-100 transition-all duration-300 delay-[600ms] ease-in-out"
              : "flex flex-col w-full p-4 opacity-0 transition-all duration-300 delay-[600ms] ease-in-out"
          }
        >
          <button
            onClick={handleSignOut}
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
              nav
                ? "opacity-100 transition-all duration-300 delay-[600ms] ease-in-out"
                : "opacity-0 transition-all duration-300 delay-[600ms] ease-in-out"
            }
          >
            <button
              onClick={() => setNav(!nav)}
              className="w-full my-2 p-3 border rounded-2xl shadow-md hover:opacity-50"
            >
              Sign In
            </button>
          </Link>
          <Link to="/signup">
            <button
              onClick={() => setNav(!nav)}
              className="w-full my-2 p-3 bg-button text-button rounded-2xl shadow-md hover:opacity-50 duration-300 delay-700"
            >
              Sign Up
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default MobileMenu;
