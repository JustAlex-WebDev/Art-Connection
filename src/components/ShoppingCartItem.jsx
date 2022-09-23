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
    <div className="py-8 inline-flex m-auto gap-4 relative ">
      <img
        className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-xl bg-secondary"
        src={item.img}
        alt={item.img}
      />
      <div className="flex flex-col px-4 font-semibold text-lg w-[13rem] md:w-[14.5rem] lg:w-[17rem] h-[7.5rem] text-primary">
        <h3>{item.name}</h3>
        <h3 className="opacity-60">{item.author}</h3>
        <h3 className="mb-10">{item.price.toLocaleString()} USD</h3>
        <div className="inline-flex gap-4 mb-8 items-center">
          <AiOutlineMinusCircle
            onClick={() => numberOfUnitsRemove(item)}
            size={20}
            className="hover:opacity-50"
          />
          <h3>{item.numberOfUnits}</h3>
          <AiOutlinePlusCircle
            onClick={() => numberOfUnitsAdd(item)}
            size={20}
            className="hover:opacity-50"
          />
        </div>
        <div className="inline-flex gap-4 items-center">
          {savedItemFavourites ? (
            <AiFillHeart
              size={22}
              className="cursor-pointer hover:opacity-50"
            />
          ) : (
            <AiOutlineHeart
              size={22}
              className="cursor-pointer hover:opacity-50"
              onClick={saveItemFavourites}
              title="Add to favourites"
            />
          )}
          <BsTrash
            onClick={() => deleteItem(item.id)}
            size={20}
            className="cursor-pointer hover:opacity-50"
            title="Delete from shopping cart"
          />
        </div>
      </div>
    </div>
  );
};

export default FavouritesItem;
