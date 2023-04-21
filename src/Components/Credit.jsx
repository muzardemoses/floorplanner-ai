import React, { useState } from "react";

export const Credit = () => {
  const [credits, setCredits] = useState(0);
  const [purchaseAmount, setPurchaseAmount] = useState(0);
  const [showForm, setShowForm] = useState(false);
  const [firstName, setFirstName] = useState("");
  const [lastName, setLastName] = useState("");
  const [cardNumber, setCardNumber] = useState("");
  const [expirationDate, setExpirationDate] = useState("");
  const [cvv, setCvv] = useState("");

  const handlePurchase = () => {
    setShowForm(true);
  };

  const cancelPurchase = () => {
    //setPurchaseAmount(0);
    setShowForm(false);
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
  };

  return (
    <div className="max-w-3xl mx-auto">
      <h2 className="text-3xl font-bold mb-4">Credit Section</h2>
      <div className="flex items-center justify-between mb-4">
        <p className="text-lg font-medium">{credits} Credits</p>
        <button
          className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
          onClick={handlePurchase}
        >
          Purchase Credits
        </button>
      </div>
      {showForm ? (
        <form
          onSubmit={handleFormSubmit}
          className="border p-4 rounded-md mb-4"
        >
          <h3 className="text-xl font-bold mb-2">Purchase Credits</h3>
          <div className="flex items-center mb-4">
            <label htmlFor="amount" className="mr-2">
              Amount:
            </label>
            <input
              type="number"
              id="amount"
              className="border rounded-md px-2 py-1 w-16"
              value={purchaseAmount}
              onChange={(event) =>
                setPurchaseAmount(parseInt(event.target.value, 10))
              }
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
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mr-4 mb-4 md:mb-0">
              <label htmlFor="first-name" className="block mb-1">
                First Name:
              </label>
              <input
                type="text"
                id="first-name"
                className="border rounded-md px-2 py-1 w-full"
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
                className="border rounded-md px-2 py-1 w-full"
                value={lastName}
                onChange={(event) => setLastName(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex flex-col md:flex-row">
            <div className="flex-1 mr-4 mb-4 md:mb-0">
              <label htmlFor="card-number" className="block mb-1">
                Card Number:
              </label>
              <input
                type="text"
                id="card-number"
                className="border rounded-md px-2 py-1 w-full"
                value={cardNumber}
                onChange={(event) => setCardNumber(event.target.value)}
                required
              />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="expiration-date" className="block mb-1">
                Expiration Date:
              </label>
              <input
                type="text"
                id="expiration-date"
                className="border rounded-md px-2 py-1 w-full"
                value={expirationDate}
                onChange={(event) => setExpirationDate(event.target.value)}
                required
              />
            </div>
            <div className="flex-1 mb-4 md:mb-0">
              <label htmlFor="cvv" className="block mb-1">
                CVV:
              </label>
              <input
                type="text"
                id="cvv"
                className="border rounded-md px-2 py-1 w-full"
                value={cvv}
                onChange={(event) => setCvv(event.target.value)}
                required
              />
            </div>
          </div>
          <div className="flex gap-6 mt-7">
            <button
              type="button"
              className="px-4 py-2 bg-red-500 text-white rounded-md hover:bg-red-600"
              onClick={cancelPurchase}
            >
              Cancel
            </button>
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 text-white rounded-md hover:bg-blue-600"
            >
              Purchase
            </button>
          </div>
        </form>
      ) : null}
    </div>
  );
};
