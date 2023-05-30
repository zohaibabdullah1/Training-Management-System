import React from "react";
import NavComp from "./NavBrandComp";
import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import flex_img from "./Images/aboutus flex.jpeg";
// import './AboutUs.css'; // Import the CSS file for styling

function AboutUs() {
  return (
    <>
      <div className="contact_bg">
        <NavComp />
        <div className="aboutus_bg">
          <div className="main-container">
            <NavBarComponent />
          </div>
          <h1 className="contats_h">About Us</h1>
        </div>
        <div className="aboutUs">
          <h2 className="coler">What We Do:</h2>
          <p className="about-para">
            Our online course website offers a wide range of educational
            opportunities for learners of all levels. With our user-friendly
            interface and intuitive navigation, you can easily browse and enroll
            in courses that align with your interests and goals. Our experienced
            instructors, who are experts in their respective fields, deliver
            engaging and interactive lessons that promote active learning.
            Whether you're looking to acquire new skills, enhance your
            knowledge, or explore a new passion, our platform provides a
            flexible and convenient way to achieve your educational aspirations.
            Join our community of motivated learners and embark on a journey of
            personal and professional growth today.
          </p>
          <h2 className="coler">Requirements We Fulfill:</h2>
          <p className="about-para">
            Our online course website fulfills several key requirements to
            ensure a seamless learning experience. First, we offer a diverse
            range of courses in various subject areas, catering to the needs and
            interests of our learners. Our courses are designed to be accessible
            and engaging, utilizing multimedia content, interactive quizzes, and
            practical exercises to enhance understanding and retention.
          </p>
          <p>
            Second, our platform provides a user-friendly interface that
            simplifies course discovery, enrollment, and progress tracking.
            Learners can easily navigate through course catalogs, view detailed
            syllabi, and monitor their own learning journey with progress
            indicators and completion certificates.
          </p>
          <p>
            Third, our website features a robust learning management system
            (LMS) that facilitates effective course delivery and communication.
            Our instructors have access to tools for uploading course materials,
            creating assignments, and providing personalized feedback to
            learners. Additionally, learners can interact with instructors and
            peers through discussion forums, messaging systems, and virtual
            classrooms.
          </p>
          <p>
            Furthermore, our online course website prioritizes flexibility,
            allowing learners to access course content at their own pace and
            convenience. Our platform is compatible with various devices,
            enabling learners to study on their preferred devices, whether it's
            a desktop, laptop, tablet, or smartphone.
          </p>
          <p>
            Lastly, we prioritize the security and privacy of our users'
            information. Our website adheres to industry-standard security
            protocols and employs encryption technologies to safeguard personal
            data.
          </p>
          <p>
            By fulfilling these requirements, we ensure that our online course
            website delivers a seamless and enriching learning experience for
            our users.
          </p>
          <div className="about_flex">
            <div className="col-sm-5">
              <img
                alt=""
                src={flex_img}
//                 srcset="
//   image-300x300.jpg   768w,
//   image-150x150.jpg  320w,
//   image-100x100.jpg   240w,
// "
                // className="d-inline-block align-top"
              />
            </div>
            <div className="col-sm-8 list_spacing">
              <h2 className="coler">
                Software Development & Quality Assurance Services
              </h2>
              <ul>
                <li>
                  Software Development, Testing, Automated Testing, User
                  Documentation, UI/UX Design.
                </li>
                <li>
                  Legacy Migration, Legacy Support, Maintenance, SQA Automation,
                  Manual QA, Augmented R&D, Initiative Support/Development,
                  Modernization…
                </li>
                <li>
                  .NET, Java, JavaScript (Angular, React, TypeScript, Node,
                  etc), HTML5, Responsive, iOS, Android, Salesforce, SharePoint,
                  VB6, Delphi, FoxPro, PROGRESS, C/C++, Oracle Apex,
                  PowerBuilder, RPG, COBOL, DBA, Robohelp, Test Complete,
                  Selenium, Coded UI
                </li>
              </ul>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default AboutUs;
