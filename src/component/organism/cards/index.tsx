import { DefaulState } from "../../../redux/type/listProducts";
import Loader from "../../atoms/loader";
import TypographyComponent from "../../atoms/typography";
import { CardStyleWrapp, ListProductWrapp } from "./style";

interface CardComponentProps {
  products: DefaulState[];
  loading: boolean;
  GoToProductPage: (id: string) => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  products,
  loading,
  GoToProductPage,
}) => {
  return (
    <ListProductWrapp>
      {loading ? (
        <Loader />
      ) : (
        products.map((el) => (
          <CardStyleWrapp
            onClick={() => GoToProductPage(el.id)}
            key={el.volumeInfo.title}
          >
            <img
              src={`${el.volumeInfo.imageLinks.smallThumbnail}`}
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
    </ListProductWrapp>
  );
};

export default CardComponent;
