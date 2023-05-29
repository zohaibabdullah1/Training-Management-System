import React from "react";
import { Link } from "react-router-dom";
// import "./style.css";

const QuizSubmissionPage = () => {
  // Function to handle quiz submission
  // const handleSubmit = () => {
    // Perform quiz submission logic
    // Redirect to the results page
  // };

  return (
    <div className="quiz-submission-page">
      <h1>Submitted</h1>
      <p>Your Response is submitted.</p>
      <Link to="/result" className="see-results-btn">
        See Results
      </Link>
    </div>
  );
};

export default QuizSubmissionPage;
