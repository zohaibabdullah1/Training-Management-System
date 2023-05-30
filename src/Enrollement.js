import React, { useState } from "react";
// import { useHistory } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import { Button } from "react-bootstrap";
import { Link } from "react-router-dom";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import NavComp from "./NavBrandComp";

function CourseEnrollmentPage() {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [course, setCourse] = useState("");
  const [agreed, setAgreed] = useState(false);

  const handleEnrollment = () => {
    if (!name || !email || !course) {
      toast.error("Please fill in all the required fields.", {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    if (!agreed) {
      toast.error("Please agree to the terms and conditions.", {
        autoClose: 3000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    // Handle course enrollment logic here

    toast.success("Your Course is Enrolled.", {
      autoClose: 3000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    navigate("/lms"); 
  };

  return (

    <>

      <NavComp />
      <div className="arrow">
        <Link to="/lms">
          <i className="fas fa-chevron-circle-left back-arrow"></i>
        </Link>
      </div>

      <div className="main-container-create-course">
        <h2 className="enrolle">Course Enrollment</h2>
        <form className="form-create-course">
          <FormGroup>
            <Input
              className="form-element-create-course"
              type="text"
              name="name"
              value={name}
              placeholder="Full Name"
              onChange={(e) => setName(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="form-element-create-course"
              type="email"
              name="email"
              value={email}
              placeholder="Email Address"
              onChange={(e) => setEmail(e.target.value)}
            />
          </FormGroup>
          <FormGroup>
            <Input
              className="form-element-create-course"
              type="select"
              name="course"
              value={course}
              placeholder="Select a course"
              onChange={(e) => setCourse(e.target.value)}
            >
              <option value="">Select a course</option>
              <option value="course1">Course 1</option>
              <option value="course2">Course 2</option>
              <option value="course3">Course 3</option>
            </Input>
          </FormGroup>
          <FormGroup check>
            <Label check>
              <Input

                type="checkbox"
                checked={agreed}
                onChange={(e) => setAgreed(e.target.checked)}
              />{" "}
              I agree to the terms and conditions
            </Label>
          </FormGroup>
          <Button className="enrolle-button" onClick={handleEnrollment}>Enroll</Button>
        </form>
      </div>
    </>

  );
}

export default CourseEnrollmentPage;
