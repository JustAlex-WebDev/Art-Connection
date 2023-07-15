import React from "react";
import { motion as m } from "framer-motion";
import { useContext } from "react";
import { ThemeContext } from "../context/ThemeContext";

const IndividualPainting = ({
  item,
  isInFavouritesSection,
  addItemFavouritesSection,
  removeItemFavouritesSection,
  isInShoppingCart,
  addItemShoppingCart,
  removeItemShoppingCart,
}) => {
  const { theme } = useContext(ThemeContext);

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.5, duration: 0.5 }}
      className="main-div my-24 xxsm:mt-8 flex flex-col md:flex-row justify-center"
    >
      {theme === "dark" ? (
        <div className="flex justify-center items-center gap-4 w-full md:w-[25rem] lg:w-[27rem] h-[20rem] xxsm:h-[30rem] md:h-[32rem] lg:h-[35rem]">
          <div className="flex flex-col justify-center items-center gap-4 w-[50%] h-[95%]">
            <img
              loading="lazy"
              src={item.poster2Dark}
              alt={item.poster2Dark}
              className="w-full h-[45%] object-cover rounded-tl-2xl rounded-md shadow-sm hover:opacity-50 duration-300 shadow-white"
            />
            <img
              loading="lazy"
              src={item.poster4Dark}
              alt={item.poster4Dark}
              className="w-full h-[45%] object-cover rounded-bl-2xl rounded-md shadow-sm hover:opacity-50 duration-300 shadow-white"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-[50%] h-[95%]">
            <img
              loading="lazy"
              src={item.poster1Dark}
              alt={item.poster1Dark}
              className="w-full h-[45%] object-cover rounded-tr-2xl rounded-md shadow-sm hover:opacity-50 duration-300 shadow-white"
            />
            <img
              loading="lazy"
              src={item.poster3Dark}
              alt={item.poster3Dark}
              className="w-full h-[45%] object-cover rounded-br-2xl rounded-md shadow-sm hover:opacity-50 duration-300 shadow-white"
            />
          </div>
        </div>
      ) : (
        <div className="flex justify-center items-center gap-4 w-full md:w-[25rem] lg:w-[27rem] h-[20rem] xxsm:h-[30rem] md:h-[32rem] lg:h-[35rem]">
          <div className="flex flex-col justify-center items-center gap-4 w-[50%] h-[95%]">
            <img
              loading="lazy"
              src={item.poster2Light}
              alt={item.poster2Light}
              className="w-full h-[45%] object-cover rounded-tl-2xl rounded-md shadow-md hover:opacity-50 duration-300"
            />
            <img
              loading="lazy"
              src={item.poster4Light}
              alt={item.poster4Light}
              className="w-full h-[45%] object-cover rounded-bl-2xl rounded-md shadow-md hover:opacity-50 duration-300"
            />
          </div>
          <div className="flex flex-col justify-center items-center gap-4 w-[50%] h-[95%]">
            <img
              loading="lazy"
              src={item.poster1Light}
              alt={item.poster1Light}
              className="w-full h-[45%] object-cover rounded-tr-2xl rounded-md shadow-md hover:opacity-50 duration-300"
            />
            <img
              loading="lazy"
              src={item.poster3Light}
              alt={item.poster3Light}
              className="w-full h-[45%] object-cover rounded-br-2xl rounded-md shadow-md hover:opacity-50 duration-300"
            />
          </div>
        </div>
      )}

      <div className="w-[100%] md:w-[50%] pt-8 md:pt-0 pl-0 md:pl-8 lg:pl-16 text-primary overflow-hidden md:h-[30rem] lg:h-[35rem] flex flex-col justify-center gap-4 md:gap-4 lg:gap-8 items-center md:items-start text-center md:text-left">
        <div className="flex flex-col gap-2 md:gap-2 lg:gap-4">
          <div className="text-2xl md:text-3xl lg:text-4xl">{item.name}</div>
          <div className="text-lg md:text-xl lg:text-2xl opacity-60">
            {item.author}
          </div>
        </div>
        <div className="text-lg md:text-xl lg:text-2xl px-8 md:px-0">
          {item.price.toLocaleString()} USD
        </div>
        <div className="text-base px-8 md:px-0 text-justify">
          {item.description}
        </div>
        <div className="px-8 md:px-0 w-full">
          {isInFavouritesSection ? (
            <div
              onClick={() => removeItemFavouritesSection(item.id)}
              className="shadow-md border-[#f2f2f2] border-2 my-4 md:my-2 lg:my-4 p-4 md:p-3 l:p-4 rounded-2xl flex justify-center items-center text-center font-bold w-full cursor-pointer hover:opacity-50"
            >
              Remove from favourites
            </div>
          ) : (
            <div
              onClick={() => addItemFavouritesSection(item)}
              className="shadow-md border-[#f2f2f2] border-2 my-4 md:my-2 lg:my-4 p-4 md:p-3 l:p-4 rounded-2xl flex justify-center items-center text-center font-bold w-full cursor-pointer hover:opacity-50"
            >
              Add to favourites
            </div>
          )}
          {isInShoppingCart ? (
            <div
              onClick={() => removeItemShoppingCart(item.id)}
              className="bg-button text-button my-4 md:my-2 lg:my-4 p-4 md:p-3 l:p-4 rounded-2xl flex justify-center items-center text-center font-bold w-full cursor-pointer hover:opacity-50"
            >
              Remove from cart
            </div>
          ) : (
            <div
              onClick={() => addItemShoppingCart(item)}
              className="bg-button text-button my-4 md:my-2 lg:my-4 p-4 md:p-3 l:p-4 rounded-2xl flex justify-center items-center text-center font-bold w-full cursor-pointer hover:opacity-50"
            >
              Add to cart
            </div>
          )}
        </div>
      </div>
    </m.div>
  );
};

export default IndividualPainting;
