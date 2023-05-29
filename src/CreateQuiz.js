import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";
import { Link } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function CreateQuiz() {
  const [quizQuestion, setQuizQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [course, setCourse] = useState("");
  const [optionOne, setOptionOne] = useState("");
  const [optionTwo, setOptionTwo] = useState("");
  const [optionThree, setOptionThree] = useState("");
  const [optionFour, setOptionFour] = useState("");

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleQuizQuestionChange = (e) => {
    setQuizQuestion(e.target.value);
  };

  const handleAnswerChange = (selectedOption) => {
    setAnswer(selectedOption);
  };
  const handleCourseChange = (eventKey) => {
    setCourse(eventKey);
    console.log("Selected Answer:", eventKey);
  };

  const handleOptionOneChange = (e) => {
    setOptionOne(e.target.value);
  };

  const handleOptionTwoChange = (e) => {
    setOptionTwo(e.target.value);
  };

  const handleOptionThreeChange = (e) => {
    setOptionThree(e.target.value);
  };

  const handleOptionFourChange = (e) => {
    setOptionFour(e.target.value);
  };


 
    

  const handleSubmit = (e) => {
    e.preventDefault();

    // Create a new FormData object
    const formData = new FormData();
    formData.append("quetiosn", quizQuestion);
    formData.append("answer", answer);
    formData.append("course", course);
    formData.append("optionOne", optionOne);
    formData.append("optionTwo", optionTwo);
    formData.append("optionThree", optionThree);
    formData.append("optionFour", optionFour);

    // Make an API call to add the course to the database
    axios
      .post("/api/createquiz", formData)
      .then((response) => {
        // Handle success response
        console.log(response.data);
        // Reset the form fields
        setQuizQuestion("");
        setAnswer("");
        setCourse("");
        setOptionOne("");
        setOptionTwo("");
        setOptionThree("");
        setOptionFour("");
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
        <h1>Create Quiz</h1>
        <form className="form-create-course" onSubmit={handleSubmit}>
          <div>
          <Form.Group>
              <Form.Label>Subject:</Form.Label>
              <Dropdown className="sub-select" onSelect={handleCourseChange}>
                <Dropdown.Toggle variant="secondary">
                  {course ? course : "Select an option"}
                </Dropdown.Toggle>
                <Dropdown.Menu>
                  <Dropdown.Item eventKey="C++">C++</Dropdown.Item>
                  <Dropdown.Item eventKey="JavaScript">JavaScript</Dropdown.Item>
                  <Dropdown.Item eventKey="HTML">HTML</Dropdown.Item>
                  <Dropdown.Item eventKey="CSS">CSS</Dropdown.Item>
                  <Dropdown.Item eventKey="ReactJS">ReactJS</Dropdown.Item>
                  <Dropdown.Item eventKey="NodeJs">NodeJs</Dropdown.Item>
                  <Dropdown.Item eventKey="Express">Express</Dropdown.Item>
                </Dropdown.Menu>
              </Dropdown>
            </Form.Group>
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="quizQuestion"
              value={quizQuestion}
              placeholder="Write Question"
              onChange={handleQuizQuestionChange}
            />
          </div>
         
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="quizAnswer"
              value={answer}
              placeholder="Correct answer"
              onChange={handleAnswerChange}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionOne"
              value={optionOne}
              placeholder="Option One"
              onChange={handleOptionOneChange}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionTwo"
              value={optionTwo}
              placeholder="Option Two"
              onChange={handleOptionTwoChange}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionThree"
              value={optionThree}
              placeholder="Option Three"
              onChange={handleOptionThreeChange}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionFour"
              value={optionFour}
              placeholder="Option Four"
              onChange={handleOptionFourChange}
            />
          </div>
                    
          
          <Button type="submit">Create Quiz</Button>
        </form>
      </div>
    </>
  );
}

export default CreateQuiz;
