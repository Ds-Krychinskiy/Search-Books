import { DefaulState } from "../../../redux/type/selectProduct";
import SelectCard from "../../organism/selectCard";
import { SelectProductWrapp } from "./style";

interface SelectProductTemplateProps {
  loading: boolean;
  error: null | string;
  selectProduct: DefaulState[];
}

const SelectProductTemplate: React.FC<SelectProductTemplateProps> = ({
  selectProduct,
  error,
  loading,
}) => {
  return (
    <SelectProductWrapp>
      {error ? (
        error
      ) : (
        <SelectCard selectProduct={selectProduct} loading={loading} />
      )}
    </SelectProductWrapp>
  );
};

export default SelectProductTemplate;
