import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";
import { PaintingProps } from "../ItemSearch";

const PaymentStep: React.FC = () => {
  const { shoppingCart } = useShoppingCart();

  // Ensure shoppingCart is an array before calling reduce
  const validShoppingCart = Array.isArray(shoppingCart) ? shoppingCart : [];

  // Calculate total price and total items using reduce
  const { totalPrice, totalItems } = validShoppingCart.reduce(
    (acc, item: PaintingProps) => {
      acc.totalItems += item.numberOfUnits;
      acc.totalPrice += item.price * item.numberOfUnits;
      return acc;
    },
    { totalItems: 0, totalPrice: 0 }
  );

  return (
    <div>
      <div className="max-w-[400px] m-auto min-h-[600px] px-4 py-32 -mb-32">
        <h1 className="text-2xl font-bold text-primary">Payment</h1>
        <h3 className="opacity-90 mt-2 mb-4">Order Summary</h3>
        <div className="flex flex-col">
          {validShoppingCart.map((item: PaintingProps) => (
            <div
              key={item.id}
              className="group my-4 flex flex-col xxxsm:flex-row justify-start items-center gap-6"
            >
              <Link to="">
                <img
                  className="w-[8rem] md:w-[9.5rem] lg:w-[11rem] object-scale-down h-[11rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer duration-300"
                  src={item.img}
                  alt={item.name}
                />
              </Link>
              <div className="flex flex-col justify-between font-semibold text-base xxxsm:text-base text-primary w-full xxxsm:w-40 h-[11rem] duration-300">
                <div>
                  <h3>{item.name}</h3>
                  <h3 className="opacity-60">{item.author}</h3>
                  <h3 className="mt-2">{item.price.toLocaleString()} USD</h3>
                </div>
                <div className="flex gap-4 items-center">
                  <h3>x {item.numberOfUnits}</h3>
                </div>
              </div>
            </div>
          ))}
          <div className="flex flex-col mt-4 gap-2">
            <h3 className="text-base lg:text-lg font-semibold text-primary opacity-80">
              Total items:{" "}
              <span className="font-bold opacity-100">{totalItems} items</span>
            </h3>
            <span className="text-base lg:text-lg font-semibold text-primary opacity-90">
              Total price:{" "}
              <span className="font-bold opacity-100">
                {totalPrice.toLocaleString()} USD
              </span>
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
