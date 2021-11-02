import React, { useState } from "react";
import NumberPad from "../numberPad/NumberPad";
import NotationBox from "../notationBox/NotationBox";
import "./Calculator.css";

function Calculator() {
  var notations = ["/", "x", "-", "+"];
  var topNotations = ["(", ")", "%", "AC"];

  const [equation, setEquation] = useState("");

  return (
    <div className="calculator-display">
      <div className="input-display">{equation}</div>
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
        <div className="number-pad-display">
          <NumberPad />
          <div className="notations-display">
            {notations.map((notation, index) => (
              <NotationBox
                key={index}
                color={"#C8CAD3"}
                notation={notation}
              ></NotationBox>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
