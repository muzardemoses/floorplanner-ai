import React, { useState } from "react";
import { NavLink, useNavigate } from "react-router-dom";
import logo from "../Images/logo.png";
import { auth, sendPasswordResetEmail } from "../Config/firebase.js";
import { toast } from "react-toastify";

export const Reset = () => {
  const [email, setEmail] = useState("");
  const [error, setError] = useState(null);
  const navigate = useNavigate();

  const handlePasswordReset = async (email) => {
    try {
      await sendPasswordResetEmail(auth, email, {
        url: "http://localhost:3000/login",
        handleCodeInApp: true,
      });
      //alert("Check your email for further instructions");
      toast.success("Check your email for further instructions");
      navigate("/");
    } catch (error) {
      alert(error.message);
      setError(error.message);
    }
  };

  const onSubmit = (event) => {
    event.preventDefault();
    handlePasswordReset(email);
  };

  return (
    <div>
      <div className="pt-24 h-screen flex flex-col items-center w-full text-center">
        <img src={logo} alt="logo" className="h-8" />
        <form onSubmit={onSubmit}>
          <label htmlFor="email" className="flex flex-col gap-1.5 mt-8">
            <p className="text-sm font-medium text-gray-700 text-left">
              Email:
            </p>
            <input
              className="form-btn h-11 border border-solid bg-white border-gray-300 font-normal 
             text-base text-gray-900 rounded-lg px-3.5 py-2.5 shadow-sm focus:border- 
          purple-300 focus:border focus:shadow-purple-100 focus:outline-none focus:ring-2 
              focus:ring-purple-200 disabled:background-gray-50 disabled:border-gray-300 
              disabled:text-gray-500 after:bg-white"
              id="email"
              type="email"
              placeholder="Enter your email"
              required
              value={email}
              onChange={(event) => setEmail(event.target.value)}
              {...(error && {
                style: {
                  border: "1px solid red",
                  width: "310px",
                },
              })}
            />
          </label>
          <div className="flex flex-col gap-4 mt-6">
            <button
              className="form-btn h-11 text-white    rounded-lg border-solid font-semibold text-base 
               border-teal-600 hover:bg-teal-700  bg-teal-600 border    
                hover:border-teal-700
               focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-100 
               focus:ring-offset-gray-100 flex items-center justify-center gap-3
            ,   disabled:cursor-not-allowed"
            >
              Send Password Reset Email
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};
