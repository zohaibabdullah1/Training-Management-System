import React from "react";
import Button from "react-bootstrap/Button";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";

function Home() {
  const Navigate = useNavigate();
  const login = () => {
    Navigate("/login");
  };
  return (
    <div>
      <div>
        <Navbar className="main-header" bg="dark" expand="sm">
          <Container fluid>
            <Navbar.Brand href="#" className="nav_color">
              12th Floor, Askari Corporate Tower.
            </Navbar.Brand>
            <Navbar.Toggle aria-controls="navbarScroll" />
            <Navbar.Collapse id="navbarScroll" className="nav-color">
              <Nav
                className="me-auto my-2 my-lg-0 nav_color"
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Nav href="#action1">mrxyz@gamil.com</Nav>
              </Nav>
              <Form className="d-flex">
                <Button className="signin_btn_decore" onClick={login}>
                  <i className="fa fa-regular fa-user"></i> Sign in
                </Button>
                <i className="fa fa-brands fa-twitter i_design nav_color"></i>
                <i className="fa fa-brands fa-facebook i_design nav_color"></i>
                <i className="fa fa-brands fa-linkedin i_design nav_color"></i>
                <i className="fa fa-brands fa-instagram i_design nav_color"></i>
              </Form>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
      <div></div>
      <br />
    </div>
  );
}

export default Home;
