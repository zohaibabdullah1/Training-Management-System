/* eslint-disable react-hooks/exhaustive-deps */
import React, {useEffect,useState} from "react";
import NavComp from "./NavBrandComp";
import axios from "axios";
import NavBarComponent from "./NavBar";
import Footer from "./Footer";
import InstComp from "./InstructorComp";

function Instructor() {
  const token = localStorage.getItem("token");
  const [instructors, setInstructors] = useState([]);
    const getInstructors=()=>{
        axios
            .get("http://localhost:4000/instructor", {
                headers: {
                    token: token
                }
            })
            .then((res) => {
                setInstructors(res.data);
            })
            .catch((err) => {
                console.log(err);
            });
    }
    useEffect(() => {
        getInstructors();
    }, [instructors]);

    const desc = `I am the founder of A Cloud Guru and an Amazon Web Services
    community hero. I hold every associate certification and I am a
    certified AWS Solutions Architect Professional. I am ex-Rackspace,
    ex-Sungard & ex-Smart421. I have been working in the Cloud space
    since it's very inception. I am not just another I.T. trainer. I
    teach Cloud because I know it. Inside and out. I've worked as a
    systems administrator, developer, solutions architect & managing
    director/general manager for some of the biggest companies in
    cloud. My courses are not just some other IT training course,
    delivered by some IT trainer. My background is very hands on. I
    live eat and breath cloud.`
  return (
    <>
      {<NavComp />}
      <div className="aboutus_bg">
        <div className="main-container">
          <NavBarComponent />
        </div>
        <h1 className="contats_h "> Instructors</h1>
      </div>
          {instructors.map((item, key) => (
            <>
              <div className="aboutUs" key={key}>
                <InstComp item={item} desc={desc}/>
              </div>
                <hr className="hr" />
            </>
                        // <tr key={key}>
                        //     <td>{key + 1}</td>
                        //     <td>{item.name}</td>
                        //     <td>{item.qualification}</td>
                        //     <td>{item.course}</td>
                        //     <td>
                        //       <Button className="update_btn" onClick={() => SelectInstructor(item._id)}>Update</Button>{" "}
                        //       <Button className='delete_btn' onClick={() => handleDelete(item._id)}>Delete</Button>
                        //     </td>
                        // </tr>
        ))}
            <div>
        <Footer />
      </div>
    </>
  );
}
export default Instructor;
