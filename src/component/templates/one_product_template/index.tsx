import { DefaulState } from "../../../redux/type/one_product";
import TypographyComponent from "../../atoms/typography";
import { OneProductWrapp } from "./style";

interface OneProductTemplateProps {
  one_product: DefaulState[]
}

const OneProductTemplate: React.FC<OneProductTemplateProps> = ({one_product}) => {
  return (
  <OneProductWrapp>
    {one_product.map((el)=> (
      <TypographyComponent variant={"title"}>{el.volumeInfo.title}</TypographyComponent>
    ))}
  </OneProductWrapp>);
};

export default OneProductTemplate;
