import _axios from "../../../axios";
import { OneProductActionType } from "../../type/one_product";

export const fetchOneProduct = (name: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: OneProductActionType.GET_PRODUCT });
      const response = await _axios.get(`/${name}?`);
      dispatch({
        type: OneProductActionType.GET_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({ type: OneProductActionType.ERROR_ON_REQUEST, payload: error });
    }
  };
};
