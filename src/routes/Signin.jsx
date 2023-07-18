import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { UserAuth } from "../context/AuthContext";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";
import Footer from "../components/Footer";
import { motion as m } from "framer-motion";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn, setSignedUp } = UserAuth();
  const { scrollToTopFunction } = useScrollToTopFunction();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      setSignedUp(true);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.75, duration: 0.75 }}
      >
        <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-36">
          <h1 className="text-2xl font-bold text-primary duration-300">
            Sign In
          </h1>
          <form onSubmit={handleSubmit}>
            <div className="my-4">
              <label
                htmlFor="email"
                className="text-primary cursor-pointer duration-300"
              >
                Email
              </label>
              <div className="my-2 w-full relative rounded-2xl shadow-xl">
                <input
                  onChange={(e) => setEmail(e.target.value)}
                  className="w-full p-2 border rounded-2xl bg-primary text-primary duration-300"
                  id="email"
                  type="email"
                />
                <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
              </div>
            </div>
            <div className="my-4">
              <label
                htmlFor="password"
                className="text-primary cursor-pointer duration-300"
              >
                Password
              </label>
              <div className="my-2 w-full relative rounded-2xl shadow-xl">
                <input
                  onChange={(e) => setPassword(e.target.value)}
                  className="w-full p-2 border rounded-2xl bg-primary text-primary duration-300"
                  id="password"
                  type="password"
                />
                <AiFillLock className="absolute right-2 top-3 text-gray-400" />
              </div>
            </div>
            <button className="w-full my-2 p-3 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold duration-300">
              Sign In
            </button>
          </form>
          <p className="my-4 text-center text-primary duration-300">
            Don't have an account?<span> </span>
            <Link
              className="hover:opacity-50 font-bold"
              to="/signup"
              onClick={scrollToTopFunction}
            >
              Sign Up
            </Link>
          </p>
        </div>
      </m.div>
      <Footer />
    </>
  );
};

export default Signin;
