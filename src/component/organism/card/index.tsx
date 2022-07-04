import TypographyComponent from "../../atoms/typography";

interface CardComponentProps {
  title: string;
  authors: string[];
  categories: string[];
  onClick: () => void;
}

const CardComponent: React.FC<CardComponentProps> = ({
  title,
  authors,
  categories,
  onClick,
}) => {
  return (
    <div onClick={onClick}>
      <TypographyComponent variant={"title"}>{title}</TypographyComponent>
    </div>
  );
};

export default CardComponent;
