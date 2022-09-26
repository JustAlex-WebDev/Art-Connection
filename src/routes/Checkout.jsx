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
        return <FinalStep />;
      default:
    }
  };

  return (
    <div>
      <CheckoutForm checkoutSteps={checkoutSteps} currentStep={currentStep} />
    </div>
  );
};

export default Checkout;
