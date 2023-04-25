import React, { useEffect, useState } from "react";
import { SubNav } from "../Components/SubNav";

export const DashboardLayout = ({ children }) => {
  const [isSubNavVisible, setIsSubNavVisible] = useState(false);

  //set showSubNav to true when the window is resized to be larger than 768px

  useEffect(() => {
    const handleResize = () => {
      setIsSubNavVisible(window.innerWidth >= 901);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return (
    <div
      style={{ backgroundColor: "rgb(246, 248, 255)" }}
      className="h-screen flex overflow-hidden"
    >
      <SubNav
        isSubNavVisible={isSubNavVisible}
        setIsSubNavVisible={setIsSubNavVisible}
      />
      <header>
        <button
          className="hidden md:block absolute top-0 right-0 mt-4 mr-4 z-50 bg-white shadow-md p-1 transition duration-300 ease-in-out rounded-md hover:bg-gray-200"
          onClick={() => setIsSubNavVisible(!isSubNavVisible)}
        >
          <svg
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 20 20"
            fill="currentColor"
            className="h-8 w-8"
          >
            {isSubNavVisible ? (
              <path
                fillRule="evenodd"
                d="M5.293 5.293a1 1 0 0 1 1.414 0L10 8.586l3.293-3.293a1 1 0 1 1 1.414 1.414L11.414 10l3.293 3.293a1 1 0 0 1-1.414 1.414L10 11.414l-3.293 3.293a1 1 0 0 1-1.414-1.414L8.586 10 5.293 6.707a1 1 0 0 1 0-1.414z"
                clipRule="evenodd"
              />
            ) : (
              <path
                fillRule="evenodd"
                d="M3 3a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1V3zm0 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1zm0 7a1 1 0 0 1 1-1h12a1 1 0 0 1 1 1v1a1 1 0 0 1-1 1H4a1 1 0 0 1-1-1v-1z"
                clipRule="evenodd"
              />
            )}
          </svg>
        </button>
      </header>
      <div
        //  add opacity to the main content when the subnav is visible
        style={{
        //   opacity: isSubNavVisible ? "0.5" : "1",
        //   transition: "all 0.5s ease",
          ...(window.innerWidth < 901 && {
            opacity: isSubNavVisible ? "0.5" : "1",
            transition: "all 0.5s ease",
          }),
        }}
        className="flex-1 overflow-auto"
      >
        {children}
      </div>
    </div>
  );
};
