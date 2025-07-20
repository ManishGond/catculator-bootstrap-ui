import { getButtonClass, handleButtonClick } from "./useCalculator";
import styles from '../../styles/CalculatorMain.module.css';
import type { CalculatorMainProps } from "../../utils/types";
import { FaBackspace, FaGithub, FaLinkedin } from "react-icons/fa";

const CalculatorMain = ({ buttons, display, setDisplay }: CalculatorMainProps) => (
  <div className={styles.calculatorButtonsContainer}>
    {buttons.map((label, idx) => (
      <button
        key={idx}
        className={getButtonClass(label)}
        onClick={() => handleButtonClick({ buttonValue: label, display, setDisplay })}
      >
        {
          label === "linkedIn" ? (
            <FaLinkedin size={25} />
          ) : label === "github" ? (
            <FaGithub size={25} />
          ) : label === "<" ? (
            <FaBackspace size={25} />
          ) : label
        }
      </button>
    ))}
  </div>
);

export default CalculatorMain;
