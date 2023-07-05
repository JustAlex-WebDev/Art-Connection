import React from "react";

const IndividualPainting = ({
  item,
  isInFavouritesSection,
  addItemFavouritesSection,
  removeItemFavouritesSection,
  isInShoppingCart,
  addItemShoppingCart,
  removeItemShoppingCart,
}) => {
  return (
    <div className="main-div my-24 xxsm:mt-8 flex flex-col md:flex-row justify-center">
      <div className="flex justify-center items-center">
        <img
          src={item.img}
          alt={item.name}
          loading="lazy"
          className="w-[12rem] xxsm:w-[17rem] md:w-[37rem] lg:w-[27rem] object-scale-down h-[15rem] xxsm:h-[20rem] md:h-[30rem] lg:h-[35rem] shadow-lg bg-secondary hover:animate-panImage hover:cursor-pointer duration-300"
        />
      </div>
      <div className="w-[100%] lg:w-[50%] pt-8 md:pt-0 pl-0 md:pl-8 lg:pl-16 text-primary overflow-hidden md:h-[30rem] lg:h-[40rem] flex flex-col justify-center gap-4 md:gap-2 lg:gap-8 items-center md:items-start text-center  md:text-left">
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
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quae placeat
          inventore dicta quas fugiat ab error nam doloremque minima, cum
          consequuntur voluptatum iure, illum blanditiis dolorem odit, quasi
          perspiciatis est. Lorem ipsum dolor sit amet consectetur adipisicing
          elit. Magni, totam. Qui eos perferendis voluptas eum sit accusamus
          consequuntur, ipsam sapiente vitae quasi amet temporibus quos optio
          quis, eligendi saepe assumenda.
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
    </div>
  );
};

export default IndividualPainting;
