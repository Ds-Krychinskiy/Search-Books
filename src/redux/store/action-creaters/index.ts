import * as ProductActionCreater from "./listProducts";
import * as SelectProductActionCreater from "./selectProduct";
export default {
  ...ProductActionCreater,
  ...SelectProductActionCreater,
};
