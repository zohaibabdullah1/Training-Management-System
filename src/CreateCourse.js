import React, { useState } from "react";
import axios from "axios";
import NavComp from "./NavBrandComp";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";

function CreateCourse() {

    const [isOpen, setIsOpen] = React.useState(false);
    const toggleDrawer = () => {
      setIsOpen((prevState) => !prevState);
    };
  const [courseTitle, setCourseTitle] = useState("");
  const [instructorName, setInstructorName] = useState("");
  const [courseDescription, setCourseDescription] = useState("");
  const [courseImage, setCourseImage] = useState(null);

  const handleCourseTitleChange = (e) => {
    setCourseTitle(e.target.value);
  };

  const handleInstructorNameChange = (e) => {
    setInstructorName(e.target.value);
  };

  const handleCourseDescriptionChange = (e) => {
    setCourseDescription(e.target.value);
  };

  const handleCourseImageChange = (e) => {
    const file = e.target.files[0];
    if (file && file.type.match("image/jpeg|image/jpg|image/png")) {
      setCourseImage(file);
    } else {
      setCourseImage(null);
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("title", courseTitle);
    formData.append("instructorName", instructorName);
    formData.append("description", courseDescription);
    formData.append("image", courseImage);

    // Make an API call to add the course to the database
    axios
      .post("/api/courses", formData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
        // Reset the form fields
        setCourseTitle("");
        setInstructorName("");
        setCourseDescription("");
        setCourseImage(null);
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
            <AdminNav toggle={toggleDrawer} open={isOpen}/>
            <AdminDrawerComp toggle={toggleDrawer} open={isOpen} />
        </div>
      <div className="main-container-create-course">
        <h1>Add Course</h1>
        <form className="form-create-course" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="courseTitle"
              value={courseTitle}
              placeholder="Course Title"
              onChange={handleCourseTitleChange}
            />
          </div>
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
            <textarea
              className="form-element-create-course"
              id="courseDescription"
              value={courseDescription}
              placeholder="Course Description"
              onChange={handleCourseDescriptionChange}
            ></textarea>
          </div>
          <div className="create-course-img">
            <label htmlFor="courseImage">Course Image (JPEG/PNG)</label>
            <input
              className="form-element-create-course-choose-img"
              type="file"
              id="courseImage"
              accept="image/jpeg, image/jpg, image/png"
              onChange={handleCourseImageChange}
            />
          </div>
          <button type="submit" disabled={!courseImage}>
            Add Course
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateCourse;
