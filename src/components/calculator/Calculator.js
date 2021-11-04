import React, { useContext } from "react";
import NumberPad from "../numberPad/NumberPad";
import NotationBox from "../notationBox/NotationBox";
import "./Calculator.css";
import { calculatorContext } from "../../context/CalculatorContext";

function Calculator() {
  var notations = ["/", "*", "-", "+", "="];
  var topNotations = ["AC", "+/-", "%"];

  const calculatorHooks = useContext(calculatorContext).calculatorHooks;

  return (
    <div className="calculator-display">
      <div className="input-display">
        <span className="equation">{calculatorHooks.displayEquation()}</span>
        <span className="current-num">{calculatorHooks.number}</span>
      </div>
      <div className="horizontal-flex">
        <div className="numbers-display">
          <div className="top-notation-display">
            {topNotations.map((notation, index) => (
              <NotationBox
                key={index}
                color={"#C8CAD3"}
                notation={notation}
              ></NotationBox>
            ))}
          </div>
          <NumberPad />
        </div>
        <div className="notations-display">
          {notations.map((notation, index) => (
            <NotationBox
              key={index}
              color={"#EFB51A"}
              notation={notation}
              index={index}
            />
          ))}
        </div>
      </div>
    </div>
  );
}

export default Calculator;
