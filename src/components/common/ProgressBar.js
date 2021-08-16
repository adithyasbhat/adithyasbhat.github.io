import React from "react";

function ProgressBar(props) {
  return (
    <div className="mb-2">
      <span> {props.title} </span>
      <div className="progress my-1">
        <div
          className="progress-bar bg-primary"
          role="progressbar"
          data-aos="zoom-in-right"
          data-aos-delay="200"
          data-aos-anchor=".skills-section"
          style={{ width: props.percentage + "%" }}
          aria-valuenow={props.percentage}
          aria-valuemin="0"
          aria-valuemax="100"
        ></div>
      </div>
    </div>
  );
}

export default ProgressBar;
