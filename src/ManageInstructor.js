import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function ManageInstructor() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const token = localStorage.getItem("aptoken");
    const [instructors, setInstructors] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/instructor", {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                setInstructors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);

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
            <Table className='course_table' striped bordered hover>
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
                    {instructors.map((item, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.name}</td>
                            <td>{item.qualification}</td>
                            <td>{item.course}</td>
                            <td>
                                <Button className='update_btn'>Update</Button>{" "}
                                <Button className='delete_btn'>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            <br />
            <Link to="/addinstructor">
                <Button className='add_btn'>
                    Add New Instructor
                </Button>
            </Link>
        </>
    )
}
export default ManageInstructor
