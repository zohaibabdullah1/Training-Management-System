import React from "react";
import NavComp from './NavBrandComp';
import NavBarComponent from "./NavBar";
import Footer from "./Footer";

function ContactUs() {
  return (
    <>
    <div className="contact_bg">
      <NavComp />

      <div className='aboutus_bg'>
        <div className='main-container'>
          <NavBarComponent />
        </div>
        <h1 className='contats_h '> Contact Us</h1>
      </div>
      <div className="contact_flex">
        <div className="col-sm-6 contact_left">
          <div className="inner_left">
          <h3 className="contact_heading coler">Inquiries & Free Quotations</h3>
          <p>Thank you for your interest in Icourse, the leading online course company revolutionizing the way we learn. We are dedicated to providing exceptional educational experiences and are here to assist you in any way we can. Please feel free to reach out to us using the contact information below:</p>
          <hr />
          <br />
          <h6 className="coler">Customer Support:</h6>
          <p> Email:<u><b> support@icourse.com</b></u></p>
          <p>Phone: +1-XXX-XXX-XXXX (available Monday to Friday, 9 am to 5 pm EST)</p>

          <h6 className="coler">Technical Support:</h6>
          <p> Email:<u><b> techsupport@icourse.com</b></u></p>
          <p>Phone: +1-XXX-XXX-XXXX (available Monday to Friday, 9 am to 5 pm EST)</p>

          <h6 className="coler">Partnership Inquiries:</h6>
          <p> Email:<u><b> partnerships@icourse.com</b></u></p>


          <h6 className="coler">Media Inquiries:</h6>
          <p> Email:<u><b> media@icourse.com</b></u></p>

          <h6 className="coler"> General Inquiries:</h6>
          <p> Email:<u><b> info@icourse.com</b></u></p>


          </div>
        </div>
        <div className="col-sm-6 contact_right">
          <div className="inner_right">
          <form>
            <label className="coler" for="full-name">Full Name:</label>
            <br/>
            <input className="textfield_align" type="text" id="full-name" name="full-name" required /><br /><br />

            <label className="coler" for="email">Email:</label>
            <br/>
            <input className="textfield_align" type="email" id="email" name="email" required /><br /><br />

            <label className="coler" for="phone">Phone Number:</label>
            <br/>
            <input className="textfield_align" type="tel" id="phone" name="phone" required /><br /><br />

            <label  className="coler" for="message">Message:</label><br/>
              <textarea className="textfield_align" id="message" name="message" rows="3" required /><br/><br/>

            <input className="submit_btn" type="submit" value="Submit" />
          </form>
          </div>
        </div>


      </div>


      <div>
        <Footer />
      </div>
      </div>
    </>
  );
}
export default ContactUs;
