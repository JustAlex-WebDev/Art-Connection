import React from "react";
import {
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillHeart,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { Link } from "react-router-dom";

const ShoppingCartItem = ({
  item,
  removeItemShoppingCart,
  numberOfUnitsRemove,
  numberOfUnitsAdd,
  addItemFavouritesSection,
  removeItemFavouritesSection,
  isInFavouritesSection,
}) => {
  return (
    <div className="group my-8 flex flex-col xxxsm:flex-row justify-center items-center gap-4 xxxsm:gap-8">
      <Link to={"/" + item.id}>
        <img
          className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer duration-300"
          src={item.img}
          alt={item.name}
        />
      </Link>
      <div className="flex flex-col justify-between font-semibold text-base xxxsm:text-lg text-primary w-full xxxsm:w-44 h-[10rem] xxxsm:h-[13rem] duration-300">
        <div>
          <h3>{item.name}</h3>
          <h3 className="opacity-60">{item.author}</h3>
          <h3>{item.price.toLocaleString()} USD</h3>
        </div>
        <div className="flex gap-4 items-center">
          <AiOutlineMinusCircle
            title="Decrease"
            onClick={() => numberOfUnitsRemove(item)}
            size={20}
            className="hover:opacity-50 cursor-pointer"
          />
          <h3>{item.numberOfUnits}</h3>
          <AiOutlinePlusCircle
            title="Increase"
            onClick={() => numberOfUnitsAdd(item)}
            size={20}
            className="hover:opacity-50 cursor-pointer"
          />
        </div>
        <div className="flex gap-4 items-center">
          {isInFavouritesSection ? (
            <AiFillHeart
              onClick={() => removeItemFavouritesSection(item.id)}
              title="Remove from favourites"
              size={24}
              className="cursor-pointer"
            />
          ) : (
            <AiOutlineHeart
              onClick={() => addItemFavouritesSection(item)}
              title="Save to favourites"
              size={24}
              className="cursor-pointer"
            />
          )}
          <BsTrash
            onClick={() => removeItemShoppingCart(item.id)}
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Delete from cart"
          />
        </div>
      </div>
    </div>
  );
};

export default ShoppingCartItem;
