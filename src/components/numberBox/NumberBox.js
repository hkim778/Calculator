import React from "react";
import "./NumberBox.css";

function NumberBox(props) {
  return <div className="Number-Box">{props.number}</div>;
}

export default NumberBox;
