
import styles from "./App.module.css";
import Display from "./components/Display";
import ButtonContainer from "./components/ButtonContainer";
import { useState } from "react";

function App() {
  const [calVal, setCalval]= useState("");
const onButtonClick=(buttonText)=>
{
    if (buttonText=== 'C'){
      setCalval("");
    }
    else if (buttonText === '='){
      const result = eval(calVal);
      setCalval(result);

    }else {
    const newDisplayValue= calVal+ buttonText;
    setCalval(newDisplayValue);
  }};

  return (
  <div className={styles.calculator}>
 <Display displayValue={calVal}></Display>
 <ButtonContainer onButtonClick={onButtonClick}></ButtonContainer>
  
    </div>
  );
}

export default App;
