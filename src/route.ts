import PageListProduct from "./component/pages/page_list_product";
import PageOneProduct from "./component/pages/page_one_product";
import { Home, ProductPage } from "./consts";

export const ComponentRoutes = [
  {
    path: Home,
    Component: PageListProduct,
  },
  {
    path: ProductPage,
    Component: PageOneProduct,
  },
];
