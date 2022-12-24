import React from "react";
import Footer from "../Footer/Footer";
import Navbar from "../Navigation/Navbar";
import SubNavbar from "../Navigation/SubNavbar";

const WebLayout = (props) => {
  return (
    <>
      <Navbar />
      <SubNavbar />
      {props.children}
      <Footer />
    </>
  );
};

export default WebLayout;
