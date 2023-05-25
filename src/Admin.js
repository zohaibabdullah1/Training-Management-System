import React from "react";
import "react-modern-drawer/dist/index.css";
import title from "./Images/php.jpg";
import mongo from "./Images/mongo.png";
import java from "./Images/Java.jpg";
import aws from "./Images/aws.png";
import nodejs from "./Images/nodejs.jpg";
import html from "./Images/html.jpg";
import css from "./Images/css.jpg";
import reactjs from "./Images/reactjs.jpeg";
import bootstrap from "./Images/bootstrap.jpg";
import Footer from "./Footer";
import CourseComp from "./CourseComp";
import AdminDrawerComp from "./AdminDrawer";
import AdminNav from "./AdminNav";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const courses = [
    { img: html, Iname: "Mr. Alex", heading: "HTML" },
    { img: css, Iname: "Mr. Saren", heading: "CSS" },
    { img: bootstrap, Iname: "Mr. Jackel", heading: "Bootstrap" },
    { img: reactjs, Iname: "Mr. Aram", heading: "ReactJS" },
    { img: nodejs, Iname: "Mr. Jonas", heading: "NodeJS" },
    // Add more course objects as needed
  ];

  const enrolled_course = [
    { img: title, Iname: "Mr. Jack", heading: "PHP" },
    { img: mongo, Iname: "Mr. Alaxender", heading: "Mongo Data" },
    { img: java, Iname: "Mr. Hales", heading: "Java" },
    { img: aws, Iname: "Mr. Jack", heading: "AWS" },
  ];

  return (
    <>
      <div className="lms_home">
        <div>
          <AdminNav toggle={toggleDrawer} open={isOpen} />
          <AdminDrawerComp toggle={toggleDrawer} open={isOpen} />
        </div>

        <div>
          <h4 className="latest_heading">Latest Courses:</h4>

          <div className="latest_flex">
            {courses.map((course, index) => (
              <CourseComp
                key={index}
                img={course.img}
                Iname={course.Iname}
                heading={course.heading}
              />
            ))}
          </div>
        </div>

        <div>
          <h4 className="latest_heading">Enrolled Courses:</h4>

          <div className="latest_flex">
            {enrolled_course.map((course, index) => (
              <CourseComp
                key={index}
                img={course.img}
                Iname={course.Iname}
                heading={course.heading}
              />
            ))}
          </div>
        </div>
        <div>
          <Footer />
        </div>
      </div>
    </>
  );
};

export default App;
