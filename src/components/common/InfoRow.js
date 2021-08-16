import React from "react";

function InfoRow(props) {
  return (
    <>
      <div className="col-sm-4">
        <div className="pb-1">{props.title}</div>
      </div>
      <div className="col-sm-8">
        <div className="pb-1 text-secondary">{props.datavalue}</div>
      </div>
    </>
  );
}

export default InfoRow;
