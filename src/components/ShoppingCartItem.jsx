import React from "react";
import {
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";

const FavouritesItem = () => {
  return (
    <div className="py-8 inline-flex m-auto gap-4 relative ">
      <img
        className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-xl bg-secondary"
        src="/images/image1.jpg"
        alt="gei"
      />
      <div className="flex flex-col px-4 font-semibold text-lg w-[13rem] md:w-[14.5rem] lg:w-[17rem] h-[7.5rem] text-primary">
        <h3>The price of Love</h3>
        <h3 className="opacity-60">Christopher Wool</h3>
        <h3 className="mb-10">1,500 USD</h3>
        <div className="inline-flex gap-4 mb-8 items-center">
          <AiOutlineMinusCircle size={20} className="hover:opacity-50" />
          <h3>2</h3>
          <AiOutlinePlusCircle size={20} className="hover:opacity-50" />
        </div>
        <div className="inline-flex gap-4 items-center">
          <AiOutlineHeart
            size={22}
            className="cursor-pointer hover:opacity-50"
            title="Add to favourites"
          />
          <BsTrash
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Delete from shopping cart"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
