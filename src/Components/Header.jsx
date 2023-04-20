import React from "react";
import { Link, NavLink } from "react-router-dom";
import logo from "../Images/logo.png";

export const Header = () => {
  return (
    <div className=" flex justify-between px-16 py-5 shadow bg-white">
      <img src={logo} alt="logo" className=" h-12 " />
      <div className="flex gap-6 items-center font-semibold text-lg">
        <NavLink
          to="/about"
          className={({ isActive }) =>
            isActive ? " text-teal-600" : " text-teal-500"
          }
        >
          About
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-teal-600" : " text-teal-500"
          }
        >
          Showcase
        </NavLink>
        <NavLink
          to="/"
          className={({ isActive }) =>
            isActive ? " text-teal-600" : " text-teal-500"
          }
        >
          Pricing
        </NavLink>
      </div>
      <div className="flex gap-4 items-center font-semibold">
        <Link to="/login">
          <button className="bg-teal-500 text-white h-10 px-4 rounded-md">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="bg-teal-500 text-white h-10 px-4 rounded-md">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};
