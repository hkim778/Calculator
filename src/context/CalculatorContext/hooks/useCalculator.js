import { useState } from "react";

const useCalculator = () => {
  // not the apple way, but the equation way
  const [equation, setEquation] = useState("");
  const [number, setNumber] = useState("0");
  const [notation, setNotation] = useState("");
  const [isAddingNotation, setIsAddingNotation] = useState(false);

  var notations = ["/", "x", "-", "+", "="];
  var topNotations = ["AC", "+/-", "%"];

  function onClickNotations(notation, index) {
    switch (notation) {
      case "AC":
        break;
      case "+/-":
        break;
      case "%":
        break;
      case "=":
        break;
      default:
        onClickCalculationNotation(notation);

        break;
    }
  }

  function calculate() {}

  function onClickCalculationNotation(notation) {
    if (!isAddingNotation) {
      setEquation(equation + number.toString());
    }

    setIsAddingNotation(true);
    setNumber(notation);
  }

  function onClickNumber(clickedValue) {
    if (isAddingNotation) {
      setEquation(equation + " " + number + " ");
      setIsAddingNotation(false);
      if (clickedValue === ".") {
        setNumber("0.");
      } else {
        setNumber(clickedValue);
      }
    } else {
      if (clickedValue === ".") {
        if (number.toString().indexOf(".") === -1) {
          setNumber(number.toString() + clickedValue);
        }
      } else {
        if (parseFloat(number) === 0) {
          setNumber(clickedValue);
        } else {
          setNumber(number.toString() + clickedValue);
        }
      }
    }
  }

  function displayEquation() {
    return equation.toString() + " " + number.toString();
  }

  return {
    number,
    equation,
    onClickNumber,
    onClickNotations,
    displayEquation,
  };
};

export default useCalculator;
