import React from "react";
import flooorPlannerImage from "../Images/planner.jpg";
import planImage from "../Images/floor-plan.png";
import city from "../Images/city.jpg";
export const Home = () => {
  return (
    <div className=" py-16 text-center px-24 flex gap-16 flex-col sm:px-8">
      <div className="flex gap-8 flex-col" id="home">
        <h1 className=" text-teal-800 font-semibold text-3xl sm:text-2xl">
          floorplanner.ai
        </h1>
        <h2 className="text-gray-700 font-semibold text-xl sm:text-lg sm:font-medium" >
          Transforming Spaces, Powered by AI: Discover Limitless Possibilities
          for Your Dream Build.
        </h2>
        <div id="about"></div>
        <img
          src={flooorPlannerImage}
          alt="city"
          className="  mx-auto mt-5 rounded-lg"
          height={100}
        />
      </div>
      <div >
        <h1 className=" text-teal-800 font-semibold text-3xl sm:text-2xl">About Us</h1>
        <p className="text-gray-700 font-semibold text-xl  py-5 sm:text-lg sm:font-medium sm:py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatum,
          voluptate, quibusdam, quia voluptas quod quos.
          <span  id="showcase"></span>
        </p>
      </div>
      <div
       
        className="flex flex-col gap-8"
      >
        <h2 className=" text-teal-800 font-semibold text-3xl sm:text-2xl">
          Showcasing the best of our work
        </h2>
        <div className="flex gap-8 flex-wrap justify-center">
          {/* show home images */}
          <img
            src={planImage}
            alt="plan"
            className="rounded-lg"
            height={500}
            width={500}
          />
        </div>
      </div>
      <div id="pricing">
        <h1 className=" text-teal-800 font-semibold text-3xl sm:text-2xl">Pricing</h1>
        <p className="text-gray-700 font-semibold text-xl  py-5 sm:text-lg sm:font-medium sm:py-3">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos
          exercitationem voluptatibus quas doloribus quidem. Quisquam
          voluptatum, voluptate, quibusdam, quia voluptas quod quos voluptatum,
          voluptate, quibusdam, quia voluptas quod quos.
        </p>
      </div>
    </div>
  );
};
