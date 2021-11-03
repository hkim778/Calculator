import { useState } from "react";

const useCalculator = () => {
  const [equation, setEquation] = useState("");
  const [number, setNumber] = useState("0");
  const [currentNotation, setCurrentNotation] = useState(-1);
  const [storedValue, setStoredValue] = useState(0);
  const [storedNotation, setStoredNotation] = useState("");

  function onClickNotations(notation, index) {
    switch (notation) {
      case "AC":
        setEquation("");
        setNumber(0);
        setCurrentNotation(-1);
        setStoredValue(0);
        setStoredNotation("");
        break;
      case "+/-":
        setNumber((parseFloat(number) * -1).toString());
        break;
      case "%":
        setNumber(number * 0.01);
        break;
      case "=":
        console.log(storedNotation);
        if (storedNotation !== "") {
          onClickCalculationNotation(storedNotation);
        } else {
        }
        break;
      default:
        setStoredNotation(notation);
        onClickCalculationNotation(notation);
        setCurrentNotation(index);
        break;
    }
  }

  function onClickCalculationNotation(notation) {
    // need some changes
    if (storedValue !== 0) {
      switch (notation) {
        case "/":
          setNumber((storedValue / parseFloat(number)).toString());
          setStoredValue(storedValue / parseFloat(number));
          break;
        case "x":
          setNumber((storedValue * parseFloat(number)).toString());
          setStoredValue(storedValue * parseFloat(number));
          break;
        case "-":
          setNumber((storedValue - parseFloat(number)).toString());
          setStoredValue(storedValue - parseFloat(number));
          break;
        case "+":
          setNumber((storedValue + parseFloat(number)).toString());
          setStoredValue(storedValue + parseFloat(number));
          break;
        default:
          break;
      }
    }
  }

  function onClickNumber(clickedValue) {
    if (currentNotation === -1) {
      console.log(number);
      //if notation is not clicked
      if (clickedValue === ".") {
        if (
          parseFloat(number) % 1 === 0 &&
          number.toString().indexOf(".") === -1
        ) {
          setNumber(number + ".");
        }
      } else {
        // if numbers are clicked
        console.log(parseFloat(number));
        if (parseFloat(number) !== 0) {
          setNumber(number + clickedValue);
        } else {
          if (parseFloat(number) % 1 !== 0) {
            //when there's a decimal
            setNumber(number + clickedValue);
          } else {
            setNumber(clickedValue.toString());
          }
        }
      }
    } else {
      setStoredValue(parseFloat(number));
      if (clickedValue === ".") {
        setNumber("0.");
      } else {
        setNumber(clickedValue.toString());
      }
      //need to store the current number

      setCurrentNotation(-1);
    }
  }

  return {
    equation,
    setEquation,
    currentNotation,
    number,
    setCurrentNotation,
    onClickNotations,
    onClickNumber,
  };
};

export default useCalculator;
