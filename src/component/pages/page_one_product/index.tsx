import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import OneProductTemplate from "../../templates/one_product_template";

const PageOneProduct = () => {
  const { one_product, loading, error } = useTypedSelector(
    (state) => state.oneProduct
  );

  return <OneProductTemplate one_product={one_product}/>;
};

export default PageOneProduct;
