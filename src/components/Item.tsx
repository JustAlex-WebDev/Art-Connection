import React from "react";
import { AiFillHeart, AiOutlineHeart } from "react-icons/ai";
import { FaShoppingCart } from "react-icons/fa";
import { FiShoppingCart } from "react-icons/fi";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useScrollToTopFunction } from "../context/ScrollToTopContext";
import { PaintingProps } from "./ItemSearch";

export interface ItemProps {
  item: PaintingProps;
  isInFavouritesSection: boolean;
  addItemFavouritesSection: (item: PaintingProps) => void;
  removeItemFavouritesSection: (id: number) => void;
  isInShoppingCart: boolean;
  addItemShoppingCart: (item: PaintingProps) => void;
  removeItemShoppingCart: (id: number) => void;
}

const Item: React.FC<ItemProps> = ({
  item,
  isInFavouritesSection,
  addItemFavouritesSection,
  removeItemFavouritesSection,
  isInShoppingCart,
  addItemShoppingCart,
  removeItemShoppingCart,
}) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const { user } = UserAuth();
  const { scrollToTopFunction } = useScrollToTopFunction();

  return (
    <article
      ref={myRef}
      key={item.id}
      className={`${
        myElementIsVisible
          ? "grid items-center justify-center animate-animateOp"
          : "grid items-center justify-center"
      }`}
    >
      <div className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] h-[13rem] hover:z-20">
        <div className="overflow-hidden group w-full">
          <Link to={"/" + item.id} onClick={scrollToTopFunction}>
            <img
              src={item.img}
              alt={item.name}
              loading="lazy"
              className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer duration-300"
            />
          </Link>
          <div className="flex flex-col gap-4 items-center group-hover:translate-y-0 translate-y-[200%] bg-primary w-full mt-4 h-28 duration-300 ease-in-out text-primary">
            {user?.email ? (
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500">
                {isInShoppingCart ? (
                  <div
                    onClick={() => removeItemShoppingCart(item.id)}
                    title="Remove from cart"
                    className="flex md:flex-row md:gap-4 gap-2 flex-col justify-center items-center cursor-pointer hover:opacity-50 text-center"
                  >
                    <FaShoppingCart
                      size={22}
                      className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500"
                    />
                    <div>Remove from cart</div>
                  </div>
                ) : (
                  <div
                    onClick={() => addItemShoppingCart(item)}
                    title="Add to cart"
                    className="flex gap-4 justify-center items-center cursor-pointer hover:opacity-50"
                  >
                    <FiShoppingCart
                      size={22}
                      className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500"
                    />
                    <div>Add to cart</div>
                  </div>
                )}
              </div>
            ) : (
              <div className="flex gap-4 opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500">
                <div
                  onClick={() => addItemShoppingCart(item)}
                  title="Add to cart"
                  className="flex gap-4 justify-center items-center cursor-pointer hover:opacity-50"
                >
                  <FiShoppingCart
                    size={22}
                    className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500"
                  />
                  <div>Add to cart</div>
                </div>
              </div>
            )}
            <div className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-700">
              <Link to={"/" + item.id} onClick={scrollToTopFunction}>
                <div className="hover:opacity-50 cursor-pointer">
                  Learn more
                </div>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-8 py-4 w-[10rem] md:w-[11.5rem] lg:w-[13rem] h-32 z-10 bg-primary text-primary duration-300">
        <div className="w-[80%]">
          <h3>{item.name}</h3>
          <h3 className="opacity-60">{item.author}</h3>
          <h3 className="pt-4">{item.price.toLocaleString()} USD</h3>
        </div>
        {user?.email ? (
          <div>
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
          </div>
        ) : (
          <div>
            <AiOutlineHeart
              onClick={() => addItemFavouritesSection(item)}
              title="Save to favourites"
              size={24}
              className="cursor-pointer"
            />
          </div>
        )}
      </div>
    </article>
  );
};

export default Item;
