import TypographyComponent from "../../atoms/typography";
import { SelectMenu } from "../../../list";
import { HeaderWrapper } from "./style";
import InputSearchMolecule from "../../molecule/input_molecule";
import SelectMolecule from "../../molecule/select_molecule";

interface HeaderComponentProps {
  value: string;
  fetchListProductByIntitle: (value: string) => void;
  setValue: (value: string) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  value,
  fetchListProductByIntitle,
  setValue,
}) => {
  return (
    <HeaderWrapper>
      <TypographyComponent children={"Search for Books"} variant={"h1"} />
      <InputSearchMolecule
        value={value}
        fetchListProductByIntitle={fetchListProductByIntitle}
        setValue={setValue}
      />
      <SelectMolecule state={SelectMenu} />
    </HeaderWrapper>
  );
};

export default HeaderComponent;
