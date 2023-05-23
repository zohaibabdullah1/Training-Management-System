import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import NavComp from "./NavBrandComp";
import Offcanvas from 'react-bootstrap/Offcanvas';
import logo from './Icoures.png';
import php from './Images/php.jpg';
import mongo from './Images/mongo.png';
import java from './Images/Java.jpg';
import javascript from './Images/javascript.jpg';
import nodejs from './Images/nodejs.jpg';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';



const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div className="lms_home">

        {<NavComp />}
        <div>

          <Navbar className="nav_bg">
            <Container fluid>
              <Navbar.Brand><button className="ham_button" onClick={toggleDrawer}>
                <i class="fa fa-regular fa-bars"></i>
              </button>
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav href="#action1"></Nav>
                  <img
                    alt=""
                    src={logo}
                    width="60"
                    height="30"
                    className="d-inline-block align-top"
                  />
                </Nav>

                <Nav href="#action2" className="nav_lms_center">
                  <NavDropdown title="MY LMS " id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3"> Dashboard</NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action4">
                      Profile
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Grades
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Messages
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">
                      Log Out
                    </NavDropdown.Item>
                  </NavDropdown>

                  <p className="lms_n"> USER NAME</p>
                  <i class="fa fa-regular fa-user lms_n"></i>
                </Nav>

                <Form className="d-flex">

                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div>
          <Drawer
            open={isOpen}
            onClose={toggleDrawer}
            direction="left"
          >
            <div>
              <ListGroup >
                <Offcanvas.Header className="ham-Header" closeButton onClick={toggleDrawer}>
                </Offcanvas.Header>
                <Offcanvas.Title className="ham-title" >
                  Student Portal
                </Offcanvas.Title>
                <ListGroup.Item className="ham-list" action href="/">
                  Home
                </ListGroup.Item>
                <ListGroup.Item className="ham-list" action href="/selectquiz">
                  Take a Quiz
                </ListGroup.Item>
                <ListGroup.Item className="ham-list" action>
                  Attendence
                </ListGroup.Item>
                <ListGroup.Item className="ham-list" action>
                  Enrolled Courses
                </ListGroup.Item>
                <ListGroup.Item className="ham-list" action>
                  New Courses
                </ListGroup.Item>
                <ListGroup.Item className="ham-list" action >
                  Results
                </ListGroup.Item>
                <ListGroup.Item className="ham-list" href="/login" action>
                  Sign Out
                </ListGroup.Item>
              </ListGroup>
            </div>
          </Drawer>
        </div>

        <div className="">
          <div className="latest_course">
            <h4>Latest Courses</h4>
            <div className="latest_flex">
              <div className="col-sm-3 lms_card">
                <img
                  alt=""
                  src={php}
                  width="100%"
                />
                <div class="container">
                  <h4><b>PHP</b></h4>
                  <h6>MR. HARRY</h6>
                  <p>Learn the fundamentals and advanced techniques of PHP programming to build dynamic and interactive websites with ease. Develop practical skills in web development and unleash the power of PHP for creating robust and scalable web applications.</p>
                </div>
              </div>

              <div className="col-sm-3 lms_card">
                <img
                  alt=""
                  src={mongo}
                  width="100%"
                />
                <div class="container">
                  <h4><b>Mongo Data</b></h4>
                  <p>MR. Alaxender</p>
                </div>

              </div>

              <div className="col-sm-3 lms_card">
                <img
                  alt=""
                  src={java}
                  width="100%"
                />
                <div class="container">
                  <h4><b>Java</b></h4>
                  <p>Mr. Hales</p>
                </div>

              </div>
              <div className="col-sm-3 lms_card">
              <img
                  alt=""
                  src={nodejs}
                  width="100%"
                />
                  <div class="container">
                    <h4><b>JavaScript</b></h4>
                    <p>Mr .Chips</p>
                  </div>

              </div>


            </div>


          </div>

        </div>


      </div>
    </>
  );
};

export default App;


