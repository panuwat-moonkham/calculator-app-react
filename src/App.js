import React, { useState } from "react";
import Button from "./components/Button";

function App() {
  const [firstNumber, setfirstNumber] = useState("");
  const [secondNumber, setsecondNumber] = useState("");
  const [operators, setOperators] = useState("");
  const [result, setResult] = useState(0);

  const handleNumber = (number) => {
    return !operators
      ? setfirstNumber(firstNumber + number)
      : setsecondNumber(secondNumber + number);
  };
  const handleOperators = (operator) => {
    setOperators(operator);
  };

  const resetCalculator = () => {
    setfirstNumber("");
    setsecondNumber("");
    setOperators("");
  };

  const handleEqual = () => {
    const parseFirstNumber = parseInt(firstNumber, 15);
    const parseSecondNumber = parseInt(secondNumber, 15);

    switch (operators) {
      case "+":
        setResult(parseFirstNumber + parseSecondNumber);
        break;
      case "-":
        setResult(parseFirstNumber - parseSecondNumber);
        break;
      case "*":
        setResult(parseFirstNumber * parseSecondNumber);
        break;
      default:
        setResult(parseFirstNumber / parseSecondNumber);
        break;
    }
    resetCalculator();
  };

  const showNum = !secondNumber ? firstNumber || result : secondNumber;

  return (
    <>
      <h1>{showNum}</h1>
      <div>
        <Button>_</Button>
        <Button>_</Button>
        <Button>_</Button>
        <Button onClick={() => handleOperators("/")}>/</Button>
      </div>
      <div>
        <Button onClick={() => handleNumber("1")}>1</Button>
        <Button onClick={() => handleNumber("2")}>2</Button>
        <Button onClick={() => handleNumber("3")}>3</Button>
        <Button onClick={() => handleOperators("*")}>*</Button>
      </div>
      <div>
        <Button onClick={() => handleNumber("4")}>4</Button>
        <Button onClick={() => handleNumber("5")}>5</Button>
        <Button onClick={() => handleNumber("6")}>6</Button>
        <Button onClick={() => handleOperators("-")}>-</Button>
      </div>
      <div>
        <Button onClick={() => handleNumber("7")}>7</Button>
        <Button onClick={() => handleNumber("8")}>8</Button>
        <Button onClick={() => handleNumber("9")}>9</Button>
        <Button onClick={() => handleOperators("+")}>+</Button>
      </div>
      <div>
        <Button>_</Button>
        <Button onClick={() => handleNumber("0")}>0</Button>
        <Button>_</Button>
        <Button onClick={handleEqual}>=</Button>
      </div>
    </>
  );
}

export default App;
