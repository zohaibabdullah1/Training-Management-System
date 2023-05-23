import logo from "./Icoures.png";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import Container from "react-bootstrap/Container";

function NavBarComponent() {
  return (
    <>
      <div className="main-container-navbar">
        <Navbar>
          <Container fluid>
            <Navbar.Brand className="home-icon">
              <img
                alt=""
                src={logo}
                width="100"
                height="45"
                className="d-inline-block align-top"
              />{" "}
            </Navbar.Brand>
            <Navbar.Toggle
              aria-controls="navbarScroll"
              className="nav_brand_margin"
            />
            <Navbar.Collapse id="navbarScroll">
              <Nav
                className="me-auto my-2 my-lg-0 "
                style={{ maxHeight: "100px" }}
                navbarScroll
              >
                <Link className="nav_padding" to="/">
                  Home
                </Link>
                <NavDropdown
                  className="dropdown_padding"
                  title="COURSES"
                  id="navbarScrollingDropdown"
                >
                  <div >
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Courses List</Link>
                    </div>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Enrolled Courses</Link>
                    </div>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">Instructors</Link>
                    </div>
                    <hr/>
                    <div className="drop-down-menu">
                      <Link className="drop-down-menu" to="/inst">My Profile</Link>
                    </div>
                  </div>
                </NavDropdown>
                <Link className="nav_padding" to="/about">
                  About us
                </Link>
                <Link className="nav_padding" to="/contact">
                  Contact us
                </Link>
              </Nav>
            </Navbar.Collapse>
          </Container>
        </Navbar>
      </div>
    </>
  );
}

export default NavBarComponent;
