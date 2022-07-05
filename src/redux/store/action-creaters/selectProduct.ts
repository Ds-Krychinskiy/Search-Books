import _axios from "../../../axios";
import { SelectProductActionType } from "../../type/selectProduct";

export const fetchOneProduct = (name: string) => {
  return async (dispatch: any) => {
    try {
      dispatch({ type: SelectProductActionType.GET_PRODUCT });
      const response = await _axios.get(`/${name}?`);
      dispatch({
        type: SelectProductActionType.GET_PRODUCT_SUCCESS,
        payload: response.data,
      });
    } catch (error) {
      dispatch({
        type: SelectProductActionType.ERROR_ON_REQUEST,
        payload: error,
      });
    }
  };
};
