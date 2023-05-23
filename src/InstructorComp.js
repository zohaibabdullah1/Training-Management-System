import React from "react";
function InstComp({img,desc}) {
  return (
    <>

    

      <div className="aboutUs">
        <div className="instructor">
          <img className="inst-img" src={img} alt="Instructor Image" />
          <div>
            <h3>Nicole Brown</h3>
            <h6>Programming Teacher</h6>

            <p>
              {desc}
            </p>
          </div>
          </div>
      </div>
    </>
  );
}
export default InstComp;
