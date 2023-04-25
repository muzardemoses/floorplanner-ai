import React, { useState } from "react";
import cardNumIcon from "../Images/blank_card_icon.svg";
import cVVIcon from "../Images/cvv_side_card_icon.svg";
import creditsIcon from "../Images/credits.svg";
import { toast } from "react-toastify";

export const Credit = ({ credits, setCredits }) => {
  // const [credits, setCredits] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const formatCardNumber = (cardNumber) => {
    return cardNumber
      .replace(/[^\d]/g, "")
      .replace(/(.{4})/g, "$1 ")
      .trim();
  };

  const formatExpirationDate = (expirationDate) => {
    return expirationDate
      .replace(/[^\d]/g, "")
      .replace(/(.{2})/g, "$1/")
      .trim()
      .slice(0, 5);
  };

  <input
    type="text"
    id="card-number"
    className="border rounded-md px-2 py-1 w-full pl-14 h-10"
    value={formatCardNumber(cardNumber)}
    onChange={(event) => setCardNumber(event.target.value)}
    required
  />;

   

  const handlePurchase = () => {
    setShowForm(true);
  };

  const cancelPurchase = () => {
    //setPurchaseAmount(0);
    setShowForm(false);
    toast.error("Purchase cancelled");
  };

  const handleFormSubmit = (event) => {
    event.preventDefault();

    // TODO: Submit form data to server and update credits state
    setCredits(credits + purchaseAmount);

    // Clear form data and hide form
    setPurchaseAmount(0);
    setFirstName("");
    setLastName("");
    setCardNumber("");
    setExpirationDate("");
    setCvv("");
    setShowForm(false);
    toast.success("Purchase successful!");
  };

  return (
    <div className="transition-all duration-200 ease-in-out">
      <div className=" mb-4">
        {/* <div className="text-lg font-medium flex gap-1">
          <img src={creditsIcon} alt="" className=" h-7 " />
          <span> {credits} Credits</span>
        </div> */}
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
          onClick={handlePurchase}
        >
          Purchase Credits
        </button>
      </div>
      <div className="max-w-3xl mt-5 bg-white border-none  rounded-md shadow-md">
        {showForm ? (
          <form onSubmit={handleFormSubmit} className=" p-4  mb-4">
            <h3 className="text-xl font-bold mb-6">Purchase Credits</h3>
            <div className="flex items-center mb-4">
              <label htmlFor="amount" className="mr-2">
                Amount:
              </label>
              <input
                type="number"
                id="amount"
                className="border rounded-md px-2 py-1 w-24 focus:ring-green-600 focus:border-green-300 focus:outline-none transition duration-200 ease-in-out"
                value={purchaseAmount}
                onChange={(event) =>
                  setPurchaseAmount(parseInt(event.target.value, 10))
                }
                required
              />
            </div>
            <div className="flex items-center mb-4">
              <label htmlFor="price" className="mr-2">
                Price:
              </label>
              <span className="text-lg font-medium">
                {purchaseAmount * 1.99} USD
              </span>
            </div>
            <h3 className="text-lg font-bold mb-2">Billing Information</h3>
            <div className="flex flex-col md:flex-row sm:flex-col gap-4">
              <div className="flex-1  md:mb-0">
                <label htmlFor="first-name" className="block mb-1">
                  First Name:
                </label>
                <input
                  type="text"
                  id="first-name"
                  className="border rounded-md px-2 py-1 w-full focus:ring-green-600 focus:border-green-300 focus:outline-none transition duration-200 ease-in-out"
                  value={firstName}
                  onChange={(event) => setFirstName(event.target.value)}
                  required
                />
              </div>
              <div className="flex-1 mb-4 md:mb-0">
                <label htmlFor="last-name" className="block mb-1">
                  Last Name:
                </label>
                <input
                  type="text"
                  id="last-name"
                  className="border rounded-md px-2 py-1 w-full focus:ring-green-600 focus:border-green-300 focus:outline-none transition duration-200 ease-in-out"
                  value={lastName}
                  onChange={(event) => setLastName(event.target.value)}
                  required
                />
              </div>
            </div>
            <div className="flex justify-between mt-5 md:flex-col md:gap-6">
              <div className="mr-4 mb-4 md:mb-0">
                <label htmlFor="card-number" className="block mb-1">
                  Card Number:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="card-number"
                    className="border rounded-md px-2 py-1 w-60 pl-14 h-10 focus:ring-green-600 focus:border-green-300 focus:outline-none transition duration-200 ease-in-out"
                    value={formatCardNumber(cardNumber)}
                    onChange={(event) => setCardNumber(event.target.value)}
                    required
                    maxLength={19} // Set the maximum length to 16
                    //pattern="[0-9]*" // Restrict the input to only numbers
                  />
                  <img
                    src={cardNumIcon}
                    alt=""
                    className="absolute inset-y-0 left-2 top-2"
                  />
                </div>
              </div>
              <div className="flex gap-6 sm:flex-col">
              <div className=" mb-4 md:mb-0">
                <label htmlFor="expiration-date" className="block mb-1">
                  Expiration Date:
                </label>
                <input
                  type="text"
                  id="expiration-date"
                  className="border rounded-md px-2 py-1 w-36 h-10 focus:ring-green-600 focus:border-green-300 focus:outline-none transition duration-200 ease-in-out"
                  value={formatExpirationDate(expirationDate)}
                  onChange={(event) => setExpirationDate(event.target.value)}
                  required
                  maxLength={5} // Set the maximum length to 5
                  //pattern="[0-9]*" // Restrict the input to only numbers
                />
              </div>
              <div className=" mb-4 md:mb-0">
                <label htmlFor="cvv" className="block mb-1">
                  CVV:
                </label>
                <div className="relative">
                  <input
                    type="text"
                    id="cvv"
                    className="border rounded-md px-2 py-1 w-32 pl-14 h-10 focus:ring-green-600 focus:border-yellow-300 focus:outline-none transition duration-200 ease-in-out"
                    value={cvv}
                    onChange={(event) => setCvv(event.target.value)}
                    required
                    maxLength={3} // Set the maximum length to 3
                    pattern="[0-9]*" // Restrict the input to only numbers
                  />
                  <img
                    src={cVVIcon}
                    alt=""
                    className="absolute inset-y-0 left-2 top-2"
                  />
                </div>
              </div>
              </div>

              
            </div>
            <div className="flex gap-6 mt-7">
              <button
                type="button"
                className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600 transition duration-200 ease-in-out"
                onClick={cancelPurchase}
              >
                Cancel
              </button>
              <button
                type="submit"
                className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600 transition duration-200 ease-in-out"
              >
                Purchase
              </button>
            </div>
          </form>
        ) : null}
      </div>
    </div>
  );
};
