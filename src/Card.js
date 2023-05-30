import React from "react";
import Card from "react-bootstrap/Card";
import Col from "react-bootstrap/Col";
import { useNavigate } from "react-router-dom";
import Button from "react-bootstrap/Button";

function Cards({course}) {
  const navigate = useNavigate();
  function Enroll_Nav() {
    navigate("/enroll");
  }
  console.log(course.image)

    return(
        <div >
      <Col>
        <Card className="cat-cards">
          <Card.Img
            className="cat-img"
            variant="top"
            src={course.image}
            alt={course.title}
          />
          <Card.Body>
            <Card.Title>{course.title}</Card.Title>
            <Card.Title>{course.instructor}</Card.Title>
            <Card.Text>{course.description}</Card.Text>
            <Button variant="dark " className="btn" onClick={Enroll_Nav}>
              Enroll Now
            </Button>
          </Card.Body>
        </Card>
      </Col>
    </div>
  );
}
export default Cards;
