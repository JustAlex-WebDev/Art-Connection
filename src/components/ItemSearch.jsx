import React from "react";
import { useState } from "react";
import Item from "./Item";
import { AiOutlineSearch } from "react-icons/ai";

const ItemSearch = ({ items }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="main-div mb-24 mt-28">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 text-primary">Search Art</h1>
        <form className="relative">
          <AiOutlineSearch className="absolute top-0 left-0 text-xl rounded-2xl cursor-pointer mt-2 ml-4 text-primary" />
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-secondary placeholder-primary text-primary pl-12 py-2 rounded-2xl shadow-lg outline-none"
            type="text"
            placeholder="Search a painting"
          />
        </form>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-x-10 gap-y-4 justify-center font-semibold">
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
