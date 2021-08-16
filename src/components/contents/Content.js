import React from "react";
import About from "./About";
import Summary from "./Summary";
import LineTag from "./../common/LineTag";
import Skills from "./Skills";
import WorkExperience from "./WorkExperience";
import PageBreak from "../common/PageBreak";
import Education from "./Education";
import Contact from "./Contact";
import Certifications from "./Certifications";

function Content(props) {
  return (
    <div className="page-content">
      <div className="container">
        <div className="cover shadow-lg bg-white">
          <About />
          <Summary />
          <LineTag />
          <Skills />
          <LineTag />
          <WorkExperience />
          <LineTag />
          <PageBreak />
          <Education />
          <LineTag />
          <Certifications />
          <LineTag />
          <Contact />
        </div>
      </div>
    </div>
  );
}

export default Content;
