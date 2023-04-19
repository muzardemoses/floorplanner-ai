import React from "react";
import city from "../Images/city.jpg";
export const Home = () => {
  return (
    <div className=" text-center">
      <div>
        <b>
          <h1 className=" text-teal-500">floorplanner.ai</h1>
        </b>
        <h2>
          Transforming Spaces, Powered by AI: Discover Limitless Possibilities
          for Your Dream Build.
        </h2>
        <img src={city} alt="city" />
      </div>
    </div>
  );
};
