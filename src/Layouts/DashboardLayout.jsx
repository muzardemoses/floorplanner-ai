import React from "react";
import { SubNav } from "../Components/SubNav";

export const DashboardLayout = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "rgb(246, 248, 255)" }}
      className=" min-h-screen flex"
    >
      <SubNav />
      {children}
    </div>
  );
};
