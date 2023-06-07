import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Item from "./Item";
import Filter from "./Filter";
import Sort from "./Sort";
import { useFavouritesSection } from "../context/FavouritesContext";

const ItemSearch = ({ items }) => {
  const [searchText, setSearchText] = useState("");
  const [filterMenu, setFilterMenu] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [sortMenu, setSortMenu] = useState(false);
  const [sortedHighLow, setSortedHighLow] = useState(false);
  const [sortedLowHigh, setSortedLowHigh] = useState(false);
  const [sortedNone, setSortedNone] = useState(true);
  const { favouritesSection, addItem, removeItem } = useFavouritesSection();

  return (
    <div className="main-div mb-24 mt-24 xxsm:mt-8">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 text-center md:text-right">
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

      <div>
        {sortedNone ? (
          <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
            {filteredItems
              .filter((value) => {
                if (searchText === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((item) => {
                const isInFavouritesSection = favouritesSection.some(
                  (i) => i.id === item.id
                );
                return (
                  <Item
                    item={item}
                    key={item.id}
                    isInFavouritesSection={isInFavouritesSection}
                    addItem={addItem}
                    removeItem={removeItem}
                  />
                );
              })}
          </div>
        ) : (
          <div>
            {sortedHighLow ? (
              <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
                {filteredItems
                  .filter((value) => {
                    if (searchText === "") {
                      return value;
                    } else if (
                      value.name
                        .toLowerCase()
                        .includes(searchText.toLowerCase())
                    ) {
                      return value;
                    }
                  })
                  .sort((a, b) => (a.price > b.price ? -1 : 1))
                  .map((item) => {
                    const isInFavouritesSection = favouritesSection.some(
                      (i) => i.id === item.id
                    );
                    return (
                      <Item
                        item={item}
                        key={item.id}
                        isInFavouritesSection={isInFavouritesSection}
                        addItem={addItem}
                        removeItem={removeItem}
                      />
                    );
                  })}
              </div>
            ) : (
              <div>
                {sortedLowHigh ? (
                  <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
                    {filteredItems
                      .filter((value) => {
                        if (searchText === "") {
                          return value;
                        } else if (
                          value.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .sort((a, b) => (a.price > b.price ? 1 : -1))
                      .map((item) => {
                        const isInFavouritesSection = favouritesSection.some(
                          (i) => i.id === item.id
                        );
                        return (
                          <Item
                            item={item}
                            key={item.id}
                            isInFavouritesSection={isInFavouritesSection}
                            addItem={addItem}
                            removeItem={removeItem}
                          />
                        );
                      })}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
                    {filteredItems
                      .filter((value) => {
                        if (searchText === "") {
                          return value;
                        } else if (
                          value.name
                            .toLowerCase()
                            .includes(searchText.toLowerCase())
                        ) {
                          return value;
                        }
                      })
                      .map((item) => {
                        const isInFavouritesSection = favouritesSection.some(
                          (i) => i.id === item.id
                        );
                        return (
                          <Item
                            item={item}
                            key={item.id}
                            isInFavouritesSection={isInFavouritesSection}
                            addItem={addItem}
                            removeItem={removeItem}
                          />
                        );
                      })}
                  </div>
                )}
              </div>
            )}
          </div>
        )}
      </div>
    </div>
  );
};

export default ItemSearch;
