import React from "react";
import { Link } from "react-router-dom";
import { useShoppingCart } from "../../context/ShoppingCartContext";

const PaymentStep = () => {
  const { shoppingCart } = useShoppingCart();

  let totalPrice = 0;
  let totalItems = 0;

  return (
    // <div>
    //   <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-36">
    //     <h1 className="text-2xl font-bold text-primary">Payment</h1>
    //     <div className="my-4">
    //       <label className="text-primary font-semibold">Order Summary</label>
    //       <div className="my-2 mb-4 w-full relative">
    //         <div className="flex flex-col gap-8 bg-red-300 duration-300">
    // {shoppingCart?.map((item) => (
    //   <div className="inline-flex" key={item.id}>
    //     <img
    //       className="w-[5rem] md:w-[6.5rem] lg:w-[8rem] object-scale-down h-[8rem] md:h-[9.5] lg:h-[11] shadow-xl bg-secondary"
    //       src={item.img}
    //       alt={item.img}
    //     />
    //     <div className="flex flex-col px-4 font-semibold w-[13rem] md:w-[14.5rem] lg:w-[17rem] h-[7.5rem] text-primary text-sm md:text-base lg-text-lg">
    //       <h3>{item.name}</h3>
    //       <h3 className="opacity-60">{item.author}</h3>
    //       <h3 className="mb-10">{item.price.toLocaleString()} USD</h3>
    //       <h3>x {item.numberOfUnits}</h3>
    //     </div>
    //   </div>
    // ))}
    //         </div>
    //         <div className="flex flex-col my-6">
    //           <h3 className="text-base lg:text-lg font-semibold text-primary opacity-80">
    //             {shoppingCart?.forEach(
    //               (item) => (totalItems += item.numberOfUnits),
    //               0
    //             )}
    //             Total items:{" "}
    //             <span className="font-bold opacity-100">
    //               {totalItems} items
    //             </span>
    //           </h3>
    //           <span className="text-base lg:text-lg font-semibold text-primary opacity-90">
    //             {shoppingCart?.forEach(
    //               (item) => (totalPrice += item.price * item.numberOfUnits),
    //               0
    //             )}
    //             Total price:{" "}
    //             <span className="font-bold opacity-100">
    //               {totalPrice.toLocaleString()} USD
    //             </span>
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //   </div>
    // </div>
    <div>
      <div className="max-w-[400px] m-auto min-h-[600px] px-4 py-32 -mb-32">
        <h1 className="text-2xl font-bold text-primary">Payment</h1>
        <h3 className="opacity-90 mt-2 mb-4">Order Summary</h3>
        <div className="flex flex-col">
          {shoppingCart?.map((item) => (
            <div
              key={item.id}
              className="group my-4 flex flex-col xxxsm:flex-row justify-start items-center gap-6"
            >
              <Link to="">
                <img
                  className="w-[8rem] md:w-[9.5rem] lg:w-[11rem] object-scale-down h-[11rem] shadow-lg bg-secondary group-hover:animate-panImage hover:cursor-pointer duration-300"
                  src={item.img}
                  alt={item.name}
                />
              </Link>
              <div className="flex flex-col justify-between font-semibold text-base xxxsm:text-base text-primary w-full xxxsm:w-40 h-[11rem] duration-300">
                <div>
                  <h3>{item.name}</h3>
                  <h3 className="opacity-60">{item.author}</h3>
                  <h3>{item.price.toLocaleString()} USD</h3>
                </div>
                <div className="flex gap-4 items-center">
                  <h3>x {item.numberOfUnits}</h3>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
