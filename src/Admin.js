import React from "react";
import "react-modern-drawer/dist/index.css";
import Footer from "./Footer";
import CourseComp from "./CourseComp";
import AdminDrawerComp from "./AdminDrawer";
import AdminNav from "./AdminNav";
import course from "./Images/course.jpg";
import instructor from "./Images/instructor.jpg";
import result from "./Images/result.jpg";
import quiz from "./Images/quiz icon.jpg";
import managecourse from "./Images/manage course.jpg";
import managequiz from "./Images/manage quiz.jpg";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const dashboard = [
    { img: quiz, heading: "Create Quiz", pageSrc: "/createquiz" },
    { img: course, heading: "Create Course", pageSrc: "/createcourse" },
    { img: result, heading: "Results", pageSrc: "/admin" },
    { img: instructor, heading: "Add Instructor", pageSrc: "/addinstructor" },
    // { img: nodejs, Iname: "Mr. Jonas", heading: "NodeJS", pageSrc:"/" },
    // Add more course objects as needed
  ];

  const more_options = [
    { img: managecourse, heading: "Manage Course", pageSrc: "/managecourse" },
    { img: managequiz, heading: "Manage Quiz", pageSrc: "/" },
  ];

  return (
    <>
      <div className="lms_home">
        <div>
          <AdminNav toggle={toggleDrawer} open={isOpen} />
          <AdminDrawerComp toggle={toggleDrawer} open={isOpen} />
        </div>

        <div className="admin-dashboard-main">
          <h4 className="latest_heading">Quick Access:</h4>

          <div className="admin-dashboard">
            {dashboard.map((course, index) => (
              <CourseComp
                key={index}
                img={course.img}
                Iname={course.Iname}
                heading={course.heading}
                pageSrc={course.pageSrc}
              />
            ))}
          </div>
        </div>

        <div className="admin-dashboard-main">
          <div className="admin-dashboard">
            {more_options.map((more_options, index) => (
              <CourseComp
                key={index}
                img={more_options.img}
                Iname={more_options.Iname}
                heading={more_options.heading}
                pageSrc={more_options.pageSrc}
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
