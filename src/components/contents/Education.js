import React, { useContext } from "react";
import TimelineCards from "../common/TimelineCards";
import { ProfileInfo } from "../Profile";

function Education() {
  const pinfo = useContext(ProfileInfo);
  const educationList = pinfo.educationList.map((item, index) => (
    <TimelineCards {...item} key={index} />
  ));
  return (
    <div className="education-section px-3 px-lg-4">
      <h2 className="h3 mb-4">Education</h2>
      <div className="timeline">{educationList}</div>
    </div>
  );
}

export default Education;
