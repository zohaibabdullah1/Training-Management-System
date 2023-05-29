// import php from './Images/php.jpg';
import { Link } from "react-router-dom";
function CourseComp({ img, heading, Iname, pageSrc }) {
  return (
    <>
      <div className="col-sm-2 lms_card">
        <Link className="card-link" to={pageSrc}>
          <div>
            <img alt="" src={img} width="100%" />
            <div className="container">
              <h5>
                <b>{heading}</b>
              </h5>
              <h6>{Iname}</h6>
            </div>
          </div>
        </Link>
      </div>
    </>
  );
}
export default CourseComp;
