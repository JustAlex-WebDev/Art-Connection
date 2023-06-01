import React, { useState, useEffect } from "react";
import FavouritesItem from "./FavouritesItem";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../firebase";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const FavouritesItems = () => {
  const [items, setItems] = useState([]);
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setItems(doc.data()?.favourites);
    });
  }, [user?.email]);

  const itemPath = doc(db, "users", `${user?.email}`);
  const deleteItem = async (passedId) => {
    try {
      const result = items.filter((item) => item.id !== passedId);
      await updateDoc(itemPath, {
        favourites: result,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  if (user) {
    return (
      <div
        className={`w-full flex flex-col m-auto ${
          items?.length > 0 ? `mb-24` : ``
        }`}
      >
        <div className="mb-24 mt-6 pb-12 flex flex-col justify-center items-center main-div">
          <div>
            <h2 className="text-2xl font-bold text-primary">Favourites</h2>
          </div>
          <div className="flex mt-4 gap-4 -mb-40">
            <h3 className="text-xl font-semibold text-primary opacity-80">
              {items?.length === 0 ? (
                <p>0 items</p>
              ) : (
                <p>{items?.length} items</p>
              )}
            </h3>
          </div>
        </div>

        <div
          className={`w-full flex flex-col main-div justify-center items-center text-primary ${
            items?.length === 0 ? `mb-[23rem]` : ``
          }`}
        >
          {items?.map((item) => (
            <FavouritesItem key={item.id} item={item} deleteItem={deleteItem} />
          ))}
        </div>
      </div>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default FavouritesItems;
