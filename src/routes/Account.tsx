import { motion as m } from "framer-motion";
import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import Footer from "../components/Footer";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";
import { UserAuth } from "../context/AuthContext";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";
import { User } from "firebase/auth";

// Define types for the context values
interface UserAuthContextType {
  user: User | null;
  logOut: () => Promise<void>;
}

interface ScrollToTopContextType {
  scrollToTopFunction: () => void;
}

const Account: React.FC = () => {
  const { user, logOut } = UserAuth() as UserAuthContextType;
  const { scrollToTopFunction } =
    useScrollToTopFunction() as ScrollToTopContextType;

  if (user) {
    return (
      <>
        <PageTransition />
        <Navbar />
        <Slides />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.75, duration: 1 }}
          className="main-div mb-40 mt-28"
        >
          <div className="flex flex-col justify-center items-center my-12 py-8 main-div">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-bold text-primary duration-300">
                Account
              </h1>
              <div className="text-primary duration-300">
                <p>Welcome, {user.email}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                to="/favourites"
                onClick={scrollToTopFunction}
                className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center duration-300"
              >
                <AiOutlineHeart size={20} />
              </Link>
              <Link
                to="/shoppingcart"
                onClick={scrollToTopFunction}
                className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center duration-300"
              >
                <FiShoppingCart size={20} />
              </Link>
              <button
                onClick={logOut}
                className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold duration-300"
              >
                Sign Out
              </button>
            </div>
          </div>
        </m.div>
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Account;
