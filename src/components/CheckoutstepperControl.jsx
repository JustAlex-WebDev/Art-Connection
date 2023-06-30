import React from "react";
import { useState } from "react";
import { useShoppingCart } from "../context/ShoppingCartContext";

const CheckoutstepperControl = ({
  checkoutSteps,
  currentStep,
  handleClick,
  formik,
}) => {
  const [checked, setChecked] = useState(false);
  const { removeAllItemsShoppingCart } = useShoppingCart();

  return (
    <form onSubmit={formik.handleSubmit}>
      <div className="flex justify-between m-auto max-w-[380px] my-12 font-semibold">
        <button
          onClick={() => handleClick()}
          className={`bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out ${
            currentStep === 1 ? "cursor-not-allowed" : ""
          }`}
        >
          Back
        </button>
        {formik.errors.name ||
        formik.errors.address ||
        formik.errors.postalCode ||
        formik.errors.city ||
        formik.errors.country ? (
          <button
            type="submit"
            onClick={() => handleClick()}
            className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out cursor-not-allowed"
          >
            {currentStep === checkoutSteps?.length - 1 ? "Confirm" : "Next"}
          </button>
        ) : (
          <div>
            {checked ? (
              <div>
                {currentStep === checkoutSteps?.length - 1 ? (
                  <button
                    type="submit"
                    onClick={() =>
                      handleClick("next") & removeAllItemsShoppingCart()
                    }
                    className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
                  >
                    {currentStep === checkoutSteps?.length - 1
                      ? "Confirm"
                      : "Next"}
                  </button>
                ) : (
                  <button
                    type="submit"
                    onClick={() => handleClick("next")}
                    className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
                  >
                    {currentStep === checkoutSteps?.length - 1
                      ? "Confirm"
                      : "Next"}
                  </button>
                )}
              </div>
            ) : (
              <div>
                <button
                  type="submit"
                  onClick={() => setChecked(true)}
                  className="bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
                >
                  Confirm
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </form>
  );
};

export default CheckoutstepperControl;
