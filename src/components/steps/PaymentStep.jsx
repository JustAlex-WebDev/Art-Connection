import React, { useState, useEffect } from "react";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserAuth } from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const PaymentStep = () => {
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const options = ["Cash", "Credit Card"];
  const {
    shoppingCart,
    removeItemShoppingCart,
    numberOfUnitsAdd,
    numberOfUnitsRemove,
  } = useShoppingCart();
  const { user } = UserAuth();

  let totalPrice = 0;
  let totalItems = 0;

  useEffect(() => {
    const localData = localStorage.getItem("PaymentMethod");
    setSelected(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem("PaymentMethod", JSON.stringify(selected));
  }, [selected]);

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-32">
        <h1 className="text-2xl font-bold text-primary">Payment</h1>

        <div className="my-4">
          <label className="text-primary font-semibold">Order Summary</label>
          <div className="my-2 mb-4 w-full relative">
            <div className="flex flex-col gap-8 bg-primary">
              {shoppingCart?.map((item) => (
                <div className="inline-flex" key={item.id}>
                  <img
                    className="w-[5rem] md:w-[6.5rem] lg:w-[8rem] object-scale-down h-[8rem] md:h-[9.5] lg:h-[11] shadow-xl bg-secondary"
                    src={item.img}
                    alt={item.img}
                  />
                  <div className="flex flex-col px-4 font-semibold w-[13rem] md:w-[14.5rem] lg:w-[17rem] h-[7.5rem] text-primary text-sm md:text-base lg-text-lg">
                    <h3>{item.name}</h3>
                    <h3 className="opacity-60">{item.author}</h3>
                    <h3 className="mb-10">{item.price.toLocaleString()} USD</h3>
                  </div>
                </div>
              ))}
            </div>
            <div className="flex flex-col my-6">
              <h3 className="text-base lg:text-lg font-semibold text-primary opacity-80">
                {shoppingCart?.forEach(
                  (item) => (totalItems += item.numberOfUnits),
                  0
                )}
                Total items:{" "}
                <span className="font-bold opacity-100">
                  {totalItems} items
                </span>
              </h3>
              <span className="text-base lg:text-lg font-semibold text-primary opacity-90">
                {shoppingCart?.forEach(
                  (item) => (totalPrice += item.price * item.numberOfUnits),
                  0
                )}
                Total price:{" "}
                <span className="font-bold opacity-100">
                  {totalPrice.toLocaleString()} USD
                </span>
              </span>
            </div>
          </div>
        </div>
        <div className="my-4">
          <label className="text-primary font-semibold">Payment Method</label>
          <div className="dropdown border my-2 mb-4 w-full relative rounded-2xl h-10 shadow-xl z-10">
            <div
              onClick={() => setIsActive(!isActive)}
              className="dropdown-btn py-2 px-3 flex items-center justify-between font-semibold cursor-pointer ease-in-out duration-300 relative"
            >
              {selected}
              <span>
                <RiArrowDropDownLine
                  size={25}
                  className="right-4 top-2 absolute"
                />
              </span>
            </div>
            {isActive && (
              <div className="dropdown-content border absolute w-full rounded-2xl left-0 top-[110%] bg-primary shadow-xl">
                {options?.map((option, index) => (
                  <div
                    key={index}
                    onClick={() => {
                      setSelected(option);
                      setIsActive(false);
                    }}
                    className="dropdown-item p-3 cursor-pointer hover:opacity-50"
                  >
                    {option}
                  </div>
                ))}
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
