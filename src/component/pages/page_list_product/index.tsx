import { useAction } from "../../../redux/hooks/useAction";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import TemplateListProduct from "../../templates/list_product_template";

const PageListProduct = ({}) => {
  const { product, loading, error } = useTypedSelector(
    (state) => state.listProduct
  );
  const { fetchOneProduct } = useAction();
  return (
    <TemplateListProduct
      product={product}
      loading={loading}
      fetchOneProduct={fetchOneProduct}
    />
  );
};

export default PageListProduct;
