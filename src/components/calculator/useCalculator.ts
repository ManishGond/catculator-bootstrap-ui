import { calculateExpression } from "../../utils/calculateExpression";
import styles from "../../styles/Calculator.module.css";
import type { HandleButtonClickProps } from "../../utils/types";

export const handleButtonClick = ({ buttonValue, display, setDisplay }: HandleButtonClickProps) => {
  let input = display.trim();

  const isInvalidDisplay = ["INVD EXP", "INVALID", "EMPTY EXP", "Error"];

  const applyUnaryOperation = (operation: string) => {
    const value = input === "" || isInvalidDisplay.includes(input) ? "0" : input;

    switch (operation) {
      case "1/x":
        setDisplay(`1/(${value})`);
        break;
      case "x^2":
        setDisplay(`(${value})^2`);
        break;
      case "sqrt(x)":
        setDisplay(`sqrt(${value})`);
        break;
    }
  };

  if (isInvalidDisplay.includes(input)) input = "";

  switch (buttonValue) {
    case "CE":
      setDisplay("0");
      break;
    case "<":
      setDisplay((prev) => (prev.length > 1 ? prev.slice(0, -1) : "0"));
      break;
    case "=":
      const result = calculateExpression(display);
      setDisplay(result);
      break;
    case "1/x":
    case "x^2":
    case "sqrt(x)":
      applyUnaryOperation(buttonValue);
      break;
    case "linkedIn":
      window.open("https://www.linkedin.com/in/ManishGond", "_blank")
      break;
    case "github":
      window.open("https://github.com/ManishGond", "_blank");
      break;
    default:
      setDisplay((prev) =>
        prev === "0" || isInvalidDisplay.includes(prev)
          ? buttonValue
          : prev + buttonValue
      );
  }
};

export const getButtonClass = (label: string): string => {
  if (label === "=") return `${styles.calculatorButtons} ${styles.equalsButton}`;
  if (!isNaN(Number(label))) return `${styles.calculatorButtons} ${styles.numberButton}`;
  if(["linkedIn", "github"].includes(label)) return `${styles.calculatorButtons} ${styles.socialButton}`
  if (["CE", "<"].includes(label)) return `${styles.calculatorButtons} ${styles.controlButton}`;
  return `${styles.calculatorButtons} ${styles.operatorButton}`;
};
