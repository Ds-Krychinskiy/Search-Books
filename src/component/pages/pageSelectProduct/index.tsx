import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import SeleceProductTemplate from "../../templates/SelectProductTemplate";

const PageSelectProduct = () => {
  const { selectProduct, loading, error } = useTypedSelector(
    (state) => state.selectProduct
  );
  console.log(selectProduct);
  return (
    <SeleceProductTemplate
      selectProduct={selectProduct}
      loading={loading}
      error={error}
    />
  );
};

export default PageSelectProduct;
