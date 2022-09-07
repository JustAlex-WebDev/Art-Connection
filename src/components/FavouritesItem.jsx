import React, { useState } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { BsTrash } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

const FavouritesItem = ({ item, deleteItem }) => {
  const [savedItemShoppingCart, setSavedItemShoppingCart] = useState(false);
  const { user } = UserAuth();

  const itemPath = doc(db, "users", `${user?.email}`);
  const saveItemShoppingCart = async () => {
    if (user?.email) {
      setSavedItemShoppingCart(true);
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

  return (
    <div className="py-8 inline-flex m-auto gap-4 relative ">
      <img
        className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-xl bg-secondary"
        src={item.img}
        alt={item.img}
      />
      <div className="flex flex-col px-4 font-semibold text-lg w-[13rem] md:w-[14.5rem] lg:w-[17rem] h-[11rem] text-primary">
        <h3>{item.name}</h3>
        <h3 className="opacity-60">{item.author}</h3>
        <h3 className="mb-[6.3rem]">{item.price.toLocaleString()} USD</h3>
        <div className="inline-flex gap-4 items-center">
          <FiShoppingCart
            onClick={saveItemShoppingCart}
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Add to shopping cart"
          />
          <BsTrash
            onClick={() => deleteItem(item.id)}
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Delete from favourites"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
