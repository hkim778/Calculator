import React, { useContext } from "react";
import { calculatorContext } from "../../context/CalculatorContext";
import "./NotationBox.css";

function NotationBox(props) {
  const calculatorHooks = useContext(calculatorContext).calculatorHooks;
  return (
    <div
      className="Notation-Box"
      style={{
        backgroundColor:
          calculatorHooks.currentNotation === props.index
            ? "#90B5F2"
            : props.color,
      }}
      onClick={() => {
        calculatorHooks.onClickNotations(props.notation, props.index);
      }}
    >
      {props.notation}
    </div>
  );
}

export default NotationBox;
