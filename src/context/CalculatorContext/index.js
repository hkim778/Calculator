import React, { createContext } from "react";
import useCalculator from "./hooks/useCalculator";

export const calculatorContext = createContext();

const CalculatorContextProvider = ({ children }) => {
  const calculatorHooks = useCalculator();
  return (
    <calculatorContext.Provider value={{ calculatorHooks }}>
      {children}
    </calculatorContext.Provider>
  );
};

export default CalculatorContextProvider;
