import React from "react";
import { useState } from "react";
import CheckoutForm from "../components/CheckoutForm";
import DetailsStep from "../components/steps/DetailsStep";
import FinalStep from "../components/steps/FinalStep";
import PaymentStep from "../components/steps/PaymentStep";
import { steps } from "../data";
import { UserAuth } from "../context/AuthContext";
import { Navigate } from "react-router-dom";
import PageTransition from "../components/PageTransition";
import Navbar from "../components/Navbar";
import Slides from "../components/Slides";
import Footer from "../components/Footer";
import { motion as m } from "framer-motion";

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
      <>
        <PageTransition />
        <Navbar />
        <Slides />
        <m.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 2.5, duration: 0.5 }}
        >
          <CheckoutForm
            checkoutSteps={checkoutSteps}
            currentStep={currentStep}
            handleClick={handleClick}
            displayStep={displayStep}
          />
        </m.div>
        <Footer />
      </>
    );
  } else {
    return <Navigate to="/signin" />;
  }
};

export default Checkout;
