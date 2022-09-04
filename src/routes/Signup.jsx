import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

const Signup = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-36">
        <h1 className="text-2xl font-bold text-primary">Sign Up</h1>
        <form>
          <div className="my-4">
            <label className="text-primary">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label className="text-primary">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 bg-primary border border-input rounded-2xl"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold">
            Sign Up
          </button>
        </form>
        <p className="my-4 text-center text-primary">
          Already have an account?<span> </span>
          <Link className="hover:opacity-50 font-bold" to="/signin">
            Sign In
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signup;
