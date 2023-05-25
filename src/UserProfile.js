import React, { useState } from "react";
import Image from "./Images/avat.png"

function UserProfilePage() {
  const [userImage, setUserImage] = useState({Image});
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
    <div className="user-profile-container">
      <h1 className="user-profile-title">User Profile</h1>
      <div>
        <label htmlFor="userImage">User Image:</label>
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
      <div>
      
        <label className="user-profile-form-label" htmlFor="username">Username:</label>
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
        <div>
          <button onClick={handleSave}>Save</button>
          <button onClick={handleCancel}>Cancel</button>
        </div>
      ) : (
        <button className="user-profile-form-button" onClick={handleEdit}>Edit</button>
      )}
      </form>
    </div>
  );
}

export default UserProfilePage;
