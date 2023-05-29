import React, { useState, useEffect } from "react";
import axios from "axios";
import NavComp from "./NavBrandComp";
import Cards from "./Card";
import img1 from "./Images/img1.jpg";
import img2 from "./Images/img2.jpg";
import img3 from "./Images/img3.jpg";
import img4 from "./Images/img4.jpg";
import img5 from "./Images/img5.jpg";
import img6 from "./Images/img6.jpg";
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
                        <Cards course={item}/>
                    ))}
          {/* {<Cards img={img1} />}
          {<Cards img={img2} />}
          {<Cards img={img3} />} */}
        </div>
        {/* <div className="col1">
          {<Cards img={img4} />}
          {<Cards img={img5} />}
          {<Cards img={img6} />}
        </div> */}
      </div>

      <div>
        <Footer/>
      </div>
    </>
  );
}

export default Catlogs;
