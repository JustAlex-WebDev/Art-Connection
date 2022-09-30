import React, { useContext, useState, useEffect } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import { RiArrowDropDownLine } from "react-icons/ri";
import { UserAuth } from "../../context/AuthContext";
import { doc, onSnapshot } from "firebase/firestore";
import { db } from "../../firebase";

const PaymentStep = () => {
  const { userData, setUserData } = useContext(CheckoutContext);
  const [isActive, setIsActive] = useState(false);
  const [selected, setSelected] = useState("");
  const options = ["Cash", "Credit Card"];
  const [items, setItems] = useState([]);
  const { user } = UserAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setItems(doc.data()?.shoppingCart);
    });
  }, [user?.email]);

  useEffect(() => {
    const localData = localStorage.getItem("PaymentMethod");
    setSelected(JSON.parse(localData));
  }, []);

  useEffect(() => {
    localStorage.setItem("PaymentMethod", JSON.stringify(selected));
  }, [selected]);

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-72">
        <h1 className="text-2xl font-bold text-primary">Payment</h1>
        <div>
          <div className="my-4">
            <label className="text-primary font-semibold">Order Summary</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <div className="flex flex-col">
                {/* {items?.map((item) => (
                  // The items from the sopping cart
                ))} */}
              </div>
            </div>
          </div>
          <div className="my-4">
            <label className="text-primary font-semibold">
              How would you like to pay for your order?
            </label>
            <div className="dropdown border my-2 mb-4 w-full relative rounded-2xl shadow-xl z-10">
              <div
                onClick={() => setIsActive(!isActive)}
                className="dropdown-btn py-2 px-3 flex items-center justify-between font-semibold cursor-pointer ease-in-out duration-300 relative"
              >
                {selected}
                <span>
                  <RiArrowDropDownLine
                    size={25}
                    className="right-4 top-2 absolute"
                  />
                </span>
              </div>
              {isActive && (
                <div className="dropdown-content border absolute w-full rounded-2xl left-0 top-[110%] bg-primary shadow-xl">
                  {options?.map((option, index) => (
                    <div
                      key={index}
                      onClick={() => {
                        setSelected(option);
                        setIsActive(false);
                      }}
                      className="dropdown-item p-3 cursor-pointer hover:opacity-50"
                    >
                      {option}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PaymentStep;
