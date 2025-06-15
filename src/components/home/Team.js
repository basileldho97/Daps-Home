import React from "react";
import { socialIcons, team } from "../data/Data";
import CommonHeading from "../common/CommonHeading";
import team1 from "../../images/team-1.jpg"
import team2 from "../../images/team-2.jpg"
import team3 from "../../images/team-3.jpg"
import team4 from "../../images/team-4.jpg"


const phone = '+96566188947'; // Replace with your number
const message = 'Hello, I am interested in booking a stay at your Apartment.';
const whatsappLink = `https://wa.me/${phone}?text=${encodeURIComponent(message, message)}`;

const phone2 = '+96565080579'; // Replace with your number
const message2 = 'Hello, I am interested in booking a stay at your Apartment.';
const whatsappLink2 = `https://wa.me/${phone}?text=${encodeURIComponent(message, message)}`;



export default function Teams() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <CommonHeading
            heading="Our Team"
            subtitle="Explore Our"
            title="Team Members"
          />

          <div className="row g-2 justify-content-center w-full">
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={0}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={team1} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <button type="button" className="btn btn-square btn-primary mx-1" aria-label="Social link">
                      {socialIcons[0].icon}
                    </button>
                    <button type="button" className="btn btn-square btn-primary mx-1" aria-label="Social link">
                      {socialIcons[1].icon}
                    </button>
                    <button type="button" className="btn btn-square btn-primary mx-1" aria-label="Social link">
                      {socialIcons[2].icon}
                    </button>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{team[0].name}</h5>
                  <small>{team[0].designation}</small>
                  <a className="w-100"
                    href={whatsappLink} target="_blank" rel="noopener noreferrer">
                    +96566188947
                  </a>
                </div>
              </div>
            </div>
            <div
              className="col-lg-3 col-md-6 wow fadeInUp"
              data-wow-delay="0.1s"
              key={1}
            >
              <div className="rounded shadow overflow-hidden">
                <div className="position-relative">
                  <img className="img-fluid" src={team2} alt="img" />
                  <div className="position-absolute start-50 top-100 translate-middle d-flex align-items-center">
                    <button type="button" className="btn btn-square btn-primary mx-1" aria-label="Social link">
                      {socialIcons[0].icon}
                    </button>
                    <button type="button" className="btn btn-square btn-primary mx-1" aria-label="Social link">
                      {socialIcons[1].icon}
                    </button>
                    <button type="button" className="btn btn-square btn-primary mx-1" aria-label="Social link">
                      {socialIcons[2].icon}
                    </button>
                  </div>
                </div>
                <div className="text-center p-4 mt-3">
                  <h5 className="fw-bold mb-0">{team[1].name}</h5>
                  <small>{team[1].designation}</small>
                  <a className=" w-100"
                    href={whatsappLink2} target="_blank" rel="noopener noreferrer">
                    +96565080579
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
