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

  //   const numberOfUnitsAdd = async (product) => {
  //     const exists = shoppingCart.find((x) => x.id === product.id);
  //     try {
  //       const result = shoppingCart.map((item) =>
  //         item.id === product.id
  //           ? { ...exists, numberOfUnits: exists.numberOfUnits + 1 }
  //           : item
  //       );
  //       await updateDoc(itemPath, {
  //         shoppingCart: result,
  //       });
  //     } catch (e) {
  //       console.log(e.message);
  //     }
  //   };

  //   const numberOfUnitsRemove = async (product) => {
  //     if (product.numberOfUnits >= 2) {
  //       try {
  //         shoppingCart.map((item) =>
  //           item.id === product.id
  //             ? { ...product, numberOfUnits: product.numberOfUnits - 1 }
  //             : item
  //         );

  //         await updateDoc(itemPath, {
  //           shoppingCart: shoppingCart,
  //         });
  //       } catch (e) {
  //         console.log(e.message);
  //       }
  //     }
  //   };

  return (
    <ShoppingCartContext.Provider
      value={{
        addItemShoppingCart,
        removeItemShoppingCart,
        // numberOfUnitsAdd,
        // numberOfUnitsRemove,
        ...shoppingCart,
      }}
    >
      {props.children}
    </ShoppingCartContext.Provider>
  );
};

export const useShoppingCart = () => useContext(ShoppingCartContext);

export default ShoppingCartContextProvider;
