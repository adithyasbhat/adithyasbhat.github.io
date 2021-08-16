import React, { useContext } from "react";
import TimelineCards from "../common/TimelineCards";
import { ProfileInfo } from "../Profile";

function WorkExperience() {
  const pinfo = useContext(ProfileInfo);
  const workExperiences = pinfo.workExperience.map((item, index) => (
    <TimelineCards {...item} key={index} />
  ));
  return (
    <div className="work-experience-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Work Experience</h2>
      <div className="timeline">{workExperiences}</div>
    </div>
  );
}

export default WorkExperience;
