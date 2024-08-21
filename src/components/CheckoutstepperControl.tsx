import { FormikProps } from "formik";
import React, { useState } from "react";
import { FormValues } from "../routes/Checkout";
import { useShoppingCart } from "../context/ShoppingCartContext";

interface CheckoutstepperControlProps {
  checkoutSteps: string[];
  currentStep: number;
  handleClick: (direction: "next" | "previous") => void;
  formik: FormikProps<FormValues>;
}

const CheckoutstepperControl: React.FC<CheckoutstepperControlProps> = ({
  checkoutSteps,
  currentStep,
  handleClick,
  formik,
}) => {
  const [checked, setChecked] = useState(false);
  const { removeAllItemsShoppingCart } = useShoppingCart();

  const handleNextClick = async () => {
    // Validate form before proceeding
    const errors = await formik.validateForm();

    if (Object.keys(errors).length > 0) {
      formik.setTouched({
        name: true,
        address: true,
        postalCode: true,
        city: true,
        country: true,
      });
      return;
    }

    if (currentStep === checkoutSteps.length - 1) {
      await removeAllItemsShoppingCart();
    }

    handleClick("next");
  };

  return (
    <div className="flex justify-between m-auto max-w-[380px] my-12 font-semibold">
      <button
        type="button"
        onClick={() => handleClick("previous")}
        className={`bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out ${
          currentStep === 1 ? "cursor-not-allowed" : ""
        }`}
        disabled={currentStep === 1}
      >
        Back
      </button>

      <button
        type="button"
        onClick={handleNextClick}
        className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
      >
        {currentStep === checkoutSteps.length - 1 ? "Confirm" : "Next"}
      </button>
    </div>
  );
};

export default CheckoutstepperControl;
