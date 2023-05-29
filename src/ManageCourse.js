import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import Table from "react-bootstrap";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function ManageCourse() {
    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const token = localStorage.getItem("token");
    const [courses, setCourses] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/course", {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                setCourses(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }, [token]);
    return (
        <>
            <div>
                <AdminNav toggle={toggleDrawer} open={isOpen} />
                <AdminDrawerComp toggle={toggleDrawer} open={isOpen} />
            </div>
            <div className="arrow">
                <Link to="/admin">
                    <i className="fas fa-chevron-circle-left back-arrow"></i>
                </Link>
            </div>
            <Table striped bordered hover>
                <thead>
                <tr>
                        <th>ID</th>
                        <th>Course Title</th>
                        <th>Description</th>
                        <th>Instructor Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {courses.map((item, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.title}</td>
                            <td>{item.description}</td>
                            <td>{item.instructor}</td>
                        </tr>
                    ))}
                </tbody>
            </Table>
            {/* <table className='course_table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Course Name</th>
                        <th>Instructor Name</th>
                        <th>Description</th>
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
            </table> */}
            <br />
            <Link to="/createcourse">
                <Button className='add_btn'>
                    Add New Course
                </Button>
            </Link>
        </>
    )
}
export default ManageCourse;
