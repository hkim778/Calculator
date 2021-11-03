import React, { useContext } from "react";
import { calculatorContext } from "../../context/CalculatorContext";
import "./NumberBox.css";

function NumberBox(props) {
  const calculatorHooks = useContext(calculatorContext).calculatorHooks;
  return (
    <div
      className="Number-Box"
      onClick={() => {
        calculatorHooks.onClickNumber(props.number);
      }}
      style={
        props.number === 0
          ? {
              gridColumnStart: 1,
              gridColumnEnd: 3,
            }
          : undefined
      }
    >
      {props.number}
    </div>
  );
}

export default NumberBox;
