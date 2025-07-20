import type { CalculatorHeaderProps } from "../../utils/types";
import styles from '../../styles/CalculatorHeader.module.css';

const CalculatorHeader = ({ display }: CalculatorHeaderProps) => (
  <div>
    <div className={styles.headerRow}>
      <img src="/assets/paw-icon.png" alt="Paw Icon" className={styles.pawIcon} />
      <h2 className={styles.calculatorTitle}>Catculator</h2>
    </div>
    <div className={styles.calculatorInput}>{display}</div>
  </div>
);

export default CalculatorHeader;
