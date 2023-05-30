import React from "react";
function InstComp({item,desc}) {
  return (
    <>

    

      <div className="aboutUs">
        <div className="instructor">
          <img className="inst-img" src={item.image} alt={item.name} />
          <div>
            <h3>{item.name}</h3>
            <h6>{item.course}</h6>

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
