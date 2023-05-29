import React from "react";
import ListGroup from "react-bootstrap/ListGroup";
import NavComp from "./NavBrandComp";
import {Link} from 'react-router-dom';

function SelectQuiz(){
    return(
        <div >
            {<NavComp/>}
            <h2 className="selectQuiz-text">Take a Quiz</h2>
            <div className="selectQuiz-main">
          <ListGroup >

          <Link className="selectQuiz-list" to="/startquiz">C++</Link>
          <Link className="selectQuiz-list" to="/startquiz">JavaScript</Link>
          <Link className="selectQuiz-list" to="/startquiz">HTML</Link>
          <Link className="selectQuiz-list" to="/startquiz">CSS</Link>
          <Link className="selectQuiz-list" to="/startquiz">React</Link>
          <Link className="selectQuiz-list" to="/startquiz">NodeJs</Link>
          <Link className="selectQuiz-list" to="/startquiz">Express</Link>
            
          </ListGroup>
        </div>
        </div>
    );
}

export default SelectQuiz;