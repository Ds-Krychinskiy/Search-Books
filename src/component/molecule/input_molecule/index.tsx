import { BaseSyntheticEvent } from "react";
import ButtonComponent from "../../atoms/button";
import InputComponent from "../../atoms/input";
import { InputMoleculeSearchWrapp } from "./style";

interface InputSearchMoleculeProps {
  valueInput: string;
  fetchListProductByIntitle: () => void;
  onChange: (value: string) => void;
}
const InputSearchMolecule: React.FC<InputSearchMoleculeProps> = ({
  fetchListProductByIntitle,
  onChange,
  valueInput,
}) => {
  const onFormSubmit = (e: BaseSyntheticEvent) => {
    e.preventDefault();
    fetchListProductByIntitle();
  };
  return (
    <InputMoleculeSearchWrapp onSubmit={onFormSubmit}>
      <InputComponent
        valueInput={valueInput}
        onChange={onChange}
        placeholder={"Введите название книги..."}
      />
      <ButtonComponent
        variant={"search"}
        type={"submit"}
        children={"Search..."}
      />
    </InputMoleculeSearchWrapp>
  );
};

export default InputSearchMolecule;
