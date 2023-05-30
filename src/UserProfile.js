import React, { useState } from "react";
import Image from "./Images/avat.png"
import { Link } from "react-router-dom";
import NavComp from "./NavBrandComp";

function UserProfilePage() {
  const [userImage, setUserImage] = useState({ Image });
  const [username, setUsername] = useState("John Doe");
  const [email, setEmail] = useState("johndoe@example.com");
  const [isEditing, setIsEditing] = useState(false);

  const handleEdit = () => {
    setIsEditing(true);
  };

  const handleSave = () => {
    setIsEditing(false);
    // Perform save operation, e.g., make an API call to update user profile
  };

  const handleCancel = () => {
    setIsEditing(false);
    // Reset the input fields to the original values
    setUsername("John Doe");
    setEmail("johndoe@example.com");
  };

  const handleImageChange = (e) => {
    setUserImage(e.target.value);
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleEmailChange = (e) => {
    setEmail(e.target.value);
  };

  return (
<div>
<NavComp />
    <div className="user-profile-background">
      
      <div className="arrow">
        <Link to="/lms">
          <i className="fas fa-chevron-circle-left back-arrow"></i>
        </Link>
      </div>
      <div className="user-profile-container">
        <h1 className="user-profile-title">User <b className="green_color">Profile</b></h1>
        <div >
          <label className="green_color" htmlFor="userImage">User Image:</label>
          <br />
          {isEditing ? (
            <input
              type="text"
              id="userImage"
              value={userImage}
              onChange={handleImageChange}
            />
          ) : (
            <img className="user-profile-image" src={userImage} alt="User" />
          )}
        </div>

        <form className="user-profile-form" >
          <div >

            <label className="user-profile-form-label" htmlFor="username">Username:</label>
            <br />
            {isEditing ? (
              <input className="user-profile-form-input"
                type="text"
                id="username"
                value={username}
                onChange={handleUsernameChange}
              />
            ) : (
              <span>{username}</span>
            )}
          </div>
          <div>
            <label className="user-profile-form-label" htmlFor="email">Email:</label>
            <br />
            {isEditing ? (
              <input className="user-profile-form-input"
                type="email"
                id="email"
                value={email}
                onChange={handleEmailChange}
              />
            ) : (
              <span>{email}</span>
            )}
          </div>
          {isEditing ? (
            <div className="profile_btn">
              <button className="profile_save" onClick={handleSave}>Save</button>
              <button className="profile_cancel" onClick={handleCancel}>Cancel</button>
            </div>
          ) : (
            <button className="user-profile-form-button" onClick={handleEdit}>Edit</button>
          )}
        </form>
      </div>
    </div>
    </div>
  );
}

export default UserProfilePage;
