import { OptionStyle, SelectStyle } from "./style";

interface SelectComponentProps {
  list: string[];
}

const SelectComponent: React.FC<SelectComponentProps> = ({ list }) => {
  return (
    <SelectStyle>
      {list.map((el) => (
        <OptionStyle value={el} key={el}>
          {el}
        </OptionStyle>
      ))}
    </SelectStyle>
  );
};

export default SelectComponent;
