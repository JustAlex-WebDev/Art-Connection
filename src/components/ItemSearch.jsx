import React, { useState } from "react";
import { AiOutlineSearch } from "react-icons/ai";
import Item from "./Item";
import Filter from "./Filter";

const ItemSearch = ({ items }) => {
  const [searchText, setSearchText] = useState("");
  const [filteredItems, setFilteredItems] = useState(items);
  const [activeArtStyle, setActiveArtStyle] = useState(0);

  console.log(items);
  console.log(filteredItems);
  console.log(activeArtStyle);

  return (
    <div className="main-div mb-24 mt-28 xxsm:mt-8">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 text-primary">Search Art</h1>
        <div className="flex justify-center items-center">
          <Filter
            items={items}
            setFilteredItems={setFilteredItems}
            activeArtStyle={activeArtStyle}
            setActiveArtStyle={setActiveArtStyle}
          />
          <form className="relative ml-4">
            <AiOutlineSearch className="absolute top-0 left-0 text-xl rounded-2xl cursor-pointer mt-[0.6rem] ml-4 text-primary" />
            <input
              onChange={(e) => setSearchText(e.target.value)}
              className="w-full bg-secondary placeholder-primary text-primary pl-12 py-2 rounded-2xl shadow-lg outline-none"
              type="text"
              placeholder="Search a painting"
            />
          </form>
        </div>
      </div>

      <div className="grid grid-cols-1 xxxsm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
        {items
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
    </div>
  );
};

export default ItemSearch;
