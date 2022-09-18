import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useInView } from "react-intersection-observer";

const Item = ({ item }) => {
  const { ref: myRef, inView: myElementIsVisible } = useInView();
  const [savedItemFavourites, setSavedItemFavourites] = useState(false);
  const [savedItemShoppingCart, setSavedItemShoppingCart] = useState(false);
  const { user } = UserAuth();

  const itemPath = doc(db, "users", `${user?.email}`);
  const saveItemFavourites = async () => {
    if (user?.email) {
      setSavedItemFavourites(true);
      await updateDoc(itemPath, {
        favourites: arrayUnion({
          id: item.id,
          name: item.name,
          author: item.author,
          price: item.price,
          img: item.img,
          numberOfUnits: item.numberOfUnits,
        }),
      });
    } else {
      alert("Please sign in to save an item to your favourites");
    }
  };
  const saveItemShoppingCart = async () => {
    if (user?.email) {
      setSavedItemShoppingCart(true);
      await updateDoc(itemPath, {
        shoppingCart: arrayUnion({
          id: item.id,
          name: item.name,
          author: item.author,
          price: item.price,
          img: item.img,
          numberOfUnits: item.numberOfUnits,
        }),
      });
    } else {
      alert("Please sign in to save an item to your shopping cart");
    }
  };

  return (
    <article
      ref={myRef}
      key={item.id}
      className={`${
        myElementIsVisible
          ? "grid justify-center items-center gap-x-4 gap-y-4 animate-animateOp"
          : "grid justify-center items-center gap-x-4 gap-y-4"
      }`}
    >
      <div className="image relative w-[10rem] md:w-[11.5rem] lg:w-[13rem]">
        <img
          src={item.img}
          alt="painting"
          className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-xl bg-secondary"
        />
        <div className="overlay absolute hidden justify-center items-center w-[10rem] md:w-[11.5rem] lg:w-[13rem] h-[13rem] top-0 hover:backdrop-brightness-75 hover:backdrop-blur-sm ease-in-out duration-100">
          {savedItemShoppingCart ? (
            <button
              onClick={saveItemShoppingCart}
              className="bg-primary text-primary px-2 md:px-8 py-2 mx-2 rounded-2xl border-2 border-primary shadow-lg hover:scale-105 duration-100 ease-in-out"
            >
              <div className="flex gap-2 font-bold md:text-lg justify-center items-center">
                <FiShoppingCart size={22} />
                <span>Add to cart</span>
              </div>
            </button>
          ) : (
            <button
              onClick={saveItemShoppingCart}
              className="bg-primary text-primary px-2 md:px-8 py-2 mx-2 rounded-2xl shadow-lg hover:scale-105 duration-100 ease-in-out"
            >
              <div className="flex gap-2 font-bold md:text-lg justify-center items-center">
                <FiShoppingCart size={22} />
                <span>Add to cart</span>
              </div>
            </button>
          )}
        </div>
      </div>
      <div className="flex w-[7rem] md:w-[10rem] lg:w-[13rem] justify-start flex-col relative text-primary mb-8">
        <h3>{item.name}</h3>
        <h3 className="opacity-60">{item.author}</h3>
        <h3 className="pt-4">{item.price.toLocaleString()} USD</h3>
        <div
          onClick={saveItemFavourites}
          className="flex text-primary justify-end ml-32 md:ml-36 lg:ml-40 absolute"
        >
          {savedItemFavourites ? (
            <AiFillHeart size={25} className="cursor-pointer" />
          ) : (
            <AiOutlineHeart size={25} className="cursor-pointer" />
          )}
        </div>
      </div>
    </article>
  );
};

export default Item;
