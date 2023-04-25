import React, { useState } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { signOut, auth } from "../Config/firebase.js";
import { logout, selectUser } from "../Features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { toast } from "react-toastify";

export const SubNav = ({ isSubNavVisible, setIsSubNavVisible }) => {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const SignOut = async () => {
    if (window.confirm("Are you sure you want to log out?")) {
      try {
        await signOut(auth);
        dispatch(logout);
        localStorage.removeItem("user");
        window.location.href = "/";
        toast.success("Logout successful");
      } catch (error) {
        alert(error.message);
      }
    }
  };

  return (
    <div
      className={` md:fixed h-screen  z-50 overflow-x-hidden transition-all ${
        isSubNavVisible ? "translate-x-0" : "-translate-x-full"
      }`}
    >
      <div
        //   style={{ display: isVisible ? "" : "none" , transition: "all 0.5s ease",
        //     transform: isVisible ? "translateX(0)" : "translateX(-100%)",

        // }}
        className=" bg-white w-60 flex flex-col justify-between items-center shadow py-10 h-screen hover:cursor-pointer md:w-48"
      >
        <img
          src={logo}
          alt="logo"
          className="h-8 md:h-6"
          onClick={() => navigate("/")}
        />

        <button
          className="bg-teal-500 text-white h-10 px-14 rounded-md hover:bg-teal-700
        transition duration-300 ease-in-out "
          onClick={SignOut}
        >
          Log Out
        </button>
      </div>
    </div>
  );
};
