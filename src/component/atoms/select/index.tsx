interface SelectComponentProps {
  list: string[];
}

const SelectComponent: React.FC<SelectComponentProps> = ({ list }) => {
  return (
    <select>
      {list.map((el) => (
        <option key={el}>{el}</option>
      ))}
    </select>
  );
};

export default SelectComponent;
