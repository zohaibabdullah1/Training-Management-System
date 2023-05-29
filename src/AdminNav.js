import Container from "react-bootstrap/Container";
import React from "react";
import { Button } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import logo from "./Icoures.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import { Link } from "react-router-dom";

function AdminNav({ toggle,logout }) {
  return (
    <>
      <div>
        <Navbar className="nav_bg">
          <Container fluid>
            <Navbar.Brand>
              <button className="ham_button" onClick={toggle}>
                <i className="fa fa-regular fa-bars"></i>
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
                  title={<i className="fa fa-regular fa-user lms-profile"></i>}
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
                    <Link className="drop-down-menu">
                    <Button onClick={logout}>Logout</Button>
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
    </>
  );
}
export default AdminNav;
