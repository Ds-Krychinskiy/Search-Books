import { DefaulState } from "../../../redux/type/listProducts";
import ButtonComponent from "../../atoms/button";
import Loader from "../../atoms/loader";
import TypographyComponent from "../../atoms/typography";
import { CardStyleWrapp, ListProductWrapp } from "./style";

interface CardComponentProps {
  products: DefaulState[];
  loading: boolean;
  fetchLoadMoreProduct: () => void;
  GoToProductPage: (id: string) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  products,
  loading,
  GoToProductPage,
  fetchLoadMoreProduct
}) => {
  console.log(products);
  return (
    <ListProductWrapp>
      {loading ? (
        <Loader />
      ) : (
        products.map((el) => (
          <CardStyleWrapp
            onClick={() => GoToProductPage(el.id)}
            key={el.id}
          >
            <img
                          loading="lazy"
              src={`${el.volumeInfo.imageLinks?.smallThumbnail}`}
              alt="Something went wrong"
            />
            <TypographyComponent variant={"title"}>
              {el.volumeInfo.categories}
            </TypographyComponent>
            <TypographyComponent variant={"title"}>
              {el.volumeInfo.title}
            </TypographyComponent>
            <TypographyComponent variant={"title"}>
              {el.volumeInfo.authors}
            </TypographyComponent>
          </CardStyleWrapp>
        ))
      )}
      {products.length > 0 ? (<ButtonComponent
        variant={"moreProducts"}
        onClick={() => fetchLoadMoreProduct()}
        children={"Load more.."}
      />) : null}
    </ListProductWrapp>
  );
};

export default CardComponent;
