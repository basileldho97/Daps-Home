import React from "react";
import CommonHeading from "../common/CommonHeading";
import { services } from "../data/Data";
import { Fade } from "react-awesome-reveal"; // Import the Fade component

export default function Services() {
  return (
    <>
      <div className="container-xxl py-5">
        <div className="container">
          <div className="text-center wow fadeInUp" data-wow-delay="0.1s">
            <CommonHeading
              heading="Our Services"
              title="Services"
              subtitle="Explore Our"
            />
          </div>
          <div className="row g-4">
            {services.map((item, index) => (
              <div className="col-lg-4 col-md-6" key={index}>
                <Fade  direction="up" delay={index * 100}>
                  <button type="button" className="service-item rounded" style={{background: 'none', border: 'none', padding: 0, width: '100%'}}>
                    <div className="service-icon bg-transparent border rounded p-1">
                      <div className="w-100 h-100 border rounded d-flex align-items-center justify-content-center">
                        {item.icon}
                      </div>
                    </div>
                    <h5 className="mb-3">{item.name}</h5>
                    <p className="text-body mb-0">{item.discription}</p>
                  </button>
                </Fade>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
