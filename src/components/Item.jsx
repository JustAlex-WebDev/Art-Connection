import React, { useState } from "react";
import { AiOutlineHeart, AiFillHeart } from "react-icons/ai";
import { FiShoppingCart } from "react-icons/fi";
import { UserAuth } from "../context/AuthContext";
import { db } from "../firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import { useInView } from "react-intersection-observer";
import { Link } from "react-router-dom";

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
          ? "grid items-center justify-center gap-4 animate-animateOp"
          : "grid items-center justify-center gap-4"
      }`}
    >
      <div className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] h-[13rem] hover:z-20">
        <div className="overflow-hidden group w-full">
          <Link to="">
            <img
              src={item.img}
              alt={item.name}
              className="w-[10rem] md:w-[11.5rem] lg:w-[13rem] object-scale-down h-[13rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer duration-300"
            />
          </Link>
          <div className="flex flex-col gap-4 items-center group-hover:translate-y-0 translate-y-[200%] bg-primary w-full mt-4 h-28 duration-300 ease-in-out text-primary">
            <div className="flex gap-4 opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500">
              {savedItemShoppingCart ? (
                <div
                  onClick={saveItemShoppingCart}
                  title="Remove from shopping cart"
                  className="flex gap-4 justify-center items-center cursor-pointer hover:opacity-50"
                >
                  <FiShoppingCart
                    size={22}
                    className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500"
                  />
                  <div>Remove from cart</div>
                </div>
              ) : (
                <div
                  onClick={saveItemShoppingCart}
                  title="Add to shopping cart"
                  className="flex gap-4 justify-center items-center cursor-pointer hover:opacity-50"
                >
                  <FiShoppingCart
                    size={22}
                    className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-500"
                  />
                  <div>Add to cart</div>
                </div>
              )}
            </div>
            <div className="opacity-0 group-hover:opacity-100 duration-300 ease-in-out delay-700">
              <div className="hover:opacity-50 cursor-pointer">Learn more</div>
            </div>
          </div>
        </div>
      </div>
      <div className="flex justify-between mb-8 w-[10rem] md:w-[11.5rem] lg:w-[13rem] h-28 z-10 text-primary">
        <div className="w-[80%]">
          <h3>{item.name}</h3>
          <h3 className="opacity-60">{item.author}</h3>
          <h3 className="pt-4">{item.price.toLocaleString()} USD</h3>
        </div>
        {savedItemFavourites ? (
          <AiFillHeart
            title="Remove Item"
            size={24}
            className="cursor-pointer"
          />
        ) : (
          <AiOutlineHeart
            onClick={saveItemFavourites}
            title="Save Item"
            size={24}
            className="cursor-pointer"
          />
        )}
      </div>
    </article>
  );
};

export default Item;
