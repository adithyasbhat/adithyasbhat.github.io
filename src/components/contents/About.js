import React, { useContext } from "react";
import { ProfileInfo } from "../Profile";

function About(props) {
  const pinfo = useContext(ProfileInfo);
  return (
    <div>
      <div className="cover-bg p-3 p-lg-4 text-white">
        <div className="row">
          <div className="col-lg-4 col-md-5">
            <div className="avatar hover-effect bg-white shadow-sm">
              <img
                src={pinfo.display_picture}
                width="150"
                height="200"
                alt="User name"
              />
            </div>
          </div>
          <div className="col-lg-8 col-md-7 text-center text-md-start">
            <h2 className="h1 mt-2" data-aos="fade-left" data-aos-delay="0">
              {pinfo.name}
            </h2>
            <p data-aos="fade-left" data-aos-delay="100">
              {pinfo.designation}
            </p>
            <div
              className="d-print-none"
              data-aos="fade-left"
              data-aos-delay="200"
            >
              <a
                className="btn btn-light text-dark shadow-sm mt-1 me-1"
                href={pinfo.cv_link}
                target="_blank"
                rel="noopener noreferrer"
              >
                Download CV
              </a>
              <a className="btn btn-success shadow-sm mt-1" href="#contact">
                Hire Me
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
