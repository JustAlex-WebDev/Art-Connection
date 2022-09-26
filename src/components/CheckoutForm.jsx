import React from "react";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutstepperControl from "./CheckoutstepperControl";

const CheckoutForm = ({ checkoutSteps, currentStep }) => {
  return (
    <div className="main-div mb-24 mt-28 bg-red-300">
      <CheckoutStepper
        checkoutSteps={checkoutSteps}
        currentStep={currentStep}
      />
      <CheckoutstepperControl />
    </div>
  );
};

export default CheckoutForm;
