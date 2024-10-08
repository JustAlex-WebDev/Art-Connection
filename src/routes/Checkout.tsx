import React, { useState } from "react";
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
import { useFormik } from "formik";
import * as Yup from "yup";

export interface FormValues {
  name: string;
  address: string;
  postalCode: string;
  city: string;
  country: string;
}

const Checkout: React.FC = () => {
  const { user } = UserAuth();
  const [currentStep, setCurrentStep] = useState<number>(1);
  const checkoutSteps = steps;

  // Formik Logics
  const formik = useFormik<FormValues>({
    initialValues: {
      name: "",
      address: "",
      postalCode: "",
      city: "",
      country: "",
    },
    validationSchema: Yup.object({
      name: Yup.string().required("Name is required"),
      address: Yup.string().required("Address is required"),
      postalCode: Yup.string().required("PostalCode is required"),
      city: Yup.string().required("City is required"),
      country: Yup.string().required("Country is required"),
    }),
    onSubmit: (values: FormValues) => {
      // Handle form submission
      console.log("Form values:", values);
    },
  });

  const handleClick = async (direction: "next" | "previous") => {
    if (direction === "next") {
      // Validate current step before moving to the next step
      const errors = await formik.validateForm();

      if (Object.keys(errors).length === 0) {
        setCurrentStep((prevStep) => {
          const newStep = prevStep + 1;
          return newStep > checkoutSteps?.length ? prevStep : newStep;
        });
      } else {
        formik.setTouched({
          name: true,
          address: true,
          postalCode: true,
          city: true,
          country: true,
        });
      }
    } else {
      setCurrentStep((prevStep) => {
        const newStep = prevStep - 1;
        return newStep < 1 ? prevStep : newStep;
      });
    }
  };

  const displayStep = (step: number): JSX.Element | null => {
    switch (step) {
      case 1:
        return <DetailsStep formik={formik} />;
      case 2:
        return <PaymentStep />;
      case 3:
        return <FinalStep />;
      default:
        return null;
    }
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
          transition={{ delay: 2.75, duration: 0.75 }}
        >
          <CheckoutForm
            checkoutSteps={checkoutSteps}
            currentStep={currentStep}
            handleClick={handleClick}
            displayStep={displayStep}
            formik={formik}
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
