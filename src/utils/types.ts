import type React from "react";

export type HandleButtonClickProps = {
  buttonValue: string;
  display: string;
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};

export type CalculatorHeaderProps = {
  display: string;
};

export type CalculatorMainProps = {
  display: string;
  buttons: string[];
  setDisplay: React.Dispatch<React.SetStateAction<string>>;
};
