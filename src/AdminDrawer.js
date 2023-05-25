import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import React from "react";
import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
import NavComp from "./NavBrandComp";

function AdminDrawerComp({toggle, open}){

//     const [isOpen, setIsOpen] = React.useState(false);
//   const toggleDrawer = () => {
//     setIsOpen((prevState) => !prevState);
//   };
    return (

        <>
        
        <div>
          <Drawer open={open} onClose={toggle} direction="left">
          <div>
              <ListGroup >
                <Offcanvas.Header className="ham-Header" closeButton onClick={toggle}>
                </Offcanvas.Header>
                <Offcanvas.Title className="ham-title" >
                  Admin Panel
                </Offcanvas.Title>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/createcourse'>Create Course</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/selectquiz'>Create Quiz</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to='/'>Manage Courses</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to=''>Manage Quizes</Link>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to=''>Create/Update Results</Link> 
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <Link className="ham-list" to=''>Add Instructor</Link>
                </ListGroup.Item>

              </ListGroup>
            </div>
          </Drawer>
        </div>
        
        </>
    );
}
export default  AdminDrawerComp;