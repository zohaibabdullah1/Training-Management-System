import { FormGroup, Label, Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import React from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import NavComp from "../../NavBrandComp";
import { toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';

function LoginForm() {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [radioValue, setRadioValue] = useState("1");

  const handleLogin = async (e) => {
    e.preventDefault();

    // Validate email and password
    if (!email) {
      toast.error("Please Enter Email", {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    else if (!password) {
      toast.error("Please Enter Password", {
        autoClose: 5000,
        hideProgressBar: true,
        closeOnClick: true,
        pauseOnHover: true,
        draggable: true
      });
      return;
    }

    // try {
    //   // Perform login operation by making an API call to the backend server
    //   const response = await fetch("/api/login", {
    //     method: "POST",
    //     headers: {
    //       "Content-Type": "application/json",
    //     },
    //     body: JSON.stringify({ email, password }),
    //   });

    //   if (response.ok) {
    //     // Clear form fields
    //     setEmail("");
    //     setPassword("");

    //     // Redirect to the desired page after successful login
        toast.success("Welcome! You are logged in.", {
          autoClose: 5000,
          hideProgressBar: true,
          closeOnClick: true,
          pauseOnHover: true,
          draggable: true
        });
        navigate("/lms");
    //   } else {
    //     // Handle login error
    //     const errorData = await response.json();
    //     toast.error(errorData.message, {
    //       autoClose: 5000,
    //       hideProgressBar: true,
    //       closeOnClick: true,
    //       pauseOnHover: true,
    //       draggable: true
    //     });
    //   }
    // } catch (error) {
    //   // Handle network or server errors
    //   console.error("Login failed:", error);
    //   toast.error("Login failed. Please try again later.", {
    //     autoClose: 5000,
    //     hideProgressBar: true,
    //     closeOnClick: true,
    //     pauseOnHover: true,
    //     draggable: true
    //   });
    // }
  };

  const handleInputChange = (e) => {
    const { name, value } = e.target;

    if (name === "email") {
      setEmail(value);
    } else if (name === "password") {
      setPassword(value);
    }
  };

  const register = () => {
    navigate("/register");
  };

  const radios = [
    { name: "Login", value: "1" },
    { name: "Register", value: "3" },
  ];

  return (
    <>
      <div className="login-container">
        <NavComp />
        <div className="arrow">
          <Link to="/">
            <i class='fas fa-chevron-circle-left back-arrow'></i>
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
                onClick={register}
              >
                {radio.name}
              </ToggleButton>
            ))}
          </ButtonGroup>
        </div>

        <div className="Login-Form">
          <div className="login">
            <Form onSubmit={handleLogin}>
              <h2 className="display-6">Login</h2>
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
                <Label for="password">Password</Label>
                <Input
                  type="password"
                  name="password"
                  value={password}
                  onChange={handleInputChange}
                />
              </FormGroup>
              <Form.Check aria-label="option 1" label="Remember me" />
              <div className="d-grid gap-2">
                <Button size="lg" type="submit">
                  Login
                </Button>
              </div>
              <Link className="Forgot-Pass" to="/forget">
                Lost your Password?
              </Link>
            </Form>
          </div>
        </div>
      </div>
    </>
  );
}

export default LoginForm;
