import React, { useState } from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Filter = ({
  items,
  setFilteredItems,
  filterMenu,
  setFilterMenu,
  setSortMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState("All");

  const handleFilter = (category) => {
    const filtered = items.filter((item) => {
      return item.category === category;
    });
    if (category === "Modern Art") {
      setActiveCategory("Modern Art");
    } else if (category === "Abstract") {
      setActiveCategory("Abstract");
    } else if (category === "Surrealism") {
      setActiveCategory("Surrealism");
    }
    setFilteredItems(filtered);
  };

  return (
    <div className="hidden md:block text-primary">
      <div
        className={
          filterMenu
            ? "flex justify-center items-center gap-2"
            : "flex justify-center items-center"
        }
      >
        <AiOutlineArrowLeft size={10} className="animate-animateOp3" />
        <div
          className={
            filterMenu
              ? "flex font-semibold gap-4 ease-in-out duration-300"
              : "flex font-semibold gap-4 ease-in-out duration-300 fixed right-[-100%] opacity-0"
          }
        >
          <div
            onClick={() => setFilteredItems(items) & setActiveCategory("All")}
            className={`${
              activeCategory === "All"
                ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                : "cursor-pointer opacity-90 hover:opacity-50"
            }`}
          >
            All
          </div>
          <div
            onClick={() => handleFilter("Surrealism")}
            className={`${
              activeCategory === "Surrealism"
                ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                : "cursor-pointer opacity-90 hover:opacity-50"
            }`}
          >
            Surrealism
          </div>
          <div
            onClick={() => handleFilter("Abstract")}
            className={`${
              activeCategory === "Abstract"
                ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                : "cursor-pointer opacity-90 hover:opacity-50"
            }`}
          >
            Abstract
          </div>
          <div
            onClick={() => handleFilter("Modern Art")}
            className={`${
              activeCategory === "Modern Art"
                ? "cursor-pointer opacity-100 hover:opacity-50 font-bold"
                : "cursor-pointer opacity-90 hover:opacity-50"
            }`}
          >
            Modern Art
          </div>
        </div>
        <FiFilter
          onClick={() => setFilterMenu(!filterMenu) & setSortMenu(false)}
          title={filterMenu ? "Close Categories" : "Open Categories"}
          className="cursor-pointer hover:opacity-50"
        />
      </div>
    </div>
  );
};

export default Filter;
