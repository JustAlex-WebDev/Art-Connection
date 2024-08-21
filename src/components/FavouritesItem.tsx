import React from "react";
import { BsTrash } from "react-icons/bs";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { Link } from "react-router-dom";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";
import { PaintingProps } from "./ItemSearch";

// Define the props interface
interface FavouritesItemProps {
  item: PaintingProps;
  removeItemFavouritesSection: (id: number) => void;
  addItemShoppingCart: (item: PaintingProps) => void;
  removeItemShoppingCart: (id: number) => void;
  isInShoppingCart: boolean;
}

const FavouritesItem: React.FC<FavouritesItemProps> = ({
  item,
  removeItemFavouritesSection,
  addItemShoppingCart,
  removeItemShoppingCart,
  isInShoppingCart,
}) => {
  const { scrollToTopFunction } = useScrollToTopFunction();

  return (
    <div className="group my-8 flex flex-col xxxsm:flex-row justify-center items-center gap-4 xxxsm:gap-8">
      <Link to={"/" + item.id} onClick={scrollToTopFunction}>
        <img
          className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer duration-300"
          src={item.img}
          alt={item.name}
        />
      </Link>
      <div className="flex flex-col justify-between font-semibold text-base xxxsm:text-lg text-primary w-full xxxsm:w-44 h-[7.5rem] xxxsm:h-[13rem] duration-300">
        <div>
          <h3>{item.name}</h3>
          <h3 className="opacity-60">{item.author}</h3>
          <h3>{item.price.toLocaleString()} USD</h3>
        </div>
        <div className="flex gap-4 items-center">
          {isInShoppingCart ? (
            <FaShoppingCart
              onClick={() => removeItemShoppingCart(item.id)}
              size={20}
              className="cursor-pointer hover:opacity-50"
              title="Remove from cart"
            />
          ) : (
            <FiShoppingCart
              onClick={() => addItemShoppingCart(item)}
              size={20}
              className="cursor-pointer hover:opacity-50"
              title="Add to cart"
            />
          )}

          <BsTrash
            onClick={() => removeItemFavouritesSection(item.id)}
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Delete from favourites"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
