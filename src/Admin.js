import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavComp from "./NavBrandComp";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <div>{<NavComp />}</div>

      <div>
        <button className="ham_button" onClick={toggleDrawer}>
          <i class="fa fa-regular fa-bars"></i>
        </button>
        <Drawer
          open={isOpen}
          onClose={toggleDrawer}
          direction="left"
          className='drawer-container'
        >
          <div>
            <ListGroup>
              <Offcanvas.Header
                className="ham-Header"
                closeButton
                onClick={toggleDrawer}
              ></Offcanvas.Header>
              <Offcanvas.Title className="ham-title">
                Admin Panel
              </Offcanvas.Title>
              <ListGroup.Item className="ham-list" action href="/">
                Create Course
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action href="/lms">
                Create Quiz
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action>
                Manage Courses
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action>
                Manage Quizzes
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action>
                Manage Attendence
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action>
                Create/Update Results
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action>
                Add Instructors
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action>
                Manage Accesses
              </ListGroup.Item>
              <ListGroup.Item className="ham-list" action href="/login">
                Sign Out
                <i className="exit fas fa-sign-out-alt"></i>
              </ListGroup.Item>
            </ListGroup>
          </div>
        </Drawer>
      </div>
    </>
  );
};

export default AdminPanel;
