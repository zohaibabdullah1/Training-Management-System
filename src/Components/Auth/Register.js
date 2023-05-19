import { FormGroup, Label, Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import ButtonGroup from "react-bootstrap/ButtonGroup";
import ToggleButton from "react-bootstrap/ToggleButton";
import Button from "react-bootstrap/Button";
import NavComp from "../../NavBrandComp";

function RegForm() {
  const Navigate = useNavigate();
  const login = () => {
    Navigate("/login");
  };

  const [radioValue, setRadioValue] = useState("1");
  const radios = [
    { name: "Login", value: "3" },

    { name: "Register", value: "1" },
  ];
  return (
    <>
      {<NavComp />}
      <div className="arrow">
    <Link to='/login'><i class='fas fa-chevron-circle-left back-arrow'></i></Link>
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
          <Form action="post">
            <h2 className="display-6">Register</h2>
            <FormGroup className="position-relative">
              <Label for="username">User Name</Label>
              <Input type="username" required />
            </FormGroup>
            <FormGroup className="position-relative">
              <Label for="email">Email Address</Label>
              <Input type="email" required />
            </FormGroup>
            <FormGroup className="position-relative">
              <Label for="password">Create Password</Label>
              <Input type="password" required />
            </FormGroup>
            <FormGroup className="position-relative">
              <Label for="password">Confirm Password</Label>
              <Input type="password" required />
            </FormGroup>
            <Form.Check
              aria-label="option 1"
              label="I have read terms & conditions"
            />
            <div className="d-grid gap-2">
              <Button size="lg">Sign up</Button>
            </div>
          </Form>
        </div>
      </div>
    </>
  );
}

export default RegForm;
