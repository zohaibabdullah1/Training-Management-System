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
import aws from './Images/aws.png';
import nodejs from './Images/nodejs.jpg';
import html from './Images/html.jpg';
import css from './Images/css.jpg';
import reactjs from './Images/reactjs.jpeg';
import bootstrap from './Images/bootstrap.jpg';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Footer from './Footer';
import { Link } from "react-router-dom";



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
                <i className="fa fa-regular fa-bars"></i>
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
                <NavDropdown className="font_size" title={<i className="fa fa-regular fa-user lms-profile"></i>}  id="person-icon">
                  <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Dashboard</Link>
                    </div>
                    <hr/>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/profile">Profile</Link>
                    </div><div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Notifications</Link>
                    </div>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Account Settings</Link>
                    </div>
                    <hr/>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Logout</Link>
                    </div>
                  </NavDropdown>

                  <p className="lms_n"> USER NAME</p>
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
                
                <Link className="ham-list" to='/selectquiz'> Take a Quiz</Link>


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

        <div>
          <h4 className="latest_heading">Latest Courses:</h4>

            <div className="latest_flex">
              <div className="col-sm-2 lms_card">
                <img
                  alt=""
                  src={php}
                  width="100%"

                />
                <div className="container">
                  <h5><b>PHP</b></h5>
                  <h6>Mr. Harry</h6>
                  <p></p>                </div>
              </div>

              <div className="col-sm-2 lms_card">
                <img
                  alt=""
                  src={mongo}
                  width="100%"

                />
                <div className="container">
                  <h5><b>Mongo Data</b></h5>
                  <h6>Mr. Alaxender</h6>
                </div>

              </div>

              <div className="col-sm-2 lms_card">
                <img
                  alt=""
                  src={java}
                  width="100%"


                />
                <div className="container">
                  <h5><b>Java</b></h5>
                  <h6>Mr. Hales</h6>
                </div>

              </div>
              <div className="col-sm-2 lms_card">
                <img
                  alt=""
                  src={nodejs}
                  width="100%"

                />
                <div className="container">
                  <h5><b>JavaScript</b></h5>
                  <h6>Mr .Chips</h6>
                </div>

              </div>

              <div className="col-sm-2 lms_card">
                <img
                  alt=""
                  src={aws}
                  width="100%"

                />
                <div className="container">
                  <h5><b>AWS</b></h5>
                  <h6>Mr .Jack</h6>
                </div>

              </div>

            </div>


        </div>
        <div>
          <h4 className="latest_heading">Enrolled Courses:</h4>

          <div className="latest_flex">

            <div className="col-sm-2 lms_card">
              <img
                alt=""
                src={html}
                width="100%"

              />
              <div className="container">
                <h5><b>HTML</b></h5>
                <h6>Mr .Alex</h6>
              </div>

            </div>

            <div className="col-sm-2 lms_card">
              <img
                alt=""
                src={css}
                width="100%"

              />
              <div className="container">
                <h5><b>CSS</b></h5>
                <h6>Mr .Saren</h6>
              </div>

            </div>

            <div className="col-sm-2 lms_card">
              <img
                alt=""
                src={reactjs}
                width="100%"

              />
              <div className="container">
                <h5><b>React JS</b></h5>
                <h6>Mr .Jackel</h6>
              </div>

            </div>

            <div className="col-sm-2 lms_card">
              <img
                alt=""
                src={bootstrap}
                width="100%"

              />
              <div className="container">
                <h5><b>Bootstrap</b></h5>
                <h6>Mr .Aram</h6>
              </div>

            </div>
          </div>
      
        </div>
        <Footer/>
      </div>
    </>
  );
};

export default App;


