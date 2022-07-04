import React from "react";
import { InputStyle } from "./style";

interface InputComponentProps {
  placeholder: string;
  value: string;
  setValue: (name: string) => void;
}

const InputComponent: React.FC<InputComponentProps> = ({
  placeholder,
  value,
  setValue,
}) => {
  return (
    <InputStyle
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};
export default InputComponent;
