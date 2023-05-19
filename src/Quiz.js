import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NavComp from "./NavBrandComp";

function Quiz(){
    return(
        <div >
            {<NavComp/>}
            <h2 className="quiz-text">Take a Quiz</h2>
            <div className="quiz-main">
          <ListGroup >
            <ListGroup.Item className="quiz-list" action href="/cpp">
              C++
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action href="/quiz">
              C#
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action>
              JavaScript
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action>
              CSS
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action>
              HTML
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action>
              React
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action>
              NodeJs
            </ListGroup.Item>
            <ListGroup.Item className="quiz-list" action>
              Python
            </ListGroup.Item>
          </ListGroup>
        </div>
        </div>
    );
}

export default Quiz;