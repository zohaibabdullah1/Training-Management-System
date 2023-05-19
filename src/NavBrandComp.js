import React from "react";
import Container from "react-bootstrap/Container";
import Form from "react-bootstrap/Form";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";

function NavComp() {
  return (
    <div>
        <div >
          <Navbar className='main-header' bg="dark" expand="sm" >
            <Container fluid>
              <Navbar.Brand className='nav_color'>12th Floor, Askari Corporate Tower</Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" />
              <Navbar.Collapse id="navbarScroll" className='nav-color'>
                <Nav
                  className="me-auto my-2 my-lg-0 nav_color"
                  style={{ maxHeight: '100px' }}
                  navbarScroll
                >
                  <Nav className='nav-mail' href="#action1">Support@Icoures.com</Nav>
                </Nav>
                <Form className="d-flex">
                  <i className="fa fa-brands fa-twitter i_design nav_color"></i>
                  <i className="fa fa-brands fa-facebook i_design nav_color"></i>
                  <i className="fa fa-brands fa-linkedin i_design nav_color"></i>
                  <i className="fa fa-brands fa-instagram i_design nav_color"></i>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>
        </div>
  );
}

export default NavComp;
