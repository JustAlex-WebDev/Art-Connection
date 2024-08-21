import React, { useState } from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { FiFilter } from "react-icons/fi";
import { PaintingProps } from "./ItemSearch";

interface FilterProps {
  items: PaintingProps[];
  setFilteredItems: React.Dispatch<React.SetStateAction<PaintingProps[]>>;
  filterMenu: boolean;
  setFilterMenu: React.Dispatch<React.SetStateAction<boolean>>;
  setSortMenu: React.Dispatch<React.SetStateAction<boolean>>;
}

const Filter: React.FC<FilterProps> = ({
  items,
  setFilteredItems,
  filterMenu,
  setFilterMenu,
  setSortMenu,
}) => {
  const [activeCategory, setActiveCategory] = useState<string>("All");

  const handleFilter = (category: string) => {
    const filtered =
      category === "All"
        ? items
        : items.filter((item) => item.category === category);

    setActiveCategory(category);
    setFilteredItems(filtered);
  };

  return (
    <div className="hidden md:block text-primary duration-300">
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
            onClick={() => {
              setFilteredItems(items);
              setActiveCategory("All");
            }}
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
          onClick={() => {
            setFilterMenu(!filterMenu);
            setSortMenu(false);
          }}
          title={filterMenu ? "Close Categories" : "Open Categories"}
          className="cursor-pointer hover:opacity-50"
        />
      </div>
    </div>
  );
};

export default Filter;
