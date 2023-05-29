import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";
import { toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";

function AddInstructor() {
  const navigate = useNavigate();
  const token = localStorage.getItem("aptoken");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const [instructor, setInstructor] = useState("");
  const [qualification, setQualification] = useState("");
  const [course, setCourse] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleQualificationChange = (e) => {
    setQualification(e.target.value);
  };

  const handleInstructorChange = (e) => {
    setInstructor(e.target.value);
  };

  const handleCourseChange = (e) => {
    setCourse(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();

    formData.append("instructor", instructor);
    formData.append("qualification", qualification);
    formData.append("course", course);
    formData.append("image", newImage);

    axios
      .post("http://localhost:4000/instructor/post", formData,{
        headers:{token: token}
      })
      .then((res) => {
        setInstructor("");
        setQualification("");
        setCourse("");
        setNewImage(null);
        navigate("/admin");
        toast.success("Instructor Added Successfully", {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      })
      .catch((err) => {
        toast.error(err.response.data.message, {
          autoClose: 2000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true,
        });
      });
    // Make an API call to add the course to the database
    axios
      .post("/api/addInstructor", formData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
        // Reset the form fields

        setInstructor("");
        setQualification("");
        setCourse("");
        setNewImage(null);
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
              value={instructor}
              placeholder="Instructor Name"
              onChange={handleInstructorChange}
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
              value={course}
              placeholder="Course Teaching"
              onChange={handleCourseChange}
            />
          </div>
          <div className="create-course-img">
            <label htmlFor="instructorImage">Instructor Image (JPEG/PNG)</label>
            <input
              className="form-element-create-course-choose-img"
              type="file"
              id="instructorImage"
              accept="image/jpeg, image/jpg, image/png"
              onChange={(e)=>{setNewImage(e.target.files[0])}}
            />
          </div>
          <button type="submit" disabled={!newImage}>
            Add
          </button>
        </form>
      </div>
    </>
  );
}

export default AddInstructor;
