import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";
import { Link } from "react-router-dom";

function AddInstructor() {
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [instructorName, setInstructorName] = useState("");
  const [qualification, setQualification] = useState("");
  const [coursesTeaching, setCoursesTeaching] = useState("");
  const [instructorImage, setInstructorImage] = useState(null);

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleInstructorNameChange = (e) => {
    setInstructorName(e.target.value);
  };

  const handleCoursesTeachingChange = (e) => {
    setCoursesTeaching(e.target.value);
  };

  const handleInstructorImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match("image/jpeg|image/jpg|image/png")) {
      setInstructorImage(file);
    } else {
      setInstructorImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    formData.append("instructorName", instructorName);
    formData.append("qualification", qualification);
    formData.append("coursesTeaching", coursesTeaching);
    formData.append("instructorImage", instructorImage);

    // Make an API call to add the course to the database
    axios
      .post("/api/addInstructor", formData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
        // Reset the form fields

        setInstructorName("");
        setQualification("");
        setCoursesTeaching("");
        setInstructorImage(null);
      })
      .catch((error) => {
        // Handle error response
        console.error(error);
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
      <div className="main-container-create-course">
        <h1>Add Instructor</h1>
        <form className="form-create-course" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="instructorName"
              value={instructorName}
              placeholder="Instructor Name"
              onChange={handleInstructorNameChange}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="qualification"
              value={qualification}
              placeholder="Qualification"
              onChange={handleQualificationChange}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="coursesTeaching"
              value={coursesTeaching}
              placeholder="Course Teaching"
              onChange={handleCoursesTeachingChange}
            />
          </div>
          <div className="create-course-img">
            <label htmlFor="instructorImage">Instructor Image (JPEG/PNG)</label>
            <input
              className="form-element-create-course-choose-img"
              type="file"
              id="instructorImage"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleInstructorImageChange}
            />
          </div>
          <button type="submit" disabled={!instructorImage}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddInstructor;
