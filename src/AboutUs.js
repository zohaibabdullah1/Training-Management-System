import React from 'react'
import NavComp from './NavBrandComp';
import { Link, useNavigate } from "react-router-dom";


function AboutUs(){

  return(

    <>
    
    {<NavComp />}
      <div className="arrow">
    <Link to='/home'><i class='fas fa-chevron-circle-left back-arrow'></i></Link>
      </div>
    
    <div className='aboutUs'> 
    <h1>
      <b className='about_color'>A</b>bout <b className='about_color'>U</b>S
    </h1>
    <p className='about-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sint et laboriosam rerum, repudiandae ipsum dolores vitae, voluptas quidem ducimus delectus suscipit. Culpa quidem consectetur, laborum quo cum est eum repellat amet porro quisquam! Minus perferendis aperiam animi hic consectetur illo fuga earum, consequuntur quas similique qui accusantium, placeat debitis!
      </p>
      <p className='about-para'>
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Natus sint et laboriosam rerum, repudiandae ipsum dolores vitae, voluptas quidem ducimus delectus suscipit. Culpa quidem consectetur, laborum quo cum est eum repellat amet porro quisquam! Minus perferendis aperiam animi hic consectetur illo fuga earum, consequuntur quas similique qui accusantium, placeat debitis!
      </p>
    </div>

    </>

    
  );
}
export default AboutUs;