import React, { useState, useEffect } from "react";
import ShoppingCartItem from "./ShoppingCartItem";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";

const ShoppingCartItems = () => {
  const [items, setItems] = useState([]);
  const { user } = UserAuth();

  let totalPrice = 0;
  let totalItems = 0;

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setItems(doc.data()?.shoppingCart);
    });
  }, [user?.email]);

  const itemPath = doc(db, "users", `${user?.email}`);
  const deleteItem = async (passedId) => {
    try {
      const result = items.filter((item) => item.id !== passedId);
      await updateDoc(itemPath, {
        shoppingCart: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const numberOfUnits = async (numberOfUnits) => {
    try {
      const result = items.map((item) =>
        numberOfUnits.id === item.id
          ? { numberOfUnits: numberOfUnits + 1 }
          : item
      );

      await updateDoc(itemPath, {
        shoppingCart: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <div className="w-full flex flex-col m-auto">
      <div className="py-24 mb-16 flex flex-col justify-center items-center main-div">
        <div>
          <h2 className="text-2xl font-bold text-primary">Shopping Cart</h2>
        </div>
        <div className="flex mt-4 -mb-40 justify-center items-center">
          <h3 className="text-xl font-semibold text-primary opacity-80">
            &nbsp;
            {items?.forEach((item) => (totalItems += item.numberOfUnits), 0)}
            {totalItems} items&nbsp; |
          </h3>
          <span className="text-xl font-bold text-primary opacity-90">
            &nbsp; USD{" "}
            {items?.forEach(
              (item) => (totalPrice += item.price * item.numberOfUnits),
              0
            )}
            {totalPrice.toLocaleString()}
          </span>
        </div>
      </div>

      <div className="w-full flex flex-col main-div justify-center items-center text-primary "></div>
      {items?.map((item) => (
        <ShoppingCartItem
          key={item.id}
          item={item}
          deleteItem={deleteItem}
          numberOfUnits={numberOfUnits}
        />
      ))}
    </div>
  );
};

export default ShoppingCartItems;
