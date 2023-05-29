import React from "react";
import Table from "react-bootstrap/Table";

function ResultTable({ totalMarks, obtainedMarks, grade }) {
  return (
    <>
    <Table striped bordered hover >
      <thead>
        <tr>
          <th>Total Marks</th>
          <th>Obtained Marks</th>
          <th>Grade</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>{totalMarks}</td>
          <td>{obtainedMarks}</td>
          <td>{grade}</td>
        </tr>
      </tbody>
    </Table>
    </>
    
  );
}

export default ResultTable;
