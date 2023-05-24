import React from 'react';
import Enrolled_Courses from'./enrolled_courses';
import NavBarComponent from './NavBar';

function UserProfile(){
    

    return(
        <>
        <div className='my_profile_main'>
        
        <NavBarComponent/>
        <Enrolled_Courses/>
        </div>
        </>
    );
}

export default UserProfile;