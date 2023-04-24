import React, { useEffect, useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import logo from "../Images/logo.png";

export const Header = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const handleMenu = () => {
    const headerLinks = document.querySelector(".header-links");
    headerLinks.classList.toggle("open");

    const linkItems = document.querySelectorAll(".link-item");
    linkItems.forEach((item) => {
      item.addEventListener("click", () => {
        headerLinks.classList.remove("open");
        setMenuOpen(false);
      });
    });
    setMenuOpen((prev) => !prev);
  };
  const user = useSelector(selectUser);

  const handleClick = (e) => {
    e.preventDefault();
    const elementId = e.target.getAttribute("href");
    const element = document.querySelector(elementId);
    element.scrollIntoView({ behavior: "smooth" });
  };

  const [isSticky, setIsSticky] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.pageYOffset > 100) {
        setIsSticky(true);
      } else {
        setIsSticky(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);
  return (
    <div className={`" flex justify-between px-16 py-5 shadow bg-white lg:px-10 sm:px-2" ${
        isSticky ? "sticky top-0 z-50" : ""
    }`}>
      <img src={logo} alt="logo" className=" h-12  lg:h-9 md:h-10 sm:w-48" />
      <div
        className="header-links md:bg-gray-300 md:bg-opacity-50 md:backdrop-blur-2xl	md:shadow-xl md:flex-col md:justify-start md:gap-10 md:pt-10 flex justify-between w-full ml-80 xl:ml-40 lg:ml-28 transition 
        duration-500 ease-in-out
      "
      >
        <div className=" flex gap-6 items-center font-semibold text-lg md:flex-col">
          <a
            href="#about"
            className=" link-item text-teal-500 transition duration-500 ease-in-out hover:text-teal-700
        "
            onClick={handleClick}
          >
            About
          </a>
          <a
            href="#showcase"
            className="link-item text-teal-500 transition duration-500 ease-in-out hover:text-teal-700"
            onClick={handleClick}
          >
            Showcase
          </a>
          <a
            href="#pricing"
            className="link-item text-teal-500 transition duration-500 ease-in-out hover:text-teal-700"
            onClick={handleClick}
          >
            Pricing
          </a>
        </div>
        <div className="flex items-center justify-center ">
          {!user ? (
            <div className="flex gap-4 items-center font-semibold md:flex-col md:gap-7">
              <Link to="/login">
                <button className="bg-teal-500 text-white h-10 px-4 rounded-md transition duration-500 ease-in-out hover:bg-teal-700">
                  Login
                </button>
              </Link>
              <Link to="/register">
                <button className="bg-teal-500 text-white h-10 px-4 rounded-md transition duration-500 ease-in-out hover:bg-teal-700">
                  Sign Up
                </button>
              </Link>
            </div>
          ) : (
            <Link to="/dashboard">
              <button
                className="bg-teal-500 text-white h-10 px-4 rounded-md transition duration-500 ease-in-out hover:bg-teal-700 
            link-item 
            "
              >
                Dashboard
              </button>
            </Link>
          )}
        </div>
      </div>

      <div>
        <p className="hidden md:block h-2"></p>
        <button
          id="menu-btn"
          onClick={handleMenu}
          className={`hamburger  ${
            menuOpen ? "open" : ""
          } hidden md:block focus:outline-none z-10 `}
        >
          <span className="harburger-top bg-gray-800 transition duration-500 ease-in-out  dark:bg-gray-300"></span>
          <span className="harburger-middle bg-gray-800 transition duration-500 ease-in-out  dark:bg-gray-300"></span>
          <span className="harburger-bottom bg-gray-800 transition duration-500 ease-in-out  dark:bg-gray-300"></span>
        </button>
      </div>
    </div>
  );
};
