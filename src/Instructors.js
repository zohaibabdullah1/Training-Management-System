import React from "react";
import NavComp from "./NavBrandComp";
// import { Link } from "react-router-dom";
import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import flex_img from "./Images/aboutus flex.jpeg";
import inst1 from "../src/Images/inst1.jpg";
import InstComp from "./InstructorComp";

function Instructor() {

    const desc = `I am the founder of A Cloud Guru and an Amazon Web Services
    community hero. I hold every associate certification and I am a
    certified AWS Solutions Architect Professional. I am ex-Rackspace,
    ex-Sungard & ex-Smart421. I have been working in the Cloud space
    since it's very inception. I am not just another I.T. trainer. I
    teach Cloud because I know it. Inside and out. I've worked as a
    systems administrator, developer, solutions architect & managing
    director/general manager for some of the biggest companies in
    cloud. My courses are not just some other IT training course,
    delivered by some IT trainer. My background is very hands on. I
    live eat and breath cloud.`
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
        <InstComp img={inst1} desc={desc} />
      </div>
      <div className="aboutUs">
        <InstComp img={inst1} desc={desc} />
      </div>

      <div className="aboutUs">
        <InstComp img={inst1} desc={desc} />
      </div>
      <div>
        <Footer />
      </div>
    </>
  );
}
export default Instructor;
