import React from "react";
import { Link } from "react-router-dom";
import { AiOutlineSmile } from "react-icons/ai";

const FinalStep = () => {
  return (
    <div>
      <div className="max-w-[400px] mx-auto min-h-[600px] px-4 py-32 -mb-48">
        <div className="flex flex-col items-center gap-16 justify-center text-center">
          <h1 className="text-2xl font-bold text-primary">
            Thank you for your purchase!
          </h1>
          <span>
            <AiOutlineSmile size={100} />
          </span>
          <Link
            to="/"
            className="font-semibold bg-button text-button px-6 py-2 mx-2 rounded-2xl shadow-lg hover:opacity-50 duration-100 ease-in-out"
          >
            Close
          </Link>
        </div>
      </div>
    </div>
  );
};

export default FinalStep;
