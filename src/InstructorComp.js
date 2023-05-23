import React from "react";
function InstComp({img}) {
  return (
    <>

    

      <div className="aboutUs">
        <div className="instructor">
          <img className="inst-img" src={img} alt="Instructor Image" />
          <div>
            <h3>Nicole Brown</h3>
            <h6>Programming Teacher</h6>

            <p>
              I am the founder of A Cloud Guru and an Amazon Web Services
              community hero. I hold every associate certification and I am a
              certified AWS Solutions Architect Professional. I am ex-Rackspace,
              ex-Sungard & ex-Smart421. I have been working in the Cloud space
              since it's very inception. I am not just another I.T. trainer. I
              teach Cloud because I know it. Inside and out. I've worked as a
              systems administrator, developer, solutions architect & managing
              director/general manager for some of the biggest companies in
              cloud. My courses are not just some other IT training course,
              delivered by some IT trainer. My background is very hands on. I
              live eat and breath cloud.
            </p>
          </div>
          </div>
      </div>
    </>
  );
}
export default InstComp;
