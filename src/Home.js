import React from 'react'
import Button from 'react-bootstrap/Button';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
// import { Button } from 'reactstrap'

function Home() {
    return (
        <div>
            <div >
                <Navbar className='main-header' bg="dark" expand="sm" >
                    <Container fluid>
                        <Navbar.Brand href="#" className='nav_color'>12th Floor, Askari Corporate Tower.</Navbar.Brand>
                        <Navbar.Toggle aria-controls="navbarScroll" />
                        <Navbar.Collapse id="navbarScroll" className='nav-color'>
                            <Nav
                                className="me-auto my-2 my-lg-0 nav_color"
                                style={{ maxHeight: '100px' }}
                                navbarScroll
                            >
                                <Nav href="#action1">mrxyz@gamil.com</Nav>

                            </Nav>
                            <Form className="d-flex">
                                <Button className="signin_btn_decore">
                                <i className="fa fa-regular fa-user"></i> Sign in</Button>
                                <i className="fa fa-brands fa-twitter i_design nav_color"></i>
                                <i className="fa fa-brands fa-facebook i_design nav_color"></i>
                                <i className="fa fa-brands fa-linkedin i_design nav_color"></i>
                                <i className="fa fa-brands fa-instagram i_design nav_color"></i>
                            </Form>
                        </Navbar.Collapse>
                    </Container>
                </Navbar>
            </div>
            <div>

            </div>
            <br/><br/><br/><br/>

            <div>
                {/* <Navbar.Brand href="#home" style={NavBarBrandStyle}><img src="/img1.png"
              width="45"
              height="45"
              className="d-inline-block align-center"
              alt="Cuttly"
            /><i style={NavBarWeight}>Cuttly</i>
        </Navbar.Brand> */}

                
            </div>

        </div>
    )
}

export default Home