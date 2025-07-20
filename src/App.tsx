// App.tsx

import { useState } from "react";
import styles from "./styles/App.module.css";
import CalculatorHeader from "./components/calculator/CalculatorHeader";
import CalculatorMain from "./components/calculator/CalculatorMain";
import { buttons } from "./utils/calculatorUtils";

function App() {
  const [display, setDisplay] = useState("0");

  return (
    <div className={styles.container}>
      <div className={styles.calculatorContainer}>
        <CalculatorHeader display={display} />
        <CalculatorMain buttons={buttons} setDisplay={setDisplay} display={display} />
      </div>
    </div>
  );
}

export default App;
