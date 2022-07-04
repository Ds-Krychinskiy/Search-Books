import * as ProductActionCreater from "./list_product";
import * as OneProductActionCreater from "./one_product";
export default {
  ...ProductActionCreater,
  ...OneProductActionCreater,
};
