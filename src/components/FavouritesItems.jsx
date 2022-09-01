import React from "react";
import FavouritesItem from "./FavouritesItem";

const FavouritesItems = () => {
  return (
    <div className="w-full flex flex-col m-auto">
      <div className="py-24 mb-16 flex flex-col justify-center items-center main-div">
        <div>
          <h2 className="text-2xl font-bold text-primary">Favourites</h2>
        </div>
        <div className="flex mt-4 gap-4 -mb-40">
          <h3 className="text-xl font-semibold text-primary opacity-80">
            2 items
          </h3>
        </div>
      </div>

      <div className="w-full flex flex-col main-div justify-center items-center text-primary "></div>
      <FavouritesItem />
    </div>
  );
};

export default FavouritesItems;
