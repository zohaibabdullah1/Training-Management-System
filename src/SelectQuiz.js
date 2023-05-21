import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NavComp from "./NavBrandComp";

function SelectQuiz(){
    return(
        <div >
            {<NavComp/>}
            <h2 className="selectQuiz-text">Take a Quiz</h2>
            <div className="selectQuiz-main">
          <ListGroup >
            <ListGroup.Item className="selectQuiz-list" action href="/startquiz">
              C++
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action href="/selectquiz">
              C#
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action>
              JavaScript
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action>
              CSS
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action>
              HTML
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action>
              React
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action>
              NodeJs
            </ListGroup.Item>
            <ListGroup.Item className="selectQuiz-list" action>
              Python
            </ListGroup.Item>
          </ListGroup>
        </div>
        </div>
    );
}

export default SelectQuiz;