import React from "react";
import city from "../Images/city.jpg";
export const Home = () => {
  return (
    <div className=" py-16 text-center">
      <div className="flex gap-8 flex-col">
        <h1 className=" text-teal-800 font-semibold text-3xl">floorplanner.ai</h1>
        <h2 className="text-gray-700 font-semibold text-xl">
          Transforming Spaces, Powered by AI: Discover Limitless Possibilities
          for Your Dream Build.
        </h2>
        <img src={city} alt="city" className=" w-8/12 mx-auto mt-5 rounded-lg"/>
      </div>
    </div>
  );
};
