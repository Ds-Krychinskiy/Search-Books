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
  return (
    <InputMoleculeSearchWrapp>
      <InputComponent
        valueInput={valueInput}
        onChange={onChange}
        placeholder={"Введите название книги..."}
      />
      <ButtonComponent
        variant={"search"}
        children={"Search..."}
        onClick={() => fetchListProductByIntitle()}
      />
    </InputMoleculeSearchWrapp>
  );
};

export default InputSearchMolecule;
