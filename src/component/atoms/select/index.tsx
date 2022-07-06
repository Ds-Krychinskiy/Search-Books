import { OptionStyle, SelectStyle } from "./style";

interface SelectComponentProps {
  list: string[];
  onChange: (value: string) => void;
}

const SelectComponent: React.FC<SelectComponentProps> = ({ list, onChange }) => {
  return (
    <SelectStyle onChange={(e)=> onChange(e.target.value)}>
      {list.map((el) => (
        <OptionStyle value={el} key={el}>
          {el}
        </OptionStyle>
      ))}
    </SelectStyle>
  );
};

export default SelectComponent;
