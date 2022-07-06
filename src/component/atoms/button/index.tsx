import { ButtonSearch, MoreProducts } from "./style";

interface ButtonComponentProps {
  children: string;
  onClick?: () => void;
  variant: string;
}

const ButtonComponent: React.FC<
  ButtonComponentProps & React.ButtonHTMLAttributes<HTMLButtonElement>
> = ({ children, onClick, variant, type }) => {
  switch (variant) {
    case "search":
      return (
        <ButtonSearch type={type} onClick={onClick}>
          {children}
        </ButtonSearch>
      );
    case "moreProducts":
      return <MoreProducts onClick={onClick}>{children}</MoreProducts>;
    default:
      return <button onClick={onClick}>{children}</button>;
  }
};

export default ButtonComponent;
