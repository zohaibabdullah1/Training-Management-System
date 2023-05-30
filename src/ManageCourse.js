import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function ManageCourse() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const token = localStorage.getItem("aptoken");
    const [courses, setCourses] = useState([]);
    const ApiFetch = () => {
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
      };
    useEffect(() => {
        ApiFetch();
    }, []);

    // const handleDelete = async (id) => {
        
    //     try {
    //       await axios.delete(`http://localhost:4000/data/${id}`).then((result) => {
    //         result.json().then((resp) => {});
    //         ApiFetch();
    //       });
    //       ApiFetch();
    //     } catch (error) {
    //       console.error(error);
    //     }
    //   };
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
            <Table className='course_table' striped bordered hover>
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
                            <td>
                                <Button className='update_btn'>Update</Button>{" "}
                                {/* <Button className='delete_btn' onClick={() => handleDelete(item._id)}>Delete</Button> */}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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
