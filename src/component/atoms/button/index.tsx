import { ButtonSearch, MoreProducts } from "./style";

interface ButtonComponentProps {
  children: string;
  onClick: () => void;
  variant: string;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  onClick,
  variant,
}) => {
  switch (variant) {
    case "search":
      return <ButtonSearch onClick={onClick}>{children}</ButtonSearch>;
    case "moreProducts":
      return <MoreProducts onClick={onClick}>{children}</MoreProducts>;
    default:
      return <button onClick={onClick}>{children}</button>;
  }
};

export default ButtonComponent;
