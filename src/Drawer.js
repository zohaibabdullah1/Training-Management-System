import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import "react-modern-drawer/dist/index.css";

const App = () => {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  return (
    <>
    <div>
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
              Home
            </ListGroup.Item>
            <ListGroup.Item action href="/quiz">
              Take a Quiz
            </ListGroup.Item>
            <ListGroup.Item action>
              Attendence
            </ListGroup.Item>
            <ListGroup.Item action>
              Enrolled Courses
            </ListGroup.Item>
            <ListGroup.Item action>
              New Courses
            </ListGroup.Item>
            <ListGroup.Item action>
              Results
            </ListGroup.Item>
            <ListGroup.Item action>
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
