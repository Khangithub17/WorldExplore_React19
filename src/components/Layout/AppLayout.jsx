import React from "react";
import Headers from "../ui/Headers";
import Footers from "../ui/Footers";
import { Outlet } from "react-router-dom";

const AppLayout = () => {
  return (
    <>
      <Headers />
      <Outlet/>
      <Footers />
    </>
  );
};

export default AppLayout;
