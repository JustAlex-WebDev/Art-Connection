import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "../components/Footer";
import IndividualPainting from "../components/IndividualPainting";
import { PaintingProps } from "../components/ItemSearch";
import Navbar from "../components/Navbar";
import PageTransition from "../components/PageTransition";
import Slides from "../components/Slides";
import { useFavouritesSection } from "../context/FavouritesContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { paintings } from "../data";

const Painting: React.FC = () => {
  const [items, setItems] = useState<PaintingProps[]>(paintings);
  const {
    favouritesSection,
    addItemFavouritesSection,
    removeItemFavouritesSection,
  } = useFavouritesSection() || {
    favouritesSection: [],
    addItemFavouritesSection: () => {},
    removeItemFavouritesSection: () => {},
  };
  const { shoppingCart, addItemShoppingCart, removeItemShoppingCart } =
    useShoppingCart() || {
      shoppingCart: [],
      addItemShoppingCart: () => {},
      removeItemShoppingCart: () => {},
    };
  const { id } = useParams<{ id: string }>();

  const parsedId = id ? parseInt(id, 10) : null;

  return (
    <>
      <PageTransition />
      <Navbar />
      <Slides />
      {parsedId &&
        items
          .filter((element) => element.id === parsedId)
          .map((item) => {
            const isInFavouritesSection = favouritesSection.some(
              (i: PaintingProps) => i.id === item.id
            );
            const isInShoppingCart = shoppingCart.some(
              (i: PaintingProps) => i.id === item.id
            );

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
