import { Link } from "react-router-dom";
import { footerContact, footerItem, socialIcons } from "../data/Data";
import Newsletter from "../home/Newsletter";
import logo from "../../images/logo (2).png"

export default function Footer() {
  return (
    <>
      <Newsletter />
      <div
        className="container-fluid bg-dark text-light footer wow fadeIn"
        data-wow-delay="0.1s"
      >
        <div className="container pb-5">
          <div className="row g-5">
            <div className="col-md-6 col-lg-4">
              <div className=" rounded p-4">
                <Link to="/">
                <img
                src={logo} // Replace with the actual path to your logo image
                alt="Hotelier Logo"
                className="logo-image"
                style={{width:'150px'}}
              />
                </Link>
                <p className="text-white mb-0 pt-2">
                 {/*  */}
                </p>
              </div>
            </div>
            <div className="col-md-6 col-lg-3">
              <h6 className="section-title text-start text-primary text-uppercase mb-4">
                Contact
              </h6>
              {footerContact.map((val, index) => (
                <p className="mb-2" key={index}>
                  {val.icon} {val.name}
                </p>
              ))}
              <div className="d-flex pt-2">
                {socialIcons.slice(0, 4).map((val, index) => (
                  <button type="button" className="btn btn-outline-light btn-social" aria-label="Social link">
                    {val.icon}
                  </button>
                ))}
              </div>
            </div>
            <div className="col-lg-5 col-md-12">
              <div className="row gy-5 g-4">
                {footerItem.map((section, sectionIndex) => (
                  <div className="col-md-6" key={sectionIndex}>
                    <h6 className="section-title text-start text-primary text-uppercase mb-4">
                      {section.header}
                    </h6>
                    {section.UnitItem.map((item, itemIndex) => (
                      <button type="button" className="btn btn-link" key={itemIndex} style={{background: 'none', border: 'none', padding: 0, color: 'inherit', textAlign: 'left'}}>
                        {item.name}
                      </button>
                    ))}
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="container-fluid" style={{height:'30px',backgroundColor:'#0f172b'}}>
      <div className="footer_bottom">
            <div className="container">
              <div className="align-items-center  copyright1">
                <div className="col-md-12 ">
                  <p className="mb-0 f_400 align-items-center text-center">©  2025 All rights reserved <Link style={{textDecoration:'none'}} to="/"> DapsHome</Link></p>
                </div>
              </div>
            </div>
          </div>
      </div>
    </>
  );
}
