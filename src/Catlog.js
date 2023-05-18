import NavComp from "./NavBrandComp";
import Cards from "./Card";
import logo from "./Icoures.png"
import img1 from "./img1.jpg"
import img2 from "./img2.jpg"
import img3 from "./img3.jpg"
import img4 from "./img4.jpg"
import img5 from "./img5.jpg"
import img6 from "./img6.jpg"


function Catlogs() {

  return (
    <>
      {<NavComp />}

      <div className="Catlogs">
        <h6>LEARN WITHOUT LIMITS</h6>
        <h2>Explore Our Online Courses</h2>
        <p className="Catlog-Para">We’ll then ask you to tell us your current level of English or invite you to take our quick 20 minute placement test so we can make sure you start learning English.</p>
        <div className="col1">
          {<Cards img={img1} />}
          {<Cards img={img2} />}
          {<Cards img={img3} />}
        </div>
        <div className="col1">
          {<Cards img={img4}/>}
          {<Cards img={img5}/>}
          {<Cards img={img6}/>}
        </div>
      </div>
    </>
  );
}

export default Catlogs;
<iframe class="full-screen-preview__frame" src="http://iguru.wgl-demo.net/" name="preview-frame" frameborder="0" noresize="noresize" data-view="fullScreenPreview" allow="geolocation 'self'; autoplay 'self'" style="height: 481px;">
</iframe>