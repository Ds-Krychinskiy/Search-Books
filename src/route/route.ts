import PageListProduct from "../component/pages/pageListProducts";
import PageSelectProduct from "../component/pages/pageSelectProduct";
import { Home } from "./consts";

export const ComponentRoutes = [
  {
    path: Home,
    Component: PageListProduct,
  },
  {
    path: ":id",
    Component: PageSelectProduct,
  },
];
