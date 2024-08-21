import React, { useEffect, useRef, useState } from "react";

interface Step {
  description: string;
  completed: boolean;
  highlighted: boolean;
  selected: boolean;
}

interface CheckoutStepperProps {
  checkoutSteps: string[];
  currentStep: number;
}

const CheckoutStepper: React.FC<CheckoutStepperProps> = ({
  checkoutSteps,
  currentStep,
}) => {
  const [newStep, setNewStep] = useState<Step[]>([]);
  const stepRef = useRef<Step[] | null>(null);

  const updateStep = (stepNumber: number, steps: Step[]): Step[] => {
    const newSteps = [...steps];
    let count = 0;

    while (count < newSteps.length) {
      if (count === stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: true,
          selected: true,
          completed: true,
        };
      } else if (count < stepNumber) {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: true,
          completed: true,
        };
      } else {
        newSteps[count] = {
          ...newSteps[count],
          highlighted: false,
          selected: false,
          completed: false,
        };
      }
      count++;
    }
    return newSteps;
  };

  useEffect(() => {
    const stepsState: Step[] = checkoutSteps?.map((step, index) => ({
      description: step,
      completed: false,
      highlighted: index === 0,
      selected: index === 0,
    }));

    stepRef.current = stepsState;
    const current = updateStep(currentStep - 1, stepRef.current);
    setNewStep(current);
  }, [checkoutSteps, currentStep]);

  return (
    <div className="mx-4 p-4 flex justify-between items-center font-semibold">
      {newStep.map((step, index) => (
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
              className={`rounded-full duration-300 border-2 border-primary h-8 w-8 sm:h-11 sm:w-11 md:h-12 md:w-12 flex items-center justify-center py-3 ${
                step.selected
                  ? "bg-button text-button"
                  : "opacity-90 border-gray-400"
              }`}
            >
              {step.completed ? <span>&#10003;</span> : index + 1}
            </div>
            <div
              className={`absolute top-0 text-center mt-12 sm:mt-14 md:mt-16 uppercase text-xs sm:text-sm ${
                step.highlighted ? "" : "opacity-70"
              }`}
            >
              {step.description}
            </div>
          </div>
          <div
            className={`flex-auto border-t-2 transition duration-300 ease-in-out ${
              step.completed ? "border-primary" : "border-gray-400"
            }`}
          ></div>
        </div>
      ))}
    </div>
  );
};

export default CheckoutStepper;
