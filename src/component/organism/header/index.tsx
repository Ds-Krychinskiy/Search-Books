import TypographyComponent from "../../atoms/typography";
import { HeaderWrapper, SelectWrapp } from "./style";
import InputSearchMolecule from "../../molecule/input_molecule";
import SelectMolecule from "../../molecule/select_molecule";

interface HeaderComponentProps {
  valueInput: string;
  onChange: (value: string) => void;
  fetchListProductByIntitle: () => void;
  fetchSubject: (value: string) => void;
  fetchOrderBy: (value: string) => void;
}

const HeaderComponent: React.FC<HeaderComponentProps> = ({
  valueInput,
  onChange,
  fetchOrderBy,fetchSubject,
  fetchListProductByIntitle,
}) => {
  const category: string[] = [
    "all",
    "art",
    "biography",
    "computers",
    "history",
    "medical",
    "poetry",
  ];
  const sort: string[] = ["relevance", "newest"];

  return (
    <HeaderWrapper>
      <TypographyComponent children={"Search for Books"} variant={"h1"} />
      <InputSearchMolecule
        valueInput={valueInput}
        onChange={onChange}
        fetchListProductByIntitle={fetchListProductByIntitle}
      />
      <SelectWrapp>
        <SelectMolecule label={"Category"} state={category} onChange={fetchSubject}/>
        <SelectMolecule label={"Sorting by"} state={sort} onChange={fetchOrderBy}/>
      </SelectWrapp>
    </HeaderWrapper>
  );
};

export default HeaderComponent;
