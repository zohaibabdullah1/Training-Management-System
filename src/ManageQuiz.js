import React, { useState } from "react";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";
import { Link } from "react-router-dom";
import Button from "react-bootstrap/Button";


function ManageQuiz() {

    const [isOpen, setIsOpen] = useState(false);
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
                        <th>Subject</th>
                        <th>Question</th>
                        <th>Option A</th>
                        <th>Option B</th>
                        <th>Option C</th>
                        <th>Option D</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
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
            <Link to="/createquiz">
                <Button className='add_btn'>
                    Add Quiz
                </Button>
            </Link>
        </>
    )
}

export default ManageQuiz