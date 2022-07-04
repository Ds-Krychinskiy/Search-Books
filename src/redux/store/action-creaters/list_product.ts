import _axios from "../../../axios";
import { ProductActionType } from "../../type/list_product";

export const fetchListProductByIntitle = (name: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: ProductActionType.GET_PRODUCT });
      const response = await _axios.get(`?q=intitle:${name}&`);
      dispatch({
        type: ProductActionType.GET_PRODUCT_SUCCESS,
        payload: response.data.items,
      });
    } catch (error) {
      dispatch({ type: ProductActionType.ERROR_ON_REQUEST, payload: error });
    }
  };
};
