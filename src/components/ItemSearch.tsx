import { motion as m } from "framer-motion";
import React, { ChangeEvent, useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import { useFavouritesSection } from "../context/FavouritesContext";
import { useShoppingCart } from "../context/ShoppingCartContext";
import { paintings } from "../data";
import Filter from "./Filter";
import Item from "./Item";
import Sort from "./Sort";

// Define the shape of a painting
export interface PaintingProps {
  id: number;
  name: string;
  author: string;
  price: number;
  img: string;
  description: string;
  numberOfUnits: number;
  category: string;
  poster1Light?: string;
  poster2Light?: string;
  poster3Light?: string;
  poster4Light?: string;
  poster1Dark?: string;
  poster2Dark?: string;
  poster3Dark?: string;
  poster4Dark?: string;
}

// Define the shape of context values
interface FavouritesContextType {
  favouritesSection: PaintingProps[];
  addItemFavouritesSection: (item: PaintingProps) => void;
  removeItemFavouritesSection: (itemId: number) => void;
}

interface ShoppingCartContextType {
  shoppingCart: PaintingProps[];
  addItemShoppingCart: (item: PaintingProps) => void;
  removeItemShoppingCart: (itemId: number) => void;
}

const ItemSearch: React.FC = () => {
  // State declarations
  const [items, setItems] = useState<PaintingProps[]>(paintings);
  const [searchText, setSearchText] = useState<string>("");
  const [filterMenu, setFilterMenu] = useState<boolean>(false);
  const [filteredItems, setFilteredItems] = useState<PaintingProps[]>(items);
  const [sortMenu, setSortMenu] = useState<boolean>(false);
  const [sortedHighLow, setSortedHighLow] = useState<boolean>(false);
  const [sortedLowHigh, setSortedLowHigh] = useState<boolean>(false);
  const [sortedNone, setSortedNone] = useState<boolean>(true);

  const {
    favouritesSection = [],
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

  // Ensure favouritesSection is always an array before calling .some()
  const isInFavouritesSection = (id: number) =>
    Array.isArray(favouritesSection) &&
    favouritesSection.some((i) => i.id === id);
  const isInShoppingCart = (id: number) =>
    Array.isArray(shoppingCart) && shoppingCart.some((i) => i.id === id);

  // Handle search text change
  const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
    setSearchText(e.target.value);
  };

  // Apply filtering and sorting
  const getFilteredItems = () => {
    return filteredItems
      .filter(
        (item) =>
          searchText === "" ||
          item.name.toLowerCase().includes(searchText.toLowerCase())
      )
      .sort((a, b) => {
        if (sortedHighLow) return b.price - a.price;
        if (sortedLowHigh) return a.price - b.price;
        return 0;
      });
  };

  return (
    <m.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ delay: 2.75, duration: 0.75 }}
      className="main-div mb-24 mt-24 xxsm:mt-8"
    >
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 px-4 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 text-primary duration-300">
          Search Art
        </h1>
        <div className="flex justify-center items-center">
          <Sort
            sortMenu={sortMenu}
            setSortMenu={setSortMenu}
            sortedHighLow={sortedHighLow}
            setSortedHighLow={setSortedHighLow}
            sortedLowHigh={sortedLowHigh}
            setSortedLowHigh={setSortedLowHigh}
            sortedNone={sortedNone}
            setSortedNone={setSortedNone}
            setFilterMenu={setFilterMenu}
          />
          <Filter
            items={items}
            setFilteredItems={setFilteredItems}
            filterMenu={filterMenu}
            setFilterMenu={setFilterMenu}
            setSortMenu={setSortMenu}
          />
          <form className="relative ml-4">
            <label htmlFor="search">
              <AiOutlineSearch
                title="Search"
                className="absolute top-0 left-0 text-xl rounded-2xl cursor-pointer mt-[0.6rem] ml-4 text-primary"
              />
            </label>
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-secondary placeholder-primary text-primary pl-12 py-2 rounded-2xl shadow-lg outline-none duration-300"
              type="text"
              placeholder="Search a painting"
              id="search"
            />
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
        {getFilteredItems().map((item) => {
          const isInFavourites = isInFavouritesSection(item.id);
          const isInCart = isInShoppingCart(item.id);
          return (
            <Item
              item={item}
              key={item.id}
              isInFavouritesSection={isInFavourites}
              addItemFavouritesSection={addItemFavouritesSection}
              removeItemFavouritesSection={removeItemFavouritesSection}
              isInShoppingCart={isInCart}
              addItemShoppingCart={addItemShoppingCart}
              removeItemShoppingCart={removeItemShoppingCart}
            />
          );
        })}
      </div>
    </m.div>
  );
};

export default ItemSearch;
