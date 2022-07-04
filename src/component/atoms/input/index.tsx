import React from "react";

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
    <input
      value={value}
      onChange={(e) => setValue(e.target.value)}
      placeholder={placeholder}
    />
  );
};
export default InputComponent;
