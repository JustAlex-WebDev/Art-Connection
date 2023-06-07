import React from "react";
import FavouritesItem from "./FavouritesItem";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import { useFavouritesSection } from "../context/FavouritesContext";

const FavouritesItems = () => {
  const { favouritesSection, removeItem } = useFavouritesSection();
  const { user } = UserAuth();

  if (user) {
    return (
      <div
        className={`w-full flex flex-col m-auto ${
          favouritesSection?.length > 0 ? `mb-24` : ``
        }`}
      >
        <div className="mb-24 mt-20 xxsm:mt-6 pb-12 flex flex-col justify-center items-center main-div">
          <div>
            <h2 className="text-2xl font-bold text-primary duration-300">
              Favourites
            </h2>
          </div>
          <div className="flex mt-4 gap-4 -mb-40">
            <h3 className="text-xl font-semibold text-primary opacity-80 duration-300">
              {favouritesSection?.length === 0 ? (
                <p>0 items</p>
              ) : (
                <p>{favouritesSection?.length} items</p>
              )}
            </h3>
          </div>
        </div>

        <div
          className={`w-full flex flex-col main-div justify-center items-center text-primary duration-300 ${
            favouritesSection?.length === 0 ? `mb-[23rem]` : ``
          }`}
        >
          {favouritesSection?.map((item) => {
            const isInFavouritesSection = favouritesSection.some(
              (i) => i.id === item.id
            );
            return (
              <FavouritesItem
                key={item.id}
                item={item}
                isInFavouritesSection={isInFavouritesSection}
                removeItem={removeItem}
              />
            );
          })}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default FavouritesItems;
