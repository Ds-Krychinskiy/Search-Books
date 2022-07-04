interface ButtonComponentProps {
  children: string;
  onClick: () => void;
}

const ButtonComponent: React.FC<ButtonComponentProps> = ({
  children,
  onClick,
}) => {
  return <button onClick={onClick}>{children}</button>;
};

export default ButtonComponent;
