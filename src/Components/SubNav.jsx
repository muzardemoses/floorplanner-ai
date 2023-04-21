import React from "react";
import logo from "../Images/logo.png";
import { Link } from "react-router-dom";

export const SubNav = () => {
  return (
    <div className=" bg-white w-60 flex flex-col justify-between items-center shadow py-10 h-screen">
      <img src={logo} alt="logo" className="h-8" />
      <Link to="/login">
        <button className="bg-teal-500 text-white h-10 px-14 rounded-md">
          Log Out
        </button>
      </Link>
    </div>
  );
};
