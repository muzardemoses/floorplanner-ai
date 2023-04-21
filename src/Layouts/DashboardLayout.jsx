import React from "react";
import { SubNav } from "../Components/SubNav";

export const DashboardLayout = ({ children }) => {
  return (
    <div
      style={{ backgroundColor: "rgb(246, 248, 255)" }}
      className="h-screen flex overflow-hidden"
    >
      <SubNav />
      <div className="flex-1 overflow-auto">{children}</div>
    </div>
  );
};
