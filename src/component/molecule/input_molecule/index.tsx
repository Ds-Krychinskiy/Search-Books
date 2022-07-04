import ButtonComponent from "../../atoms/button";
import InputComponent from "../../atoms/input";
import { InputMoleculeSearchWrapp } from "./style";

interface InputSearchMoleculeProps {
  value: string;
  fetchListProductByIntitle: (value: string) => void;
  setValue: (value: string) => void;
}
const InputSearchMolecule: React.FC<InputSearchMoleculeProps> = ({
  fetchListProductByIntitle,
  setValue,
  value,
}) => {
  return (
    <InputMoleculeSearchWrapp>
      <InputComponent
        value={value}
        setValue={setValue}
        placeholder={"Введите название книги..."}
      />
      <ButtonComponent
        children={"Search..."}
        onClick={() => fetchListProductByIntitle(value)}
      />
    </InputMoleculeSearchWrapp>
  );
};

export default InputSearchMolecule;
