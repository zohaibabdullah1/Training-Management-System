import React, { useState, useEffect } from "react";
import axios from "axios";
import NavComp from "./NavBrandComp";
import Cards from "./Card";
import NavBarComponent from "./NavBar";
import Footer from "./Footer";

function Catlogs() {
  const token = localStorage.getItem("aptoken");
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/course", {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);
  return (
    <>
      {<NavComp/>}

      <div className='courses_bg'>
        <div className='main-container'>
          <NavBarComponent />
        </div>
        <h1 className='contats_h '> Courses</h1>
      </div>
      <div className="Catlogs">
        <h6>LEARN WITHOUT LIMITS</h6>
        <h2>Explore Our Online Courses</h2>
        <p className="Catlog-Para">
          We’ll then ask you to tell us your current level of English or invite
          you to take our quick 20 minute placement test so we can make sure you
          start learning English.
        </p>
        <div className="col1">
        {courses.map((item, key) => (
                        <Cards key={key} course={item}/>
                    ))}
        </div>
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Catlogs;
