import React from "react";
import "./NotationBox.css";

function NotationBox(props) {
  return (
    <div className="Notation-Box" style={{ backgroundColor: props.color }}>
      {props.notation}
    </div>
  );
}

export default NotationBox;
