import React from "react";
import { useState } from "react";
import Item from "./Item";

const ItemSearch = ({ items }) => {
  const [searchText, setSearchText] = useState("");

  return (
    <div className="main-div my-4">
      <div className="flex flex-col md:flex-row justify-between pt-4 pb-6 text-center md:text-right">
        <h1 className="text-2xl font-bold my-2 text-[#543232]">Search Art</h1>
        <form>
          <input
            onChange={(e) => setSearchText(e.target.value)}
            className="w-full bg-[#fcf0e2] placeholder-[#543232] text-[#543232] px-4 py-2 rounded-2xl shadow-lg"
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
