import React, { useState } from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";
import { signOut, auth } from "../Config/firebase.js";
import { logout, selectUser } from "../Features/userSlice";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export const SubNav = () => {
  const dispatch = useDispatch();
  const navigate = useNavigate();
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  const SignOut = async () => {
    try {
      await signOut(auth);
      dispatch(logout);
      localStorage.removeItem("user");
      window.location.href = "/";
    } catch (error) {
      alert(error.message);
    }
  };
  return (
    <div className=" bg-white w-60 flex flex-col justify-between items-center shadow py-10 h-screen hover:cursor-pointer">
      <img
        src={logo}
        alt="logo"
        className="h-8"
        onClick={() => navigate("/")}
      />

      <button
        className="bg-teal-500 text-white h-10 px-14 rounded-md"
        onClick={SignOut}
      >
        Log Out
      </button>
    </div>
  );
};
