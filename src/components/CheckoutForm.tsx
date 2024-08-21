import { FormikProps } from "formik";
import React from "react";
import { FormValues } from "../routes/Checkout";
import CheckoutStepper from "./CheckoutStepper";
import CheckoutstepperControl from "./CheckoutstepperControl";

interface CheckoutFormProps {
  checkoutSteps: string[];
  currentStep: number;
  handleClick: (direction: "next" | "previous") => void;
  displayStep: (step: number) => JSX.Element | null;
  formik: FormikProps<FormValues>;
}

const CheckoutForm: React.FC<CheckoutFormProps> = ({
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
