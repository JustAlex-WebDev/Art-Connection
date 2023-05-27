import React, { createContext, useContext, useEffect, useState } from "react";

const initFavSection = {
  favSection: [],
};

export const FavContext = createContext();

const getInitialState = () => {
  const favSection = localStorage.getItem("favSection");
  return favSection ? JSON.parse(favSection) : initFavSection;
};

const FavContextProvider = (props) => {
  const [favSection, setFavSection] = useState(getInitialState);

  useEffect(() => {
    localStorage.setItem("favSection", JSON.stringify(favSection));
  }, [favSection]);

  const addItem = (item) =>
    setFavSection((prev) => {
      const newFavSection = {
        ...prev,
        favSection: [...prev.favSection, item],
      };
      localStorage.setItem("favSection", JSON.stringify(newFavSection));
      return newFavSection;
    });

  const removeItem = (itemId) =>
    setFavSection((prev) => ({
      ...prev,
      favSection: prev.favSection.filter((p) => p.id !== itemId),
    }));

  return (
    <FavContext.Provider value={{ addItem, removeItem, ...favSection }}>
      {props.children}
    </FavContext.Provider>
  );
};

export const useFavSection = () => useContext(FavContext);

export default FavContextProvider;
