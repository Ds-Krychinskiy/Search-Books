import { DefaulState } from "../../../redux/type/list_product";
import ButtonComponent from "../../atoms/button";
import TypographyComponent from "../../atoms/typography";
import CardComponent from "../../organism/card";
import { HeaderResultSearch } from "./style";
import { useNavigate } from "react-router-dom";
import { ProductPage } from "../../../route/consts";

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
  const navigate = useNavigate()

  const GoToProductPage = (id: string ) => {
    fetchOneProduct(id);
    navigate(`/${id}`);
  };

  const countFountResults =
    product.length > 0
      ? `Found ${product.length} results`
      : "Результат поиска пуст..";

  return (
    <>
      <HeaderResultSearch>
        <TypographyComponent variant={"resultSeach"}>
          {countFountResults}
        </TypographyComponent>
      </HeaderResultSearch>
      <CardComponent product={product} loading={loading} GoToProductPage={GoToProductPage}/>
      <ButtonComponent
        variant={"moreProducts"}
        onClick={() => console.log()}
        children={"Ещё..."}
      />
    </>
  );
};

export default TemplateListProduct;
