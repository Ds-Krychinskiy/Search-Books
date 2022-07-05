import { useAction } from "../../../redux/hooks/useAction";
import { useTypedSelector } from "../../../redux/hooks/useTypedSelector";
import TemplateListProduct from "../../templates/listProductsTemplate";

const PageListProduct = ({}) => {
  const { products, loading, error } = useTypedSelector(
    (state) => state.listProduct
  );
  const { fetchOneProduct, fetchLoadMoreProduct } = useAction();
  return (
    <TemplateListProduct
      error={error}
      products={products}
      loading={loading}
      fetchOneProduct={fetchOneProduct}
      fetchLoadMoreProduct={fetchLoadMoreProduct}
    />
  );
};

export default PageListProduct;
