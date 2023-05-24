import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import logo from "./Icoures.png";
import title from "./Images/php.jpg";
import mongo from "./Images/mongo.png";
import java from "./Images/Java.jpg";
import aws from "./Images/aws.png";
import nodejs from "./Images/nodejs.jpg";
import html from "./Images/html.jpg";
import css from "./Images/css.jpg";
import reactjs from "./Images/reactjs.jpeg";
import bootstrap from "./Images/bootstrap.jpg";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Footer from "./Footer";
import { Link } from "react-router-dom";
import CourseComp from "./CourseComp";

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

  const enrolled_course =[

    { img: title, Iname: "Mr. Jack", heading: "PHP" },
    { img: mongo, Iname: "Mr. Alaxender", heading: "Mongo Data" },
    { img: java, Iname: "Mr. Hales", heading: "Java" },
    { img: aws, Iname: "Mr. Jack", heading: "AWS" }

  ];

  return (
    <>
      <div className="lms_home">
        <div>
          <Navbar className="nav_bg">
            <Container fluid>
              <Navbar.Brand>
                <button className="ham_button" onClick={toggleDrawer}>
                  <i class="fa fa-regular fa-bars"></i>
                </button>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: "100px" }}
                  navbarScroll
                >
                  <Nav href="#action1"></Nav>
                  <Link className="nav_padding" to="/">
                    <img
                      alt=""
                      src={logo}
                      width="90"
                      height="40"
                      className="d-inline-block align-top"
                    />
                  </Link>
                </Nav>

                <Nav href="#action2" className="nav_lms_center">
                  <NavDropdown
                    className="font_size"
                    title={<i class="fa fa-regular fa-user lms-profile"></i>}
                    id="person-icon"
                  >
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">
                        Dashboard
                      </Link>
                    </div>
                    <hr />
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/profile">
                        Profile
                      </Link>
                    </div>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">
                        Notifications
                      </Link>
                    </div>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">
                        Account Settings
                      </Link>
                    </div>
                    <hr />
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">
                        Logout
                      </Link>
                    </div>
                  </NavDropdown>

                  <p className="lms_n"> USER NAME</p>
                </Nav>

                <Form className="d-flex"></Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          <Drawer open={isOpen} onClose={toggleDrawer} direction="left">
          <div>
              <ListGroup >
                <Offcanvas.Header className="ham-Header" closeButton onClick={toggleDrawer}>
                </Offcanvas.Header>
                <Offcanvas.Title className="ham-title" >
                  Student Portal
                </Offcanvas.Title>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/'>Home</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/selectquiz'>Take a Quiz</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/'>Attendence</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to=''>Enrolled Courses</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to=''>New Courses</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to=''>Results</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/login'>Sign Out</Link>
                </ListGroup.Item>

              </ListGroup>
            </div>
          </Drawer>
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
