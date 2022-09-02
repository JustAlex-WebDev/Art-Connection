import React from "react";
import ShoppingCartItem from "./ShoppingCartItem";

const ShoppingCartItems = () => {
  return (
    <div className="w-full flex flex-col m-auto">
      <div className="py-24 mb-16 flex flex-col justify-center items-center main-div">
        <div>
          <h2 className="text-2xl font-bold text-primary">Shopping Cart</h2>
        </div>
        <div className="flex mt-4 -mb-40 justify-center items-center">
          <h3 className="text-xl font-semibold text-primary opacity-80">
            &nbsp;2 items&nbsp; |
          </h3>
          <span className="text-xl font-bold text-primary opacity-90">
            &nbsp; USD 750
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col main-div justify-center items-center text-primary "></div>
      <ShoppingCartItem />
    </div>
  );
};

export default ShoppingCartItems;
