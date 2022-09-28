import React, { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";
import { UserAuth } from "../../context/AuthContext";

const AccountStep = () => {
  const { userData, setUserData } = useContext(CheckoutContext);
  const { user } = UserAuth();

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div className="mt-20">
      AccountStep
      <div className="flex gap-2">
        <input
          className="border-2"
          type="text"
          onChange={handleChange}
          value={userData["username"] || ""}
          name={"username"}
          placeholder={user?.email}
        />
        <input
          className="border-2"
          type="password"
          onChange={handleChange}
          value={userData["password"] || ""}
          name={"password"}
          placeholder="Password"
        />
      </div>
    </div>
  );
};

export default AccountStep;
