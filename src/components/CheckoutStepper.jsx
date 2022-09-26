import React, { useState, useEffect, useRef } from "react";

const CheckoutStepper = ({ checkoutSteps, currentStep }) => {
  const [newStep, setNewStep] = useState([]);
  const stepRef = useRef();

  const updateStep = (stepNumber, checkoutSteps) => {
    const newSteps = [...checkoutSteps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
        count++;
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
        count++;
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
        count++;
      }
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState = checkoutSteps.map((step, index) => {
      Object.assign(
        {},
        {
          description: step,
          completed: false,
          highlighted: index === 0 ? true : false,
          selected: index === 0 ? true : false,
        }
      );
    });

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [checkoutSteps, currentStep]);

  return (
    <div className="mx-4 p-4 flex justify-between items-center">
      {newStep?.map((step, index) => (
        <div
          key={index}
          className={
            index !== newStep.length - 1
              ? "w-full flex items-center"
              : "flex items-center"
          }
        >
          <div className="relative flex flex-col items-center">
            <div
              className={`rounded-full transition duration-500 ease-in-out border-2 border-grey-300 h-12 w-12 flex items-center justify-center py-3 ${
                step.selected ? "bg-green-600" : ""
              }`}
            >
              {step.completed ? <span>&#10003;</span> : index + 1}
            </div>
            <div
              className={`absolute top-0 text-center mt-16 w-32 uppercase ${
                step.highlighted ? "text-grey-900" : "text-grey-400"
              }`}
            >
              {step.description}kk
            </div>
          </div>
          <div className="flex-auto border-t-2 transition duration-500 ease-in-out"></div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutStepper;
