import React from "react";
import NavComp from "./NavBrandComp";
// import { Link } from "react-router-dom";
import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import flex_img from "./Images/aboutus flex.jpeg";
import inst1 from "../src/Images/inst1.jpg";
import InstComp from "./InstructorComp";

function Instructor() {
  return (
    <>
      {<NavComp />}
      <div className="aboutus_bg">
        <div className="main-container">
          <NavBarComponent />
        </div>
        <h1 className="contats_h "> Instructors</h1>
      </div>

      <div className="aboutUs">
        <InstComp img={inst1} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Instructor;
