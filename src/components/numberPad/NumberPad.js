import React from "react";
import NumberBox from "../numberBox/NumberBox";
import NotationBox from "../notationBox/NotationBox";
import "./NumberPad.css";

function NumberPad() {
  var numArr = [9, 8, 7, 6, 5, 4, 3, 2, 1, 0];

  return (
    <div className="grid">
      {numArr.map((number, index) => (
        <NumberBox number={number} key={index} />
      ))}
      <NumberBox number={"."} />
      <NotationBox notation={"="} color={"#7B91FA"} />
    </div>
  );
}

export default NumberPad;
