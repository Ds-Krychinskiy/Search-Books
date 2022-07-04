import { DefaulState } from "../../../redux/type/list_product";
import Loader from "../../atoms/loader";
import CardComponent from "../../organism/card";
import { ListProductWrapp } from "./style";

interface TemplateListProductProps {
  product: DefaulState[];
  loading: boolean;
  fetchOneProduct: (id: string) => void;
}

const TemplateListProduct: React.FC<TemplateListProductProps> = ({
  product,
  loading,
  fetchOneProduct,
}) => {
  return (
    <ListProductWrapp>
      {loading ? (
        <Loader />
      ) : (
        product.map((el) => (
          <CardComponent
            onClick={() => fetchOneProduct(el.id)}
            key={el.volumeInfo.title}
            categories={el.volumeInfo.categories}
            title={el.volumeInfo.title}
            authors={el.volumeInfo.authors}
          />
        ))
      )}
    </ListProductWrapp>
  );
};

export default TemplateListProduct;
