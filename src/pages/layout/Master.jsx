import React from "react";
import { Outlet } from "react-router";
import Header from "../../components/Header";
import Footer from "../../components/Footer";
const Master = () => {
  return (
    <div>
      <Header />
      <div className="page container m-auto">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
};

export default Master;
