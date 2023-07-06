import React, { createContext, useContext, useEffect, useState } from "react";
import { UserAuth } from "./AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";

const initFavouritesSection = {
  favouritesSection: [],
};

export const FavouritesContext = createContext();

const getInitialState = () => {
  const favouritesSection = localStorage.getItem("favouritesSection");
  return favouritesSection
    ? JSON.parse(favouritesSection)
    : initFavouritesSection;
};

const FavouritesContextProvider = (props) => {
  const [favouritesSection, setFavouritesSection] = useState(getInitialState);
  const { user } = UserAuth();
  const itemPath = doc(db, "users", `${user?.email}`);

  useEffect(() => {
    localStorage.setItem(
      "favouritesSection",
      JSON.stringify(favouritesSection)
    );
  }, [favouritesSection]);

  const addItemFavouritesSection = async (item) => {
    if (user?.email) {
      setFavouritesSection((prev) => {
        const newFavourtiesSection = {
          ...prev,
          favouritesSection: [...prev.favouritesSection, item],
        };
        localStorage.setItem(
          "favouritesSection",
          JSON.stringify(newFavourtiesSection)
        );
        return newFavourtiesSection;
      });
      await updateDoc(itemPath, {
        favourites: arrayUnion({
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
      alert("Please sign in to save an item to your favourites");
    }
  };

  const removeItemFavouritesSection = async (itemId) => {
    setFavouritesSection((prev) => ({
      ...prev,
      favouritesSection: prev.favouritesSection.filter((p) => p.id !== itemId),
    }));
    try {
      await updateDoc(itemPath, {
        favourites: favouritesSection,
      });
    } catch (e) {
      console.log(e.message);
    }
  };

  return (
    <FavouritesContext.Provider
      value={{
        addItemFavouritesSection,
        removeItemFavouritesSection,
        ...favouritesSection,
      }}
    >
      {props.children}
    </FavouritesContext.Provider>
  );
};

export const useFavouritesSection = () => useContext(FavouritesContext);

export default FavouritesContextProvider;
