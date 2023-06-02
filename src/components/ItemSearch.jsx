import React, { useState } from "react";
import { AiOutlineSearch, AiOutlineArrowLeft } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";
import Item from "./Item";
import Filter from "./Filter";

const ItemSearch = ({ items }) => {
  const [searchText, setSearchText] = useState("");
  const [filterMenu, setFilterMenu] = useState(false);
  const [filteredItems, setFilteredItems] = useState(items);
  const [sortMenu, setSortMenu] = useState(false);
  const [sortedHighLow, setSortedHighLow] = useState(false);
  const [sortedLowHigh, setSortedLowHigh] = useState(false);
  const [sortedNone, setSortedNone] = useState(true);

  return (
    <div className="main-div mb-24 mt-24 xxsm:mt-8">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-8 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 text-primary">Search Art</h1>
        <div className="flex justify-center items-center">
          <div className="hidden md:block text-primary">
            <div
              className={
                sortMenu
                  ? "flex justify-center items-center gap-2"
                  : "flex justify-center items-center"
              }
            >
              <AiOutlineArrowLeft size={10} className="animate-animateOp3" />
              <div
                className={
                  sortMenu
                    ? "flex font-semibold gap-4 ease-in-out duration-300"
                    : "flex font-semibold gap-4 ease-in-out duration-300 fixed right-[-100%] opacity-0"
                }
              >
                <div
                  onClick={() =>
                    setSortedHighLow(false) &
                    setSortedLowHigh(false) &
                    setSortedNone(true)
                  }
                  className={`${
                    sortedNone
                      ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                      : "cursor-pointer opacity-90 hover:opacity-50"
                  }`}
                >
                  None
                </div>
                <div
                  onClick={() =>
                    setSortedHighLow(!sortedHighLow) &
                    setSortedLowHigh(false) &
                    setSortedNone(false)
                  }
                  className={`${
                    sortedHighLow
                      ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                      : "cursor-pointer opacity-90 hover:opacity-50"
                  }`}
                >
                  Price: High-Low
                </div>
                <div
                  onClick={() =>
                    setSortedLowHigh(!sortedLowHigh) &
                    setSortedHighLow(false) &
                    setSortedNone(false)
                  }
                  className={`${
                    sortedLowHigh
                      ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                      : "cursor-pointer opacity-90 hover:opacity-50"
                  }`}
                >
                  Price: Low-High
                </div>
              </div>
              <BiSortAlt2
                onClick={() => setSortMenu(!sortMenu) & setFilterMenu(false)}
                title="Sort By"
                className="mr-4 cursor-pointer"
              />
            </div>
          </div>
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
              className="w-full bg-secondary placeholder-primary text-primary pl-12 py-2 rounded-2xl shadow-lg outline-none"
              type="text"
              placeholder="Search a painting"
              id="search"
            />
          </form>
        </div>
      </div>

      <div>
        {sortedNone ? (
          <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center  items-center font-semibold">
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
              .map((item) => (
                <Item item={item} key={item.id} />
              ))}
          </div>
        ) : (
          <div>
            {sortedHighLow ? (
              <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center items-center font-semibold">
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
                  .map((item) => (
                    <Item item={item} key={item.id} />
                  ))}
              </div>
            ) : (
              <div>
                {sortedLowHigh ? (
                  <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center items-center font-semibold">
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
                      .map((item) => (
                        <Item item={item} key={item.id} />
                      ))}
                  </div>
                ) : (
                  <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center items-center font-semibold">
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
                      .map((item) => (
                        <Item item={item} key={item.id} />
                      ))}
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
