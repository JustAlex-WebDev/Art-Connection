import { User } from "firebase/auth";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";
import { PaintingProps } from "./ItemSearch";
import ThemeToggle from "./ThemeToggle";

interface MobileMenuProps {
  nav: boolean;
  setNav: (value: boolean) => void;
  favouritesSection: PaintingProps[];
  user: User | null;
  totalItemsShoppingCart: number;
  logOut: () => Promise<void>;
}

const MobileMenu: React.FC<MobileMenuProps> = ({
  nav,
  setNav,
  favouritesSection,
  user,
  totalItemsShoppingCart,
  logOut,
}) => {
  const { scrollToTopFunction } = useScrollToTopFunction();

  return (
    <div
      onClick={() => setNav(false)}
      className={
        nav
          ? "mobile-menu md:hidden fixed right-0 top-0 w-full z-40"
          : "mobile-menu md:hidden fixed right-[-100%] top-0 w-full z-40"
      }
    >
      <div
        onClick={(e) => e.stopPropagation()}
        className={
          nav
            ? "md:hidden fixed right-0 top-0 flex flex-col items-center justify-between w-full xxsm:w-[50%] h-screen pt-12 bg-secondary shadow-xl z-50 text-lg transition-all ease-in-out duration-300 border-l"
            : "fixed w-full xxsm:w-[50%] right-[-100%] 0 h-screen pt-12 flex flex-col items-center justify-between transition-all ease-in-out duration-300"
        }
      >
        <ul className="p-4 w-full">
          <li className="border-b py-6 flex justify-center overflow-hidden">
            <Link
              to="/"
              onClick={scrollToTopFunction}
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
              onClick={scrollToTopFunction}
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
              onClick={scrollToTopFunction}
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
              onClick={scrollToTopFunction}
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
              onClick={scrollToTopFunction}
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
              onClick={scrollToTopFunction}
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
