import React from "react";
import { SelectMenuProps } from "../../../list";
import SelectComponent from "../../atoms/select";
import { SelectMoleculeWrapp } from "./style";

interface SelectMoleculeProps {
  state: SelectMenuProps[];
}
const SelectMolecule: React.FC<SelectMoleculeProps> = ({ state }) => {
  return (
    <SelectMoleculeWrapp>
      {state.map((el) => (
        <React.Fragment key={el.name}>
          {el.name}
          <SelectComponent list={el.list}></SelectComponent>
        </React.Fragment>
      ))}
    </SelectMoleculeWrapp>
  );
};

export default SelectMolecule;
