import React, { useContext } from "react";
import { CheckoutContext } from "../../context/CheckoutContext";

const DetailsStep = () => {
  const { userData, setUserData } = useContext(CheckoutContext);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setUserData({ ...userData, [name]: value });
  };

  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-32">
        <h1 className="text-2xl font-bold text-primary">Personal Details</h1>
        <form>
          <div className="my-4">
            <label className="text-primary">First Name</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                onChange={handleChange}
                value={userData["firstName"] || ""}
                name={"firstName"}
              />
            </div>
            <label className="text-primary">Last Name</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                onChange={handleChange}
                value={userData["lastName"] || ""}
                name={"lastName"}
              />
            </div>
            <label className="text-primary">Address</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                onChange={handleChange}
                value={userData["address"] || ""}
                name={"address"}
              />
            </div>
            <div className="flex flex-row gap-8">
              <div className="flex flex-col">
                <label className="text-primary flex flex-col">
                  Postal Code
                </label>
                <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
                  <input
                    className="w-full p-2 border rounded-2xl bg-primary text-primary"
                    type="text"
                    onChange={handleChange}
                    value={userData["postalCode"] || ""}
                    name={"postalCode"}
                  />
                </div>
              </div>
              <div className="flex flex-col">
                <label className="text-primary">City</label>
                <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
                  <input
                    className="w-full p-2 border rounded-2xl bg-primary text-primary"
                    type="text"
                    onChange={handleChange}
                    value={userData["city"] || ""}
                    name={"city"}
                  />
                </div>
              </div>
            </div>
            <label className="text-primary">Country</label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                onChange={handleChange}
                value={userData["country"] || ""}
                name={"country"}
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsStep;
