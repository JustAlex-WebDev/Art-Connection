import React from "react";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutstepperControl from "./CheckoutstepperControl";

const CheckoutForm = ({
  checkoutSteps,
  currentStep,
  handleClick,
  displayStep,
  formik,
}) => {
  return (
    <div className="main-div mb-24 mt-16 text-primary duration-300">
      <CheckoutStepper
        checkoutSteps={checkoutSteps}
        currentStep={currentStep}
      />

      <div>{displayStep(currentStep)}</div>

      {currentStep !== checkoutSteps?.length && (
        <CheckoutstepperControl
          handleClick={handleClick}
          currentStep={currentStep}
          checkoutSteps={checkoutSteps}
          formik={formik}
        />
      )}
    </div>
  );
};

export default CheckoutForm;
