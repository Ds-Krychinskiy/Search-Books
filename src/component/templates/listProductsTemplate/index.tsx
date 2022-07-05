import { DefaulState } from "../../../redux/type/listProducts";
import ButtonComponent from "../../atoms/button";
import TypographyComponent from "../../atoms/typography";
import CardComponent from "../../organism/cards";
import { HeaderResultSearch } from "./style";
import { useNavigate } from "react-router-dom";

interface TemplateListProductProps {
  products: DefaulState[];
  loading: boolean;
  error: null | string;
  fetchOneProduct: (id: string) => void;
  fetchLoadMoreProduct: () => void;
}

const TemplateListProduct: React.FC<TemplateListProductProps> = ({
  products,
  loading,
  error,
  fetchOneProduct,
  fetchLoadMoreProduct,
}) => {
  const navigate = useNavigate();

  const GoToProductPage = (id: string) => {
    fetchOneProduct(id);
    navigate(`${id}`);
  };

  const countFountResults =
    products.length > 0
      ? `Found ${products.length} results`
      : "Результат поиска пуст..";

  return (
    <>
      <HeaderResultSearch>
        <TypographyComponent variant={"resultSeach"}>
          {countFountResults}
        </TypographyComponent>
      </HeaderResultSearch>
      {error ? (
        error
      ) : (
        <CardComponent
          products={products}
          loading={loading}
          GoToProductPage={GoToProductPage}
        />
      )}

      <ButtonComponent
        variant={"moreProducts"}
        onClick={() => fetchLoadMoreProduct()}
        children={"Load more.."}
      />
    </>
  );
};

export default TemplateListProduct;
