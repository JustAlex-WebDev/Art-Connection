import React, { useEffect, useState } from "react";
import { FiFilter } from "react-icons/fi";
import { AiOutlineArrowLeft } from "react-icons/ai";

const Filter = ({
  items,
  setFilteredItems,
  activeArtStyle,
  setActiveArtStyle,
}) => {
  const [filterMenu, setFilterMenu] = useState(false);

  useEffect(() => {
    if (activeArtStyle === 0) {
      setFilteredItems(items);
      return;
    }
    const filteredItems = items.filter((item) =>
      item.styleId.includes(activeArtStyle)
    );
    setFilteredItems(filteredItems);
  }, [activeArtStyle]);

  return (
    <div className="hidden md:block text-primary">
      <div
        className={
          filterMenu
            ? "flex justify-center items-center gap-4"
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
            onClick={() => setActiveArtStyle(0)}
            className="cursor-pointer hover:opacity-50"
          >
            All
          </div>
          <div
            onClick={() => setActiveArtStyle(2)}
            className="cursor-pointer hover:opacity-50"
          >
            Surrealism
          </div>
          <div
            onClick={() => setActiveArtStyle(1)}
            className="cursor-pointer hover:opacity-50"
          >
            Abstract
          </div>
        </div>
        <FiFilter
          onClick={() => setFilterMenu(!filterMenu)}
          title={filterMenu ? "Close Categories" : "Open Categories"}
          className="cursor-pointer hover:opacity-50"
        />
      </div>
    </div>
  );
};

export default Filter;
