import React, { useState } from "react";
import { useForm } from "react-hook-form";
import tickIcon from "../Images/tick.svg";

export const Next = () => {
  const [step, setStep] = useState(1);
  const { register, handleSubmit } = useForm();
  const [name, setName] = useState("");
  const [description, setDescription] = useState("");
  const [isPurchased, setIsPurchased] = useState(false);
  const [showAi, setShowAi] = useState(false);

  const onSubmitName = (data) => {
    setName(data.name);
    setStep(2);
  };

  const onSubmitDescription = (data) => {
    setDescription(data.description);
    setStep(3);
  };

  const onSubmitPurchase = () => {
    setIsPurchased(true);
    setStep(4);
  };

  const resetForm = () => {
    setName("");
    setDescription("");
    setIsPurchased(false);
    setStep(1);
  };

  const handleOpenAi = () => {
    setShowAi(true);
  };

  const handleCloseAi = () => {
    setShowAi(false);
  };

  const renderNameForm = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-xl font-semibold text-gray-700 mb-4 sm:text-lg">
        Enter a name for your floor plan
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitName)}
        className="flex flex-col space-y-4"
      >
        <input
          type="text"
          placeholder="Enter Name"
          {...register("name")}
          className="px-4 py-2 border rounded-md w-96 focus:ring-blue-100 focus:border-blue-300 focus:outline-none transition duration-200 ease-in-out sm:w-60"
          required
        />
        <button
          type="submit"
          className="px-4 py-2 w-32 bg-white text-blue-600 rounded-md hover:bg-gray-50 border border-blue-100 font-semibold transition duration-200 ease-in-out"
        >
          Next
        </button>
      </form>
    </div>
  );

  const renderDescriptionForm = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4 sm:text-lg sm:font-semibold">
        Step Two: Floor plan description
      </h2>
      <form
        onSubmit={handleSubmit(onSubmitDescription)}
        className="flex flex-col space-y-4"
      >
        <textarea
          placeholder="Enter Description"
          {...register("description")}
          className="px-4 py-2 border rounded-md w-96 focus:ring-blue-100 focus:border-blue-300 focus:outline-none transition duration-200 ease-in-out sm:w-60"
          required
        ></textarea>
        <button
          type="submit"
          className="px-4 py-2 w-32 bg-white text-blue-600 rounded-md hover:bg-gray-50 border border-blue-100 font-semibold transition duration-200 ease-in-out"
        >
          Next
        </button>
      </form>
    </div>
  );

  const renderPurchaseForm = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4 sm:text-xl sm:font-semibold">Step Three: Purchase</h2>
      <p className="text-lg font-medium text-gray-600">Name: {name}</p>
      <p className="text-lg font-medium text-gray-600">Description: {description}</p>
      <button
        onClick={onSubmitPurchase}
        className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
      >
        Purchase
      </button>
    </div>
  );

  const renderResults = () => (
    <div className="flex flex-col space-y-4 items-center">
      <h2 className="text-2xl font-bold mb-4 sm:font-semibold sm:text-lg">Results</h2>
      <p className="text-lg font-medium text-gray-600">Name: {name}</p>
      <p className="text-lg font-medium text-gray-600">Description: {description}</p>
      {isPurchased ? (
        <div>
          <img
            src="placeholder-image.jpg"
            alt="Placeholder"
            className="w-full rounded-md"
          />
        </div>
      ) : (
        <div className="flex flex-col space-y-4 items-center">
          <p className="text-lg font-medium">
            You have not purchased this floor plan yet.
          </p>
          <button
            onClick={resetForm}
            className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
          >
            Reset
          </button>
        </div>
      )}
    </div>
  );

  return (
    <div className="mt-5 mb-10">
      <button
        className="bg-yellow-500 h-10 w-24 rounded-lg transition duration-200 ease-in-out hover:bg-yellow-600"
        onClick={handleOpenAi}
      >
        Ai Test
      </button>
      <div>
        {showAi ? (
          <div className="fixed top-0 left-0 w-full h-full bg-gray-900 bg-opacity-50 flex items-center justify-center">
            <div className="flex flex-col space-y-4 items-center bg-white p-16 rounded-lg relative transition duration-200 ease-in-out sm:p-10">
              <div className="flex">
                {" "}
                <h1 className="text-3xl font-bold mb-4 sm:text-xl sm:font-semibold">
                  Floor Plan Generator
                </h1>
                <button
                  className="absolute text-xl font-bold top-5 right-5 text-gray-700"
                  onClick={handleCloseAi}
                >
                  X
                </button>
              </div>

              <div className="flex  items-center">
                <div
                  className={`w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center transition duration-200 ease-in-out sm:w-8 sm:h-8 ${
                    step >= 1 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {step <= 1 ? (
                    <span className="text-white text-center font-semibold">
                      1
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <img src={tickIcon} alt="Tick" className="h-6 w-6" />
                    </span>
                  )}
                </div>
                {/* a line */}
                <p
                  className={` w-32 h-0.5 transition duration-200 ease-in-out sm:w-20
            ${step >= 2 ? "bg-blue-500" : "bg-gray-300"}`}
                ></p>
                <div
                  className={`w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center transition duration-200 ease-in-out sm:w-8 sm:h-8 ${
                    step >= 2 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {step <= 2 ? (
                    <span className="text-white text-center font-semibold">
                      2
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <img src={tickIcon} alt="Tick" className="h-6 w-6" />
                    </span>
                  )}
                </div>
                <p
                  className={` w-32 h-0.5 transition duration-200 ease-in-out sm:w-20
            ${step >= 3 ? "bg-blue-500" : "bg-gray-300"}`}
                ></p>
                <div
                  className={`w-10 h-10 rounded-full bg-blue-500 flex items-center justify-center transition duration-200 ease-in-out sm:h-8 sm:w-8 ${
                    step >= 3 ? "bg-blue-500" : "bg-gray-300"
                  }`}
                >
                  {step <= 3 ? (
                    <span className="text-white text-center font-semibold">
                      3
                    </span>
                  ) : (
                    <span>
                      {" "}
                      <img src={tickIcon} alt="Tick" className="h-6 w-6" />
                    </span>
                  )}
                </div>
              </div>
              {step === 1 && renderNameForm()}
              {step === 2 && renderDescriptionForm()}
              {step === 3 && renderPurchaseForm()}
              {step === 4 && renderResults()}
            </div>
          </div>
        ) : null}
      </div>
    </div>
  );
};
