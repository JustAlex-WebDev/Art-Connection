import React from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";

const FavouritesItem = () => {
  return (
    <div className="py-8 inline-flex m-auto gap-4 relative ">
      <img
        className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-xl bg-secondary"
        src="/images/image1.jpg"
        alt="gei"
      />
      <div className="flex flex-col px-4 font-semibold text-lg w-[13rem] md:w-[14.5rem] lg:w-[17rem] h-[11rem] ">
        <h3>The price of Love</h3>
        <h3>Christopher Wool</h3>
        <h3 className="mb-24">1,500 USD</h3>
        <div className="inline-flex gap-4">
          <FiShoppingCart size={20} className="cursor-pointer" />
          <BsTrash size={20} className="cursor-pointer" />
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
