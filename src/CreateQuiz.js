import React, { useState } from "react";
import axios from "axios";
import AdminNav from "./AdminNav";
import AdminDrawerComp from "./AdminDrawer";
import { toast } from "react-toastify";
import { Link,useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import Dropdown from "react-bootstrap/Dropdown";

function CreateQuiz() {
  const navigate = useNavigate();
  const token = localStorage.getItem("aptoken");
  const [question, setQuestion] = useState("");
  const [answer, setAnswer] = useState("");
  const [subject, setSubject] = useState("");
  const [opt1, setOpt1] = useState("");
  const [opt2, setOpt2] = useState("");
  const [opt3, setOpt3] = useState("");
  const [opt4, setOpt4] = useState("");

  const [isOpen, setIsOpen] = React.useState(false);
  const toggleDrawer = () => {
    setIsOpen((prevState) => !prevState);
  };

  const handleQuestionChange = (e) => {
    setQuestion(e.target.value);
  };

  const handleAnswerChange = (e) => {
    setAnswer(e.target.value);
  };
  const handleSubjectChange = (eventKey) => {
    setSubject(eventKey);
  };

  const handleOpt1Change = (e) => {
    setOpt1(e.target.value);
  };

  const handleOpt2Change = (e) => {
    setOpt2(e.target.value);
  };

  const handleOpt3Change = (e) => {
    setOpt3(e.target.value);
  };

  const handleOpt4Change = (e) => {
    setOpt4(e.target.value);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // const formData = new FormData();
    // formData.append("subject", subject);
    // formData.append("question", question);
    // formData.append("answer", answer);
    // formData.append("opt1", opt1);
    // formData.append("opt2", opt2);
    // formData.append("opt3", opt3);
    // formData.append("opt4", opt4);
    let formData={subject,question,answer,opt1,opt2,opt3,opt4}
    console.log(formData)
    axios
    .post("http://localhost:4000/quiz/post", formData,{
      headers:{token: token}
    })
    .then((res) => {
      navigate("/managequiz");
      setQuestion("");
      setAnswer("");
      setSubject("");
      setOpt1("");
      setOpt2("");
      setOpt3("");
      setOpt4("");
      toast.success("Quiz Added Successfully", {
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
              <Dropdown className="sub-select" onSelect={handleSubjectChange}>
                <Dropdown.Toggle variant="secondary">
                  {subject ? subject : "Select an option"}
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
              value={question}
              placeholder="Write Question"
              onChange={handleQuestionChange}
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
              value={opt1}
              placeholder="Option One"
              onChange={handleOpt1Change}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionTwo"
              value={opt2}
              placeholder="Option Two"
              onChange={handleOpt2Change}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionThree"
              value={opt3}
              placeholder="Option Three"
              onChange={handleOpt3Change}
            />
          </div>
          <div>
            <input
              className="form-element-create-course"
              type="text"
              id="optionFour"
              value={opt4}
              placeholder="Option Four"
              onChange={handleOpt4Change}
            />
          </div>
          <Button type="submit">Create Quiz</Button>
        </form>
      </div>
    </>
  );
}

export default CreateQuiz;
