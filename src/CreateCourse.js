import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";
import { toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";

function CreateCourse() {
  const navigate = useNavigate();
  const token = localStorage.getItem("aptoken");
  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };
  const [title, setTitle] = useState("");
  const [instructor, setInstructor] = useState("");
  const [description, setDescription] = useState("");
  const [newImage, setNewImage] = useState(null);

  const handleTitleChange = (e) => {
    setTitle(e.target.value);
  };

  const handleInstructorChange = (e) => {
    setInstructor(e.target.value);
  };

  const handleDescriptionChange = (e) => {
    setDescription(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("title", title);
    formData.append("instructor", instructor);
    formData.append("description", description);
    formData.append("image", newImage);
    axios
      .post("http://localhost:4000/course/post", formData,{
        headers:{token: token}
      })
      .then((res) => {
        setTitle("");
        setInstructor("");
        setDescription("");
        setNewImage(null);
        navigate("/managecourse");
        toast.success("Course Added Successfully", {
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
        <h1>Add Course</h1>
        <form className="form-create-course" onSubmit={handleSubmit}>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="courseTitle"
              value={title}
              placeholder="Course Title"
              onChange={handleTitleChange}
            />
          </div>
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
            <textarea
              className="form-element-create-course"
              id="courseDescription"
              value={description}
              placeholder="Course Description"
              onChange={handleDescriptionChange}
            ></textarea>
          </div>
          <div className="create-course-img">
            <label htmlFor="courseImage">Course Image (JPEG/PNG)</label>
            <input
              className="form-element-create-course"
              type="file"
              name="image"
              id="courseImage"
              accept="image/jpeg, image/jpg, image/png"
              onChange={(e)=>{setNewImage(e.target.files[0])}}
            />
          </div>
          <button type="submit" disabled={!newImage}>
            Add Course
          </button>
        </form>
      </div>
    </>
  );
}

export default CreateCourse;
