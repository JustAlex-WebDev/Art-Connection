import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { UserAuth } from "../context/AuthContext";
import { Navigate, Link } from "react-router-dom";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { useFavouritesSection } from "../context/FavouritesContext";
import { motion as m } from "framer-motion";

const ShoppingCartItems = () => {
  const {
    shoppingCart,
    removeItemShoppingCart,
    numberOfUnitsAdd,
    numberOfUnitsRemove,
  } = useShoppingCart();
  const {
    favouritesSection,
    addItemFavouritesSection,
    removeItemFavouritesSection,
  } = useFavouritesSection();
  const { user } = UserAuth();

  let totalPrice = 0;
  let totalItems = 0;

  if (user) {
    return (
      <m.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.5 }}
        className={`w-full flex flex-col m-auto ${
          shoppingCart?.length > 0 ? `mb-24` : ``
        }`}
      >
        <div className="mb-24 mt-20 xxsm:mt-6 pb-12 flex flex-col justify-center items-center main-div">
          <div>
            <h2 className="text-2xl font-bold text-primary duration-300">
              Shopping Cart
            </h2>
          </div>
          <div className="flex mt-4 -mb-40 justify-center items-center">
            <h3 className="text-xl font-semibold text-primary opacity-80 duration-300">
              &nbsp;
              {shoppingCart?.forEach(
                (item) => (totalItems += item.numberOfUnits),
                0
              )}
              {totalItems} items&nbsp; |
            </h3>
            <span className="text-xl font-bold text-primary opacity-90 duration-300">
              &nbsp; USD{" "}
              {shoppingCart?.forEach(
                (item) => (totalPrice += item.price * item.numberOfUnits),
                0
              )}
              {totalPrice.toLocaleString()}
            </span>
          </div>
        </div>

        <div
          className={`w-full flex flex-col main-div justify-center items-center text-primary ${
            totalItems === 0 ? `mb-[23rem]` : ``
          }`}
        >
          {shoppingCart?.map((item) => {
            const isInFavouritesSection = favouritesSection.some(
              (i) => i.id === item.id
            );
            return (
              <ShoppingCartItem
                key={item.id}
                item={item}
                removeItemShoppingCart={removeItemShoppingCart}
                numberOfUnitsAdd={numberOfUnitsAdd}
                numberOfUnitsRemove={numberOfUnitsRemove}
                addItemFavouritesSection={addItemFavouritesSection}
                removeItemFavouritesSection={removeItemFavouritesSection}
                isInFavouritesSection={isInFavouritesSection}
              />
            );
          })}
        </div>
        {shoppingCart?.length === 0 ? null : (
          <div className="flex justify-center items-center mt-12 main-div">
            <Link
              to="/checkout"
              className="p-3 px-6 bg-button text-button hover:opacity-50 font-bold rounded-2xl shadow-md"
            >
              Go to Checkout
            </Link>
          </div>
        )}
      </m.div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default ShoppingCartItems;
