import React, { useState } from "react";
import {
  AiOutlineHeart,
  AiOutlineMinusCircle,
  AiOutlinePlusCircle,
  AiFillHeart,
} from "react-icons/ai";
import { BsTrash } from "react-icons/bs";
import { UserAuth } from "../context/AuthContext";
import { doc, updateDoc, arrayUnion } from "firebase/firestore";
import { db } from "../firebase";

const FavouritesItem = ({
  item,
  deleteItem,
  numberOfUnitsAdd,
  numberOfUnitsRemove,
}) => {
  const [savedItemFavourites, setSavedItemFavourites] = useState(false);
  const { user } = UserAuth();

  const itemPath = doc(db, "users", `${user?.email}`);
  const saveItemFavourites = async () => {
    if (user?.email) {
      setSavedItemFavourites(true);
      await updateDoc(itemPath, {
        favourites: arrayUnion({
          id: item.id,
          name: item.name,
          author: item.author,
          price: item.price,
          img: item.img,
          numberOfUnits: item.numberOfUnits,
        }),
      });
    } else {
      alert("Please sign in to save an item to your favourites");
    }
  };

  return (
    <div className="group my-8 flex justify-center items-center gap-8">
      <img
        className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer"
        src={item.img}
        alt={item.name}
      />
      <div className="flex flex-col font-semibold text-lg text-primary">
        <h3>{item.name}</h3>
        <h3 className="opacity-60">{item.author}</h3>
        <h3 className="mb-10">{item.price.toLocaleString()} USD</h3>
        <div className="inline-flex gap-4 items-center">
          <AiOutlineMinusCircle
            title="Remove Item"
            onClick={() => numberOfUnitsRemove(item)}
            size={20}
            className="hover:opacity-50 cursor-pointer"
          />
          <h3>{item.numberOfUnits}</h3>
          <AiOutlinePlusCircle
            title="Add Item"
            onClick={() => numberOfUnitsAdd(item)}
            size={20}
            className="hover:opacity-50 cursor-pointer"
          />
        </div>
        <div className="inline-flex gap-4 mt-8 items-center">
          {savedItemFavourites ? (
            <AiFillHeart
              title="Item Saved"
              size={22}
              className="cursor-pointer hover:opacity-50"
            />
          ) : (
            <AiOutlineHeart
              title="Save Item"
              size={22}
              className="cursor-pointer hover:opacity-50"
              onClick={saveItemFavourites}
            />
          )}
          <BsTrash
            onClick={() => deleteItem(item.id)}
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Delete Item"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
