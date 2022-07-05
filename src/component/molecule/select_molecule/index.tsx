import React from "react";
import SelectComponent from "../../atoms/select";
import TypographyComponent from "../../atoms/typography";
import { SelectMoleculeWrapp } from "./style";

interface SelectMoleculeProps {
  state: string[];
  label: string;
}
const SelectMolecule: React.FC<SelectMoleculeProps> = ({ state, label }) => {
  return (
    <SelectMoleculeWrapp>
      <TypographyComponent variant={"title"} children={label} />
      <SelectComponent list={state} />
    </SelectMoleculeWrapp>
  );
};

export default SelectMolecule;
