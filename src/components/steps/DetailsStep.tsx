import { FormikProps } from "formik";
import React from "react";
import { FormValues } from "../../routes/Checkout";

interface DetailsStepProps {
  formik: FormikProps<FormValues>;
}

const DetailsStep: React.FC<DetailsStepProps> = ({ formik }) => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-32">
        <h1 className="text-2xl font-bold text-primary">Personal Details</h1>
        <form onSubmit={formik.handleSubmit}>
          <div className="my-4">
            <label
              htmlFor="name"
              className={`text-primary cursor-pointer ${
                formik.touched.name && formik.errors.name ? "text-red-400" : ""
              }`}
            >
              {formik.touched.name && formik.errors.name
                ? formik.errors.name
                : "Name"}
            </label>
            <div className="mt-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                id="name"
                name="name"
                value={formik.values.name}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your name"
              />
            </div>

            <label
              htmlFor="address"
              className={`text-primary cursor-pointer ${
                formik.touched.address && formik.errors.address
                  ? "text-red-400"
                  : ""
              }`}
            >
              {formik.touched.address && formik.errors.address
                ? formik.errors.address
                : "Address"}
            </label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                id="address"
                name="address"
                value={formik.values.address}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Enter your address"
              />
            </div>

            <div className="flex flex-row gap-8">
              <div className="flex flex-col">
                <label
                  htmlFor="postalCode"
                  className={`text-primary cursor-pointer ${
                    formik.touched.postalCode && formik.errors.postalCode
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.postalCode && formik.errors.postalCode
                    ? formik.errors.postalCode
                    : "Postal Code"}
                </label>
                <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
                  <input
                    className="w-full p-2 border rounded-2xl bg-primary text-primary"
                    type="text"
                    id="postalCode"
                    name="postalCode"
                    value={formik.values.postalCode}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="4000"
                  />
                </div>
              </div>

              <div className="flex flex-col">
                <label
                  htmlFor="city"
                  className={`text-primary cursor-pointer ${
                    formik.touched.city && formik.errors.city
                      ? "text-red-400"
                      : ""
                  }`}
                >
                  {formik.touched.city && formik.errors.city
                    ? formik.errors.city
                    : "City"}
                </label>
                <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
                  <input
                    className="w-full p-2 border rounded-2xl bg-primary text-primary"
                    type="text"
                    id="city"
                    name="city"
                    value={formik.values.city}
                    onChange={formik.handleChange}
                    onBlur={formik.handleBlur}
                    placeholder="Plovdiv"
                  />
                </div>
              </div>
            </div>

            <label
              htmlFor="country"
              className={`text-primary cursor-pointer ${
                formik.touched.country && formik.errors.country
                  ? "text-red-400"
                  : ""
              }`}
            >
              {formik.touched.country && formik.errors.country
                ? formik.errors.country
                : "Country"}
            </label>
            <div className="my-2 mb-4 w-full relative rounded-2xl shadow-xl">
              <input
                className="w-full p-2 border rounded-2xl bg-primary text-primary"
                type="text"
                id="country"
                name="country"
                value={formik.values.country}
                onChange={formik.handleChange}
                onBlur={formik.handleBlur}
                placeholder="Bulgaria"
              />
            </div>
          </div>
        </form>
      </div>
    </div>
  );
};

export default DetailsStep;
