import React from "react";

const CheckoutstepperControl = () => {
  return (
    <div className="flex justify-around mt-4 mb-8">
      <button className="bg-red-400 uppercase py-2 px-4 rounded-2xl cursor-pointer hover:bg-red-600">
        Back
      </button>
      <button className="bg-green-400 uppercase py-2 px-4 rounded-2xl cursor-pointer hover:bg-green-600">
        Next
      </button>
    </div>
  );
};

export default CheckoutstepperControl;
