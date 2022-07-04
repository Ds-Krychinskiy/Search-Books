import React from "react";
import { Authors, Label, Title } from "./style";

interface TypographyComponentProps {
  variant: string;
  children: string | number;
}
const TypographyComponent: React.FC<TypographyComponentProps> = ({
  variant,
  children,
}) => {
  switch (variant) {
    case "label":
      return <Label>{children}</Label>;
    case "author":
      return <Authors>{children}</Authors>;
    case "title":
      return <Title>{children}</Title>;
    default:
      return <h2>{children}</h2>;
  }
};

export default TypographyComponent;
