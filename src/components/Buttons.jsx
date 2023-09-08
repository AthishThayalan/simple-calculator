import "../App.css";
import * as math from "mathjs";
export const Buttons = ({updateDisplay,displayData,printResult,removeLastChar}) => {
  const buttons = [
    "7",
    "8",
    "9",
    "/",
    "4",
    "5",
    "6",
    "*",
    "1",
    "2",
    "3",
    "-",
    "0",
    "C",
    "+",
    "=",
  ];

  const handleButtonClick = (key)=>{
    if(key !== "=" && key!=="C"){
        updateDisplay(key) 
    }  else if (key === "=" && displayData.length!==0){
        try{
            const result = math.evaluate(displayData)
            printResult(result.toString())
        } catch(error){
            printResult("ERROR!!")
        }
        

    } else if(key==="C" && displayData.length!==0){
        removeLastChar()
    }
    
  }

 

  return (
    <>
      <div className = "calc-container">
        {buttons.map((button) => (
          <button key={button} onClick = {()=>handleButtonClick(button)}>{button}</button>
        ))}
      </div>
    </>
  );
};
