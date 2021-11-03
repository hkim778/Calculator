import React from "react";
import "./App.css";
import "./components/calculator/Calculator";
import Calculator from "./components/calculator/Calculator";
import CalculatorContextProvider from "./context/CalculatorContext";

function App() {
  return (
    <div className="App">
      <p>Calculator</p>
      <CalculatorContextProvider>
        <Calculator />
      </CalculatorContextProvider>
    </div>
  );
}

export default App;
