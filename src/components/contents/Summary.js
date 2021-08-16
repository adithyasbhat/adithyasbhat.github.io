import React, { useContext } from "react";
import { ProfileInfo } from "../Profile";
import InfoRow from "../common/InfoRow";

function Summary() {
  const pinfo = useContext(ProfileInfo);

  return (
    <div className="about-section pt-4 px-3 px-lg-4 mt-1">
      <div className="row">
        <div className="col-md-6">
          <h2 className="h3 mb-3">About Me</h2>
          <p style={{ textAlign: "justify" }}>{pinfo.about_me}</p>
        </div>
        <div className="col-md-5 offset-md-1">
          <div className="row mt-4">
            <InfoRow title="Age" datavalue={pinfo.age} />
            <InfoRow title="Experience" datavalue={pinfo.totalExperience} />
            <InfoRow title="Email" datavalue={pinfo.emailId} />
            <InfoRow title="Address" datavalue={pinfo.address} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default Summary;
