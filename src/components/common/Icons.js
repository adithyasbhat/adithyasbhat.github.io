import React from "react";

function Icons(props) {
  return (
    <li className="nav-item">
      <a className="nav-link" href={props.pagelink} title={props.title}>
        <i className={props.iclass}></i>
        <span className="menu-title sr-only"> {props.title} </span>
      </a>
    </li>
  );
}

export default Icons;
