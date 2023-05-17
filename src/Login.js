import "./App.css";
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import "./index.css";
import { FormGroup, Label, Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import { useState } from 'react';
import ButtonGroup from 'react-bootstrap/ButtonGroup';
import ToggleButton from 'react-bootstrap/ToggleButton';
import Button from 'react-bootstrap/Button';
// import Form from 'react-bootstrap/Form';


function LoginForm() {
    // const [checked, setChecked] = useState(false);
    const [radioValue, setRadioValue] = useState('1');
    const radios = [
        { name: 'Login', value: '1' },
       
        { name: 'Register', value: '3' },
      ];
  return (
<>
<div className="Toggle">
      <ButtonGroup>
        {radios.map((radio, idx) => (
          <ToggleButton
            key={idx}
            id={`radio-${idx}`}
            type="radio"
            variant={idx % 2 ? 'outline-success' : 'outline-success'}
            name="radio"
            value={radio.value}
            checked={radioValue === radio.value}
            onChange={(e) => setRadioValue(e.currentTarget.value)}
          >
            {radio.name}
          </ToggleButton>
        ))}
      </ButtonGroup>
    </div>


    

    <div className="Login-Form">
      <div className="login">
        <Form action="post">
          <h2 className="display-6">Login</h2>
          <FormGroup className="position-relative">
            <Label for="email">Email Address</Label>
            <Input type="email" required />
          </FormGroup>
          <FormGroup className="position-relative">
            <Label for="password">Password</Label>
            <Input type="password" required />
          </FormGroup>
          <Form.Check aria-label="option 1" label="Remember me" />
          <div className="d-grid gap-2">
          <Button size="lg">Login</Button>
          </div>
          <a className="Forgot-Pass" href="#">Lost your Password? </a>
        </Form>
      </div>

    </div></>
  );
}

export default LoginForm;
//   export default CheckExample;
