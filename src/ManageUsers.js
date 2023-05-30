/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import {Table} from "react-bootstrap";
import axios from "axios";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function ManageUsers() {
    const [isOpen, setIsOpen] = useState(false);
    const toggleDrawer = () => {
        setIsOpen((prevState) => !prevState);
    };
    const [show, setShow] = useState(false);
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [userId, setUserId] = useState("");
    const [name, setName] = useState("");
    const [qualification, setQualification] = useState("");
    const [course, setCourse] = useState("");
    const token = localStorage.getItem("aptoken");
    const [instructors, setInstructors] = useState([]);
    const getInstructors=()=>{
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
    }
    useEffect(() => {
        getInstructors();
    }, [instructors]);

    const handleDelete = async (id) => {
        try {
          await axios.delete(`http://localhost:4000/instructor/delete/${id}`,{
            headers: {
              token: token,
            },
          })
          .then((res) => {
            getInstructors();
          });
        } catch (error) {
          console.error(error);
        }
      };
    
      //Update Method API
        const SelectInstructor = (id) => {
            handleShow();
            axios
          .get(`http://localhost:4000/instructor/${id}`, {
            headers: {
              token: token,
            },
          })
          .then((res) => {
            setName(res.data.name);
            setQualification(res.data.qualification);
            setCourse(res.data.course);
            setUserId(res.data._id);
          })
          .catch((err) => {
            console.log(err);
          });
          };
          const UpdateInstructor = () => {
            let instructor = {name, qualification, course};
            axios
            .put(`http://localhost:4000/instructor/update/${userId}`, instructor,{
              headers:{token: token}
            })
            .then((res) => {
              getInstructors();
            })
            .catch((err) => {
                console.log(err);
            });
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
            <Table className='course_table' striped bordered hover>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
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
                              <Button className="update_btn" onClick={() => SelectInstructor(item._id)}>Update</Button>{" "}
                              <Button className='delete_btn' onClick={() => handleDelete(item._id)}>Delete</Button>
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
            <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Update instructor</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Instructor Name</Form.Label>
              <Form.Control
                name="name"
                type="text"
                value={name}
                onChange={(e) => {
                  setName(e.target.value);
                }}
                autoFocus
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Qualification</Form.Label>
              <Form.Control
                name="qualification"
                type="text"
                value={qualification}
                onChange={(e) => {
                  setQualification(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="exampleForm.ControlInput1">
              <Form.Label>Course Name</Form.Label>
              <Form.Control
                name="course"
                type="text"
                value={course}
                onChange={(e) => {
                  setCourse(e.target.value);
                }}
              />
            </Form.Group>
            <Form.Group className="btn_modal">
              <Button type="submit" onClick={UpdateInstructor} variant="primary">
                Update Instructor
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>
        </>
    )
}
export default ManageUsers;
