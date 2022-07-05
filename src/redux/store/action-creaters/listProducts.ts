import _axios from "../../../axios";
import { ProductsActionType } from "../../type/listProducts";
import { RootState } from "../reducers";

export const fetchValueFromInput = (value: string) => ({
  type: ProductsActionType.GET_VALUE_FROM_INPUT,
  payload: value,
});

export const fetchListProductByIntitle = () => {
  return async (dispatch: any, getState: () => RootState) => {
    try {
      const state = getState();
      const { valueInput, orderBy } = state.listProduct;
      dispatch({ type: ProductsActionType.GET_PRODUCT });
      const response = await _axios.get(
        `?q=${valueInput}&startIndex=0&maxResults=30&orderBy?=${orderBy}`
      );
      dispatch({
        type: ProductsActionType.GET_PRODUCT_SUCCESS,
        payload: response.data.items,
      });
    } catch (error) {
      dispatch({ type: ProductsActionType.ERROR_ON_REQUEST, payload: error });
    }
  };
};

export const fetchLoadMoreProduct = () => {
  return async (dispatch: any, getState: () => RootState) => {
    try {
      const state = getState();
      dispatch({ type: ProductsActionType.GET_LOAD_MORE_PRODUCT });
      const { valueInput, startIndex, maxResults } = state.listProduct;
      const response = await _axios.get(
        `?q=${valueInput}&startIndex=${startIndex}&maxResults=${maxResults}&`
      );
      dispatch({
        type: ProductsActionType.GET_LOAD_MORE_PRODUCT_SUCCESS,
        payload: response.data.items,
      });
    } catch (error) {
      dispatch({ type: ProductsActionType.ERROR_ON_REQUEST, payload: error });
    }
  };
};
