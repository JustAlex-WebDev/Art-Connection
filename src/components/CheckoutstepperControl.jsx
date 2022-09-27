import React from "react";

const CheckoutstepperControl = () => {
  return (
    <div className="flex justify-around mt-4 mb-8 font-semibold">
      <button className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out">
        Back
      </button>
      <button className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out">
        Next
      </button>
    </div>
  );
};

export default CheckoutstepperControl;
