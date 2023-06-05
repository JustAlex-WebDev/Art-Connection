import React, { useState } from "react";
import { CheckoutContext } from "../context/CheckoutContext";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutstepperControl from "./CheckoutstepperControl";

const CheckoutForm = ({
  checkoutSteps,
  currentStep,
  handleClick,
  displayStep,
}) => {
  const [userData, setUserData] = useState("");
  const [finalData, setFinalData] = useState([]);

  return (
    <div className="main-div mb-24 mt-16 text-primary duration-300">
      <CheckoutStepper
        checkoutSteps={checkoutSteps}
        currentStep={currentStep}
      />

      <div>
        <CheckoutContext.Provider
          value={{ userData, setUserData, finalData, setFinalData }}
        >
          {displayStep(currentStep)}
        </CheckoutContext.Provider>
      </div>

      {currentStep !== checkoutSteps?.length && (
        <CheckoutstepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          checkoutSteps={checkoutSteps}
        />
      )}
    </div>
  );
};

export default CheckoutForm;
