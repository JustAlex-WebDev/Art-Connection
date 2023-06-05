import React from "react";
import { AiOutlineArrowLeft } from "react-icons/ai";
import { BiSortAlt2 } from "react-icons/bi";

const Sort = ({
  sortMenu,
  setSortMenu,
  sortedHighLow,
  setSortedHighLow,
  sortedLowHigh,
  setSortedLowHigh,
  sortedNone,
  setSortedNone,
  setFilterMenu,
}) => {
  return (
    <div className="hidden md:block text-primary duration-300">
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
  );
};

export default Sort;
