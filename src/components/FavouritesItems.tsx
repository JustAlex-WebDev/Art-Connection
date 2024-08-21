import { motion as m } from "framer-motion";
import React from "react";
import { Navigate } from "react-router-dom";
import { UserAuth } from "../context/AuthContext";
import { useFavouritesSection } from "../context/FavouritesContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import FavouritesItem from "./FavouritesItem";
import { PaintingProps } from "./ItemSearch";

const FavouritesItems: React.FC = () => {
  const { favouritesSection, removeItemFavouritesSection } =
    useFavouritesSection() || {
      favouritesSection: [],
      addItemFavouritesSection: () => {},
      removeItemFavouritesSection: () => {},
    };

  const { shoppingCart, addItemShoppingCart, removeItemShoppingCart } =
    useShoppingCart() || {
      shoppingCart: [],
      addItemShoppingCart: () => {},
      removeItemShoppingCart: () => {},
    };

  const { user } = UserAuth();

  // Ensure favouritesSection is an array
  const safeFavouritesSection = Array.isArray(favouritesSection)
    ? favouritesSection
    : [];

  if (user) {
    return (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.75, duration: 0.75 }}
        className={`w-full flex flex-col m-auto ${
          safeFavouritesSection.length > 0 ? `mb-24` : ``
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
              {safeFavouritesSection.length === 0 ? (
                <p>0 items</p>
              ) : (
                <p>{safeFavouritesSection.length} items</p>
              )}
            </h3>
          </div>
        </div>

        <div
          className={`w-full flex flex-col main-div justify-center items-center text-primary duration-300 ${
            safeFavouritesSection.length === 0 ? `mb-[23rem]` : ``
          }`}
        >
          {safeFavouritesSection.map((item) => {
            const isInShoppingCart = shoppingCart.some(
              (i: PaintingProps) => i.id === item.id
            );
            return (
              <FavouritesItem
                key={item.id}
                item={item}
                removeItemFavouritesSection={removeItemFavouritesSection}
                addItemShoppingCart={addItemShoppingCart}
                removeItemShoppingCart={removeItemShoppingCart}
                isInShoppingCart={isInShoppingCart}
              />
            );
          })}
        </div>
      </m.div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default FavouritesItems;
