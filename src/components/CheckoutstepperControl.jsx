import React from "react";

const CheckoutstepperControl = ({
  checkoutSteps,
  currentStep,
  handleClick,
}) => {
  return (
    <div className="flex justify-between m-auto max-w-[380px] my-12 font-semibold">
      <button
        onClick={() => handleClick()}
        className={`bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
      >
        Back
      </button>
      <button
        onClick={() => handleClick("next")}
        className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps?.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default CheckoutstepperControl;
