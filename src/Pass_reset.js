import { FormGroup, Label, Input } from "reactstrap";
import Form from "react-bootstrap/Form";
import Button from "react-bootstrap/Button";
import NavComp from "./NavBrandComp";

function PassReset() {
 
    return (
      <>
        {<NavComp />}  
        <div className="Reset-Form">
          <div className="login">
            <Form action="post">
              <h2 className="display-6">Reset Password</h2>
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
              <div className="d-grid gap-2" id="reset-id">
                <Button size="lg">Create New Password</Button>
              </div>
            </Form>
          </div>
        </div>
      </>
    );
  }
  
  export default PassReset;