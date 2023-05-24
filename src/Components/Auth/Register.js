import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { FormGroup, Label, Input } from "reactstrap";
import { ButtonGroup, ToggleButton } from "react-bootstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavComp from "../../NavBrandComp";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function RegForm() {
  const navigate = useNavigate();

  const [username, setUsername] = useState("");
  const [role, setRole] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [radioValue, setRadioValue] = useState("1");

  const handleRegistration = (e) => {
    e.preventDefault();
    if (!username) {
      toast.error("Please Enter Username",
      {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }
  else if (!email){
    toast.error("Please Enter Email Address",
    {
      autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return; 
    }
  else if (!password || !confirmPassword){
    toast.error("Please Enter Password",
    {
      autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
  }
  else if (password !== confirmPassword) {
    toast.error("Password does not match!",
    {
      // position: 'top-center',
      autoClose: 5000,
      hideProgressBar: true,
      closeOnClick: true,
      pauseOnHover: true,
      draggable: true
    });
    return;
  }

    setUsername("");
    setEmail("");
    setPassword("");
    setConfirmPassword("");
    toast.success("You are registered!",
      {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      console.log(role)
      // const save={}
    // navigate("/login");
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "username") {
      setUsername(value);
    } else if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    } else if (name === "confirmPassword") {
      setConfirmPassword(value);
    }
  };

  const radios = [
    { name: "Login", value: "3" },
    { name: "Register", value: "1" },
  ];

  const login = () => {
    navigate("/login");
  };

  return (
    <>
      <div className="login-container">
        <NavComp />

        <div className="arrow">
          <Link to="/login">
            <i className="fas fa-chevron-circle-left back-arrow"></i>
          </Link>
        </div>

        <div className="Toggle">
          <ButtonGroup>
            {radios.map((radio, idx) => (
              <ToggleButton
                key={idx}
                style={{
                  backgroundColor: "#ff6d34",
                  border: "#ff6d34",
                  fontSize: "1rem",
                }}
                id={`radio-${idx}`}
                type="radio"
                variant={idx % 2 ? "outline-dark" : "outline-dark"}
                name="radio"
                value={radio.value}
                checked={radioValue === radio.value}
                onChange={(e) => setRadioValue(e.currentTarget.value)}
                onClick={login}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <div className="Login-Form">
          <div className="login">
            <Form onSubmit={handleRegistration}>
              <h2 className="display-6">Register</h2>
              <FormGroup className="position-relative">
                <Label for="username">User Name</Label>
                <Input
                  type="text"
                  name="username"
                  value={username}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="position-relative">
                <Label for="email">Email Address</Label>
                <Input
                  type="email"
                  name="email"
                  value={email}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="position-relative">
                <Label for="password">Create Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="position-relative">
                <Label for="confirmPassword">Confirm Password</Label>
                <Input
                  type="password"
                  name="confirmPassword"
                  value={confirmPassword}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <FormGroup className="position-relative">
                <Input
                  type="hidden"
                  name="role"
                  value={role}
                  onChange={setRadioValue("user")}
                />
              </FormGroup>
              <Form.Check
                aria-label="option 1"
                label="I have read terms & conditions"
              />
              <div className="d-grid gap-2">
                <Button size="lg" type="submit">
                  Sign up
                </Button>
              </div>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default RegForm;
