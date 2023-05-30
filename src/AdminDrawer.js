import ListGroup from "react-bootstrap/ListGroup";
import Drawer from "react-modern-drawer";
import React from "react";
// import { Link } from "react-router-dom";
import Offcanvas from "react-bootstrap/Offcanvas";
// import NavComp from "./NavBrandComp";
import {NavLink} from 'react-router-dom'

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
                  <NavLink className="ham-list" to='/admin'>Dashboard</NavLink>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <NavLink className="ham-list" to='/createcourse'>Create Course</NavLink>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <NavLink className="ham-list" to='/createquiz'>Create Quiz</NavLink>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <NavLink className="ham-list" to='/managecourse'>Manage Courses</NavLink>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <NavLink className="ham-list" to='/managequiz'>Manage Quizes</NavLink>
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <NavLink className="ham-list" to='/manageresult'>Create/Update Results</NavLink> 
                </ListGroup.Item>

                <ListGroup.Item className="ham-list">
                  <NavLink className="ham-list" to='/addinstructor'>Add Instructor</NavLink>
                </ListGroup.Item>

              </ListGroup>
            </div>
          </Drawer>
        </div>
        
        </>
    );
}
export default  AdminDrawerComp;