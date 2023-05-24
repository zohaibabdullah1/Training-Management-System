// import php from './Images/php.jpg';

function CourseComp ({img,heading,Iname}){
    return (
    
    <>
    <div className="col-sm-2 lms_card">
                <img alt="" src={img} width="100%"/>
                <div class="container"> 
                <h5><b>{heading}</b></h5>
                <h6>{Iname}</h6>
                  </div>
              </div>
    </>    );
}
export default CourseComp;
