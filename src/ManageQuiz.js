import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function ManageQuiz() {

    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
        const token = localStorage.getItem("aptoken");
    const [quizes, setQuizes] = useState([]);
    useEffect(() => {
        axios
            .get("http://localhost:4000/quiz", {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                setQuizes(res.data);
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
                        <th>Subject</th>
                        <th>Question</th>
                        <th>Answer</th>
                        <th>Option A</th>
                        <th>Option B</th>
                        <th>Option C</th>
                        <th>Option D</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {quizes.map((item, key) => (
                        <tr key={key}>
                            <td>{key + 1}</td>
                            <td>{item.subject}</td>
                            <td>{item.question}</td>
                            <td>{item.answer}</td>
                            <td>{item.opt1}</td>
                            <td>{item.opt2}</td>
                            <td>{item.opt3}</td>
                            <td>{item.opt4}</td>
                            <td>
                                <Button className='update_btn'>Update</Button>{" "}
                                <Button className='delete_btn'>Delete</Button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>
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