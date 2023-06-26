import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { Link, Navigate } from "react-router-dom";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";
import { UserAuth } from "../context/AuthContext";
import { motion as m } from "framer-motion";
import Footer from "../components/Footer";

const Account = () => {
  const { user, logOut } = UserAuth();

  if (user) {
    return (
      <>
        <PageTransition />
        <Navbar />
        <Slides />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
          className="main-div mb-40 mt-28"
        >
          <div className="flex flex-col justify-center items-center my-12 py-8 main-div">
            <div className="flex flex-col justify-center items-center gap-2">
              <h1 className="text-2xl font-bold text-primary duration-300">
                Account
              </h1>
              <div className="text-primary duration-300">
                <p>Welcome, {user?.email}</p>
              </div>
            </div>
            <div className="flex flex-col">
              <Link
                to="/favourites"
                className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center duration-300"
              >
                <AiOutlineHeart size={20} />
              </Link>
              <Link
                to="/shoppingcart"
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
