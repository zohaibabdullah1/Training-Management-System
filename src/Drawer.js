import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import NavComp from "./NavBrandComp";
import Offcanvas from 'react-bootstrap/Offcanvas';

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
    {<NavComp/>}
    <button className="ham_button" onClick={toggleDrawer}>
    <i class="fa fa-regular fa-bars"></i>
      </button>

    <div>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        // className='bla bla bla'
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
            <ListGroup.Item className="ham-list"  action href="/selectquiz">
              Take a Quiz
            </ListGroup.Item>
            <ListGroup.Item className="ham-list"  action>
              Attendence
            </ListGroup.Item>
            <ListGroup.Item className="ham-list"  action>
              Enrolled Courses
            </ListGroup.Item>
            <ListGroup.Item className="ham-list"  action>
              New Courses
            </ListGroup.Item>
            <ListGroup.Item className="ham-list"  action >
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

    </div>
      


    </>
  );
};

export default App;
