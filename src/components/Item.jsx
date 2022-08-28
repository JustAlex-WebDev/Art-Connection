import React from "react";
import { AiOutlineHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";

const Item = ({ item }) => {
  return (
    <article
      key={item.id}
      className="grid justify-center items-center gap-x-4 gap-y-4"
    >
      <div className="image relative w-[10rem] md:w-[11.5rem] lg:w-[13rem]">
        <img
          src={item.img}
          alt="painting"
          className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-xl bg-secondary"
        />
        <div className="overlay absolute hidden justify-center items-center w-[10rem] md:w-[11.5rem] lg:w-[13rem] h-[13rem] top-0 hover:backdrop-brightness-75 hover:backdrop-blur-sm ease-in-out duration-100">
          <button className="bg-primary text-primary px-2 md:px-8 py-2 mx-2 rounded-2xl shadow-lg hover:scale-105 duration-100 ease-in-out">
            <div className="flex gap-3 font-bold md:text-lg">
              <FiShoppingCart size={22} />
              <span>Add to cart</span>
            </div>
          </button>
        </div>
      </div>
      <div className="flex w-[7rem] md:w-[10rem] lg:w-[13rem] justify-start flex-col relative text-primary">
        <h3>{item.name}</h3>
        <h3 className="opacity-60">{item.author}</h3>
        <h3 className="pt-4">{item.price.toLocaleString()} USD</h3>
        <div className="flex text-primary justify-end ml-32 md:ml-36 lg:ml-40 absolute">
          <AiOutlineHeart size={25} className="cursor-pointer" />
        </div>
      </div>
    </article>
  );
};

export default Item;
