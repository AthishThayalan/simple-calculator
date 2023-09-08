import "./App.css";
import { Buttons } from "./components/Buttons.jsx";
import { Screen } from "./components/Screen.jsx";
import { useState } from "react";

function App() {
  const [displayData, setDisplayData] = useState("");

  const updateDisplay = (key) => {
    setDisplayData(displayData + key);
  };

  const printResult = (result) => {
    setDisplayData(result);
    if (result === "ERROR!!") {
      setTimeout(() => {
        setDisplayData("");
      }, 1500);
    }
  };
  const removeLastChar = () => {
    setDisplayData((currentDisplayData) => {
      return currentDisplayData.slice(0, -1);
    });
  };

  return (
    <>
      <h1>Calculator</h1>
      <Screen displayData={displayData} />
      <Buttons
        updateDisplay={updateDisplay}
        displayData={displayData}
        printResult={printResult}
        removeLastChar={removeLastChar}
      />
    </>
  );
}

export default App;
