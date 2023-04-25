import React, { useState, useEffect } from "react";
import { useSelector } from "react-redux";
import { selectUser } from "../Features/userSlice";
import { useNavigate } from "react-router-dom";
import { Projects } from "../Components/Projects";
import { Next } from "../Components/Next";
import { Credit } from "../Components/Credit";
import creditsIcon from "../Images/credits.svg";

export const Dashboard = () => {
  const navigate = useNavigate();
  const user = useSelector(selectUser);
  const [showUserDetails, setShowUserDetails] = useState(false);
  const [credits, setCredits] = useState(0);

  useEffect(() => {
    if (!user) {
      navigate("/");
    }
    return () => {};
  }, [user]);
  useEffect(() => {
    const timer = setTimeout(() => {
      setShowUserDetails(true);
    }, 3000);
    return () => clearTimeout(timer);
  }, []);

  //<Credit credits={credits} setCredits={setCredits} />;

  // const handleLogoutClick = () => {
  //   const confirmLogout = window.confirm("Are you sure you want to logout?");
  //   if (confirmLogout) {
  //     // Logout logic here
  //   }
  // };

  return (
    <div className="container mx-auto pt-24 px-8 flex flex-col gap-8 sm:px-1 sm:pt-20">
      <div className=" sm:px-8 flex justify-between sm:flex-col gap-4">
        {showUserDetails ? (
          <div> 
            <h2 className="text-2xl font-semibold text-gray-700 sm:text-xl">
              Welcome
              <span className="text-green-500"> {user.user.displayName}</span>
            </h2>
            <h3 className="text-base font-medium text-gray-300 ">
              {user.user.email}
            </h3>
          </div>
        ) : (
          <h1>Loading...</h1>
        )}
         {/* credits */}
         <div className="text-lg font-medium flex gap-1 lg:order-1">
          <img src={creditsIcon} alt="" className=" h-7 " />
          <span> {credits} Credits</span>
        </div>
      </div>

      <div className=" w-full px-5   md:px-2 sm:px-2">
        <div className=" lg:order-2">
          <Projects />
        </div>

       
      </div>
      <div className="px-5 mt-5">
        <Credit credits={credits} setCredits={setCredits} />
        <Next />
      </div>
    </div>
  );
};
