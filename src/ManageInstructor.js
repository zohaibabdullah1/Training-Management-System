import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import axios from "axios";
// import Form from "react-bootstrap/Form";
// import Modal from "react-bootstrap/Modal";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function ManageInstructor() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    // const [show, setShow] = useState(false);
    // const handleClose = () => setShow(false);
    // const handleShow = () => setShow(true);
    // const [userId, setUserId] = useState("");
    // const [title, setTitle] = useState("");
    // const [description, setDescription] = useState("");
    // const [instructor, setInstructor] = useState("");
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
            {/* <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update Course</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course Title</Form.Label>
              <Form.Control
                name="title"
                type="text"
                value={title}
                onChange={(e) => {
                  setTitle(e.target.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Description</Form.Label>
              <Form.Control
                name="description"
                type="text"
                value={description}
                onChange={(e) => {
                  setDescription(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control
                name="instructor"
                type="text"
                value={instructor}
                onChange={(e) => {
                  setInstructor(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="btn_modal">
              <Button type="submit" onClick={UpdateEmployee} variant="primary">
                Update Employee
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal> */}
        </>
    )
}
export default ManageInstructor
