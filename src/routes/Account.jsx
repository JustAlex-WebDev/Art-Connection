import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Account = () => {
  return (
    <div className="max-w-[1140px] mx-auto mb-4 mt-28">
      <div className="flex flex-col justify-center items-center my-12 py-8 main-div">
        <div className="flex flex-col justify-center items-center gap-2">
          <h1 className="text-2xl font-bold text-primary">Account</h1>
          <div className="text-primary">
            <p>Welcome, user</p>
          </div>
        </div>
        <div className="flex flex-col">
          <button className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center">
            <AiOutlineHeart size={20} />
          </button>
          <button className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold flex justify-center items-center">
            <FiShoppingCart size={20} />
          </button>
          <button className="px-6 py-2 mt-4 bg-button text-button hover:opacity-50 rounded-2xl shadow-xl font-bold">
            Sign Out
          </button>
        </div>
      </div>
    </div>
  );
};

export default Account;
