import React, { useContext } from "react";
import ProgressBar from "../common/ProgressBar";
import { ProfileInfo } from "../Profile";

function SkillRow(props) {
  return <div className="col-md-6">{props.children}</div>;
}

function Skills() {
  const pinfo = useContext(ProfileInfo);
  const skillsList = pinfo.professionalSkills.map((item, index) => (
    <SkillRow key={index}>
      <ProgressBar title={item.skillName} percentage={item.rating} />
    </SkillRow>
  ));

  return (
    <div className="skills-section px-3 px-lg-4">
      <h2 className="h3 mb-3">Professional Skills</h2>
      <div className="row">{skillsList}</div>
    </div>
  );
}

export default Skills;
