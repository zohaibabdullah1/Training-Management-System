import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import logo from './Icoures.png';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { FormGroup, Input } from "reactstrap";
import {Link} from 'react-router-dom';

function Home() {
  return (
    <div>
      <div className='background_image'>
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
                <Link to="/login" className="signin_btn_decore">
                  <i className="fa fa-regular fa-user"></i> Sign in</Link>
                  <i className="fa fa-brands fa-twitter i_design nav_color"></i>
                  <i className="fa fa-brands fa-facebook i_design nav_color"></i>
                  <i className="fa fa-brands fa-linkedin i_design nav_color"></i>
                  <i className="fa fa-brands fa-instagram i_design nav_color"></i>
                </Form>
              </Navbar.Collapse>
            </Container>
          </Navbar>
        </div>

        <div className='main-container'>
        <div className='main-container-navbar'>
          <Navbar>
            <Container fluid>
              <Navbar.Brand className='home-icon'>

                <img
                  alt=""
                  src={logo}
                  width="100"
                  height="45"
                  className="d-inline-block align-top"
                />{' '}
              </Navbar.Brand>
              <Navbar.Toggle aria-controls="navbarScroll" className="nav_brand_margin" />
              <Navbar.Collapse id="navbarScroll">
                <Nav
                  className="me-auto my-2 my-lg-0 "
                  style={{ maxHeight: '100px' }}
                  navbarScroll>
                  <Link className='nav_padding' to="/">Home</Link>
                  <NavDropdown className='dropdown_padding' title="COURSES" id="navbarScrollingDropdown">
                    <NavDropdown.Item href="#action3">Courses List</NavDropdown.Item>
                    <NavDropdown.Item href="#action4">
                      Enrolled Courses
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action5">
                      Instructors
                    </NavDropdown.Item>
                    <NavDropdown.Item href="#action6">
                      Instructors Profile
                    </NavDropdown.Item>
                    <NavDropdown.Divider />
                    <NavDropdown.Item href="#action7">
                      My Profile
                    </NavDropdown.Item>
                  </NavDropdown>
                  <Link className='nav_padding' to="/about">About us</Link>
                  <Link className='nav_padding' to="/contact">Contact us</Link>
                </Nav>
              </Navbar.Collapse>
            </Container>
          </Navbar>

        </div>

        </div>
        
        <div className='titlebar_home'>
          <p className='grey_titilebar'><b className='' >!</b> Fuel Your Future</p>
          <h1>More Than 15k+ Courses Online</h1>
          <p className='grey_titilebar'>Get access to high quality learning whereever you are, with online courses, programs and degrees created by leading universities.</p>
          <Button className='titlebar_btn' >View Courses</Button>
        </div>
      </div>

      <div className='bg_color_home'>
        <div className='second_home'>
          <div className="col-sm-4 second_data">
            <i class="fa fa-sharp fa-light fa-rocket  icon_size"></i>
            <h3><b className='coler'>Learn </b>Anything</h3>
            <div>Join millions of people from around the world learning together.Try it now!</div>
          </div>
          <div className="col-sm-4 second_data">
            <i class="fa fa-sharp fa-light fa-globe icon_size"></i>
            <h3><b className='coler'>Learn </b> Together</h3>
            <div>Join millions of people from around the world learning together.Try it now!</div>
          </div>
          <div className="col-sm-4 feedback">
            <div className='feedback_bg'>
              <h2 className='feedbback_center'>Feedback Form</h2>
            </div>

          <div className='feedback_field'>
          <Form>
              <FormGroup className="position-relative">
                <Input className='field-set' type="text" placeholder='Full Name' />
              </FormGroup>
              <FormGroup className="position-relative">
                <Input  className='field-set' type="email" placeholder='Email Address' />
              </FormGroup>
              <div className="d-grid gap-2">
                <Button className='feedback_btn' size="lg">Submit</Button>
              </div>
            </Form>
          </div>
            
          </div>
        </div>
        
      </div>

      <div className='third_home'>
          <h5 className='coler'> DISCOVER NEW</h5>
          <h1>OUR TOP ONLINE COURSES</h1>
          <p>We’ll then ask you to tell us your current level of English or invite you to take our quick 20 minute placement test so we can make sure you start learning English at the level that’s right for you.

          </p>

        </div>
    </div>
  )
}

export default Home