import React, { createContext, useContext, useEffect, useState } from "react";
import { UserAuth } from "./AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const initShoppingCart = {
  shoppingCart: [],
};

export const ShoppingCartContext = createContext();

const getInitialState = () => {
  const shoppingCart = localStorage.getItem("shoppingCart");
  return shoppingCart ? JSON.parse(shoppingCart) : initShoppingCart;
};

const ShoppingCartContextProvider = (props) => {
  const [shoppingCart, setShoppingCart] = useState(getInitialState);
  const { user } = UserAuth();
  const itemPath = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    localStorage.setItem("shoppingCart", JSON.stringify(shoppingCart));
  }, [shoppingCart]);

  const addItemShoppingCart = async (item) => {
    if (user?.email) {
      setShoppingCart((prev) => {
        const newShoppingCart = {
          ...prev,
          shoppingCart: [...prev.shoppingCart, item],
        };
        localStorage.setItem("shoppingCart", JSON.stringify(newShoppingCart));
        return newShoppingCart;
      });
      await updateDoc(itemPath, {
        shoppingCart: arrayUnion({
          id: item.id,
          name: item.name,
          author: item.author,
          price: item.price,
          img: item.img,
          description: item.description,
          numberOfUnits: item.numberOfUnits,
        }),
      });
    } else {
      alert("Please sign in to save an item to your shopping cart");
    }
  };

  const removeItemShoppingCart = async (itemId) => {
    setShoppingCart((prev) => ({
      ...prev,
      shoppingCart: prev.shoppingCart.filter((p) => p.id !== itemId),
    }));
    try {
      await updateDoc(itemPath, {
        shoppingCart: shoppingCart,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const removeAllItemsShoppingCart = async () => {
    setShoppingCart(() => initShoppingCart);
    try {
      await updateDoc(itemPath, {
        shoppingCart: shoppingCart,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const numberOfUnitsAdd = async (product) => {
    setShoppingCart((prev) => ({
      ...prev,
      shoppingCart: prev.shoppingCart.map((p) =>
        p.id === product.id
          ? { ...p, numberOfUnits: product.numberOfUnits + 1 }
          : p
      ),
    }));
    try {
      await updateDoc(itemPath, {
        shoppingCart: shoppingCart,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  const numberOfUnitsRemove = async (product) => {
    if (product.numberOfUnits >= 2) {
      setShoppingCart((prev) => ({
        ...prev,
        shoppingCart: prev.shoppingCart.map((p) =>
          p.id === product.id
            ? { ...p, numberOfUnits: product.numberOfUnits - 1 }
            : p
        ),
      }));
    }
    try {
      await updateDoc(itemPath, {
        shoppingCart: shoppingCart,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <ShoppingCartContext.Provider
      value={{
        addItemShoppingCart,
        removeItemShoppingCart,
        removeAllItemsShoppingCart,
        numberOfUnitsAdd,
        numberOfUnitsRemove,
        ...shoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

export default ShoppingCartContextProvider;
