import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const AdminPanel = () => {
  const [isOpen, setIsOpen] = React.useState(true);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
      <button className="titlebar_btn" onClick={toggleDrawer}>
        Show
      </button>
      <Drawer
        open={isOpen}
        onClose={toggleDrawer}
        direction="left"
        // className='bla bla bla'
      >
        <div>
          <ListGroup >
            <ListGroup.Item action href="/">
              Create Course
            </ListGroup.Item>
            <ListGroup.Item action href="/lms">
              Create Quiz
            </ListGroup.Item>
            <ListGroup.Item action>
              Manage Courses
            </ListGroup.Item>
            <ListGroup.Item action>
              Manage Quizzes
            </ListGroup.Item>
            <ListGroup.Item action>
              Manage Attendence
            </ListGroup.Item>
            <ListGroup.Item action>
              Create/Update Results
            </ListGroup.Item>
            <ListGroup.Item action>
              Add Instructors
            </ListGroup.Item>
            <ListGroup.Item action>
              Manage Accesses
            </ListGroup.Item>
            <ListGroup.Item action>
              Sign Out
            </ListGroup.Item>
          </ListGroup>
        </div>
      </Drawer>
    </>
  );
};

export default AdminPanel;
