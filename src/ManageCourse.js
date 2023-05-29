import React from 'react';
import { Button } from 'react-bootstrap';
import { Link } from 'react-router-dom';

function ManageCourse() {
    return (
        <>
            <table className='course_table'>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Instructor Name</th>
                        <th>Qualification</th>
                        <th>Course Name</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td>1</td>
                        <td></td>
                        <td></td>
                        <td></td>
                        <td><Link to="/createcourse">
                        <Button  className='update_btn'>Update</Button>
                        </Link>
                        <Button className='delete_btn'>Delete</Button></td>
                        
                    </tr>
                   

                </tbody>
            </table>
            <br />
            <Link to="/createcourse">
            <button className='add_btn'>
                Add Instructor
            </button>
            </Link>
        </>
    )
}
export default ManageCourse
