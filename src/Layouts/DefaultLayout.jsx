import React from "react";
import { Header } from "../Components/Header";

export const DefaultLayout = ({ children }) => {
  return (
    <div style={{ backgroundColor: "rgb(246, 248, 255)" }} className=" min-h-screen">
      <Header />
      {children}
    </div>
  );
};
