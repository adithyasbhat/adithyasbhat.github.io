import React from "react";

function Certification(props) {
  return (
    <div className="col-md-6">
      <div className="card-body">
        <div className="h5 mb-1">
          <a href={props.verifyLink || null}>{props.title}</a>
        </div>
        <span className="text-muted h6"> {props.issuedBy} </span>
      </div>
    </div>
  );
}

export default Certification;
