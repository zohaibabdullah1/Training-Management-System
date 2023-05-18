/* eslint-disable jsx-a11y/anchor-is-valid */
import React from 'react'

const SideBar = () => {
  return (
    <div>
        <h2>Admin Panel</h2>
        <ul>
        <li>
                <a href='#'>Create Course</a>
            </li><hr/>
            <li>
                <a href='#'>Update Course</a>
            </li><hr/>
            <li>
                <a href='#'>Track Progress</a>
            </li><hr/>
            <li>
                <a href='#'>Generate Reports</a>
            </li><hr/>
            <li>
                <a href='#'>Check Trainees</a>
            </li><hr/>
            <li>
                <a href='#'>Pending Enrollments</a>
            </li><hr/>
        </ul>
    </div>
  )
}

export default SideBar