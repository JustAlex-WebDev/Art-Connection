import React, { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import { AiOutlineMail, AiFillLock } from "react-icons/ai";

const AccountStep = () => {
  const { userData, setUserData } = useContext(CheckoutContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-60">
        <h1 className="text-2xl font-bold text-primary">Account Information</h1>
        <form>
          <div className="my-4">
            <label className="text-primary">Email</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="email"
                onChange={handleChange}
                value={userData["email"] || ""}
                name={"email"}
              />
              <AiOutlineMail className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
          <div className="my-4">
            <label className="text-primary">Password</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="password"
                onChange={handleChange}
                value={userData["password"] || ""}
                name={"password"}
              />

              <AiFillLock className="absolute right-2 top-3 text-gray-400" />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default AccountStep;
