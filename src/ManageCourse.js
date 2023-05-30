/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from "react";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Table } from "react-bootstrap";
import axios from "axios";
import AdminNav from "./AdminNav";
import Form from "react-bootstrap/Form";
import Modal from "react-bootstrap/Modal";
import AdminDrawerComp from "./AdminDrawer";

function ManageCourse() {
  const [isOpen, setIsOpen] = useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [show, setShow] = useState(false);
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [userId, setUserId] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [instructor, setInstructor] = useState("");
  const token = localStorage.getItem("aptoken");
  const [courses, setCourses] = useState([]);
  const getCourses=()=>{
    axios
      .get("http://localhost:4000/course", {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setCourses(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }
  useEffect(() => {
    getCourses();
  }, [courses]);

  const handleDelete = async (id) => {
    try {
      await axios.delete(`http://localhost:4000/course/delete/${id}`,{
        headers: {
          token: token,
        },
      })
      .then((res) => {
        getCourses();
      });
    } catch (error) {
      console.error(error);
    }
  };

  //Update Method API
    const SelectCourse = (id) => {
        handleShow();
        axios
      .get(`http://localhost:4000/course/${id}`, {
        headers: {
          token: token,
        },
      })
      .then((res) => {
        setTitle(res.data.title);
        setDescription(res.data.description);
        setInstructor(res.data.instructor);
        setUserId(res.data._id);
      })
      .catch((err) => {
        console.log(err);
      });
      };
      const UpdateCourse = () => {
        let course = {title, description, instructor};
        axios
        .put(`http://localhost:4000/course/update/${userId}`, course,{
          headers:{token: token}
        })
        .then((res) => {
          getCourses();
        })
        .catch((err) => {
            console.log(err);
        });
      };

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
      <Table className="course_table" striped bordered hover>
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
                <Button className="update_btn" onClick={() => SelectCourse(item._id)}>Update</Button>{" "}
                <Button className='delete_btn' onClick={() => handleDelete(item._id)}>Delete</Button>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
      <br />
      <Link to="/createcourse">
        <Button className="add_btn">Add New Course</Button>
      </Link>
      <Modal show={show} onHide={handleClose}>
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
              <Button type="submit" onClick={UpdateCourse} variant="primary">
                Update Course
              </Button>
            </Form.Group>
          </Form>
        </Modal.Body>
      </Modal>

    </>
  );
}
export default ManageCourse;
