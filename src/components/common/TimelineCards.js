import React from "react";

function CardDetails(props) {
  const detailsList = props.details.map((item, index) => (
    <li key={index}>{item}</li>
  ));
  return <ul>{detailsList}</ul>;
}

function TimelineCards(props) {
  return (
    <div className="timeline-card timeline-card-primary card shadow-sm">
      <div className="card-body">
        <div className="h5 mb-1">
          {props.title}
          <span className="text-muted h6"> {props.subtitle} </span>
        </div>
        <div
          className={
            props.details
              ? "text-muted text-small mb-2"
              : "text-muted text-small"
          }
        >
          {props.timeperiod}
        </div>
        {props.details && (
          <div>
            <CardDetails details={props.details} />
          </div>
        )}
      </div>
    </div>
  );
}

export default TimelineCards;
