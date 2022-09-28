import React from "react";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import AccountStep from "../components/steps/AccountStep";
import DetailsStep from "../components/steps/DetailsStep";
import FinalStep from "../components/steps/FinalStep";
import PaymentStep from "../components/steps/PaymentStep";
import { steps } from "../data";

const Checkout = () => {
  const [currentStep, setCurrentStep] = useState(1);
  const checkoutSteps = steps;

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <AccountStep />;
      case 2:
        return <DetailsStep />;
      case 3:
        return <PaymentStep />;
      case 4:
        return <FinalStep />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= checkoutSteps?.length && setCurrentStep(newStep);
  };

  return (
    <div>
      <CheckoutForm
        checkoutSteps={checkoutSteps}
        currentStep={currentStep}
        handleClick={handleClick}
        displayStep={displayStep}
      />
    </div>
  );
};

export default Checkout;
