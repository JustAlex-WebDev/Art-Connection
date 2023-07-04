import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import IndividualPainting from "../components/IndividualPainting";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";
import { useFavouritesSection } from "../context/FavouritesContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { paintings } from "../data";

const Painting = () => {
  const [items, setItems] = useState(paintings);
  const {
    favouritesSection,
    addItemFavouritesSection,
    removeItemFavouritesSection,
  } = useFavouritesSection();
  const { shoppingCart, addItemShoppingCart, removeItemShoppingCart } =
    useShoppingCart();
  const { id } = useParams();
  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      {items
        .filter((element, index) => {
          return index === id - 1;
        })
        .map((item) => {
          const isInFavouritesSection = favouritesSection.some(
            (i) => i.id === item.id
          );

          const isInShoppingCart = shoppingCart.some((i) => i.id === item.id);
          return (
            <IndividualPainting
              item={item}
              key={item.id}
              isInFavouritesSection={isInFavouritesSection}
              addItemFavouritesSection={addItemFavouritesSection}
              removeItemFavouritesSection={removeItemFavouritesSection}
              isInShoppingCart={isInShoppingCart}
              addItemShoppingCart={addItemShoppingCart}
              removeItemShoppingCart={removeItemShoppingCart}
            />
          );
        })}
      <Footer />
    </>
  );
};

export default Painting;
