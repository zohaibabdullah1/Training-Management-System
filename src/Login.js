import './App.css';
// import React from 'react';
// import ReactDOM from 'react-dom/client';
import './index.css';
import {Form, FormGroup, Label, Input} from 'reactstrap';
// import Form from 'react-bootstrap/Form';
// import App from './App';
// import reportWebVitals from './reportWebVitals';

function LoginForm() {
    return (
      
        <div className='login'>
        <Form action='post'>
        <h2 className="display-6">Login Page</h2>
        <FormGroup className="position-relative">
          <Label for="email">Email Address</Label>
          <Input type='email' value="talhanonari@gmail.com" required/>
        </FormGroup>
        <FormGroup className="position-relative">
          <Label for="password">Password</Label>
          <Input type='password' value="syco321" required/>
        </FormGroup>
    

        <div key={`default-${type}`} className="mb-3">
          <Form.Check 
            type={type}
            id={`default-${type}`}
            label={`default ${type}`}
          />
        </div>
      

          <div className="d-grid">
      {/* <Button variant='success' size='md' onClick=>Login</Button> */}
          </div>
      </Form>
        {/* <Outlet/> */}
        
       
      </div>
    );
  }
  
  export default LoginForm;