import React from "react";
import { InputStyle } from "./style";

interface InputComponentProps {
  placeholder: string;
  valueInput: string;
  onChange: (name: string) => any;
}

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  valueInput,
  onChange,
}) => {
  return (
    <InputStyle
      value={valueInput}
      onChange={(e) => onChange(e.target.value)}
      placeholder={placeholder}
    />
  );
};
export default InputComponent;
