import React from "react";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import DetailsStep from "../components/steps/DetailsStep";
import FinalStep from "../components/steps/FinalStep";
import PaymentStep from "../components/steps/PaymentStep";
import { steps } from "../data";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";

const Checkout = () => {
  const { user } = UserAuth();
  const [currentStep, setCurrentStep] = useState(1);
  const checkoutSteps = steps;

  const displayStep = (step) => {
    switch (step) {
      case 1:
        return <DetailsStep />;
      case 2:
        return <PaymentStep />;
      case 3:
        return <FinalStep />;
      default:
    }
  };

  const handleClick = (direction) => {
    let newStep = currentStep;

    direction === "next" ? newStep++ : newStep--;
    newStep > 0 && newStep <= checkoutSteps?.length && setCurrentStep(newStep);
  };

  if (user) {
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
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Checkout;
