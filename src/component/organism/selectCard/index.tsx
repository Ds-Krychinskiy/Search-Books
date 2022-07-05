import { DefaulState } from "../../../redux/type/selectProduct";
import Loader from "../../atoms/loader";
import TypographyComponent from "../../atoms/typography";
import { DirectionWrapp, ImageWrapp, SelectCardStyle } from "./style";

interface SelectCardProps {
  selectProduct: DefaulState[];
  loading: boolean;
}

const SelectCard: React.FC<SelectCardProps> = ({ selectProduct, loading }) => {
  return (
    <>
      {loading ? (
        <Loader />
      ) : (
        selectProduct.map((el) => (
          <SelectCardStyle>
            <ImageWrapp>
              <img
                src={el.volumeInfo.imageLinks.thumbnail}
                alt="Something went wrong"
              ></img>
              <TypographyComponent variant={"title"}>
                {el.volumeInfo.publisher}
              </TypographyComponent>
              <TypographyComponent variant={"title"}>
                {el.volumeInfo.publishedDate}
              </TypographyComponent>
              <TypographyComponent variant={"title"}>
                {el.volumeInfo.authors}
              </TypographyComponent>
              <TypographyComponent variant={"title"}>
                {el.volumeInfo.categories[0]}
              </TypographyComponent>
            </ImageWrapp>
            <DirectionWrapp>
              <TypographyComponent variant={"resultSeach"}>
                {el.volumeInfo.title}
              </TypographyComponent>
              <TypographyComponent variant={"title"}>
                {el.volumeInfo.description}
              </TypographyComponent>
            </DirectionWrapp>
          </SelectCardStyle>
        ))
      )}
    </>
  );
};

export default SelectCard;
