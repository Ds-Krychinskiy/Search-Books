import React from "react";
import SelectComponent from "../../atoms/select";
import TypographyComponent from "../../atoms/typography";
import { SelectMoleculeWrapp } from "./style";

interface SelectMoleculeProps {
  state: string[];
  label: string;
  onChange: (value: string) => void;
}
const SelectMolecule: React.FC<SelectMoleculeProps> = ({ state, label, onChange }) => {
  return (
    <>
      <TypographyComponent variant={"title"} children={label} />
      <SelectComponent list={state}  onChange={onChange}/>
    </>
  );
};

export default SelectMolecule;
