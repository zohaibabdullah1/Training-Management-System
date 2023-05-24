import CourseComp from "./CourseComp";
import title from "./Images/php.jpg";
import mongo from "./Images/mongo.png";
import java from "./Images/Java.jpg";
import aws from "./Images/aws.png";

function UserProfile(){


    const enrolled_course =[

        { img: title, Iname: "Mr. Jack", heading: "PHP" },
        { img: mongo, Iname: "Mr. Alaxender", heading: "Mongo Data" },
        { img: java, Iname: "Mr. Hales", heading: "Java" },
        { img: aws, Iname: "Mr. Jack", heading: "AWS" }
    
      ];
    return(
        <>
        <div>
          <h4 className="latest_heading">Enrolled Courses:</h4>

          <div className="latest_flex">
            {enrolled_course.map((course, index) => (
              <CourseComp
                key={index}
                img={course.img}
                Iname={course.Iname}
                heading={course.heading}
              />
            ))}
          </div>
        </div>        
        </>
    );
}

export default UserProfile;