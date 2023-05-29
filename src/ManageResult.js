import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";


function ManageResult() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    return (
        <>
            <div>
                {/* <NavComp/> */}
                <AdminNav toggle={toggleDrawer} open={isOpen} />
                <AdminDrawerComp toggle={toggleDrawer} open={isOpen} />
            </div>


            <div className="arrow">
                <Link to="/admin">
                    <i className="fas fa-chevron-circle-left back-arrow"></i>
                </Link>
            </div>
            <table className='course_table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Instructor Name</th>
                        <th>Qualification</th>
                        <th>Course Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td>
                            <Button className='update_btn'>Update</Button>
                            <Button className='delete_btn'>Delete</Button></td>

                    </tr>


                </tbody>
            </table>
            <br />
            <Link to="/createcourse">
                <Button className='add_btn'>
                    Add Instructor
                </Button>
            </Link>
        </>

    )
}

export default ManageResult