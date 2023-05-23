import gmaps from './Images/gmaps.jpg';
// import logo from './Icoures.png';
function Footer(){

    return(

        <>
        <div>

        <div className='fotter_bg'>
        <div className='col-sm-4 fotter_main'>
          <div className='footer-con' >
            <p className='p_margin'><b className='coler'>Adress:</b> 12th Floor, Askari Corporate Tower</p>
            <p><b className='coler'>Email:</b> support@icoures.com</p>
            <p><b className='coler'>Phone:</b> 507-452-1254</p>
            <div><i className="fa fa-brands fa-twitter i_design nav_color"></i>
                  <i className="fa fa-brands fa-facebook i_design nav_color"></i>
                  <i className="fa fa-brands fa-linkedin i_design nav_color"></i></div>
          </div>
          <div className='col-sm-4 footer_spacing ft_allign'> <h3> <b className='coler '>Popular</b> Courses</h3>

            <p className='p_hover p_margin'>UI/UX Design</p>
            <p className='p_hover'>WordPress Development</p>
            <p className='p_hover'>Business Strategy</p>
            <p className='p_hover'>Software Development</p>
            <p className='p_hover'>Business English</p>
          </div>
          <div className='col-sm-4 footer_spacing'>
            <h3><b className='coler'>Find</b> Us <b className='coler'>Here</b></h3>
            <img
              alt=""
              src={gmaps}
              width="350px"
              height="150px"
              className="d-inline-block align-top p_margin"
            />

          </div>
        </div>

      </div>
      <div className='footer_last'>Copyright © 2023 icourse by MrLab. All Rights Reserved.</div>
        </div>
        
        </>
    );
}

export default Footer;