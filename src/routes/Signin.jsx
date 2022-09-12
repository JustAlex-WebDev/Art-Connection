import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";
import { signIn, UserAuth } from "../context/AuthContext";

const Signin = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();
  const { signIn } = UserAuth();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setError("");
    try {
      await signIn(email, password);
      navigate("/account");
    } catch (e) {
      setError(e.message);
      console.log(e.message);
    }
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-36">
        <h1 className="text-2xl font-bold text-primary">Sign In</h1>
        <form onSubmit={handleSubmit}>
          <div className="my-4">
            <label className="text-primary">Email</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setEmail(e.target.value)}
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="email"
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label className="text-primary">Password</label>
            <div className="my-2 w-full relative rounded-2xl shadow-xl">
              <input
                onChange={(e) => setPassword(e.target.value)}
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="password"
              />
              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <button className="w-full my-2 p-3 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold">
            Sign In
          </button>
        </form>
        <p className="my-4 text-center text-primary">
          Don't have an account?<span> </span>
          <Link className="hover:opacity-50 font-bold" to="/signup">
            Sign Up
          </Link>
        </p>
      </div>
    </div>
  );
};

export default Signin;
