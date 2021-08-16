import React, { useContext } from "react";
import Certification from "../common/Certification";
import { ProfileInfo } from "../Profile";

function Certifications(props) {
  const pinfo = useContext(ProfileInfo);
  const certificationsList = pinfo.licencesAndCerts.map((item, index) => (
    <Certification {...item} key={index} />
  ));

  return (
    <div className="education-section px-3 px-lg-4 pb-4">
      <h2 className="h3 mb-4">{"Licenses & Certifications"}</h2>
      <div className="card shadow-sm">
        <div className="row">{certificationsList}</div>
      </div>
    </div>
  );
}

export default Certifications;
