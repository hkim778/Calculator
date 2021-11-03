import React from "react";
import Calculator from "../../components/calculator/Calculator";
import CalculatorContextProvider from "../../context/CalculatorContext";

function CalculatorPage() {
  return (
    <CalculatorContextProvider>
      <Calculator />
    </CalculatorContextProvider>
  );
}

export default CalculatorPage;
