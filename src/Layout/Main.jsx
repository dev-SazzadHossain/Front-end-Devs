import React from "react";
import Users from "../Components/Users/Users";
import { Outlet } from "react-router-dom";

const Main = () => {
  return (
    <div>
      <Users />
      <Outlet />
    </div>
  );
};

export default Main;
