import { OneProductActionType, OneProductState } from "../../type/one_product";

const defaultState: OneProductState = {
  one_product: [],
  loading: false,
  error: null,
};

export const OneProductReducer = (
  state = defaultState,
  action: any
): OneProductState => {
  switch (action.type) {
    case OneProductActionType.GET_PRODUCT:
      return { loading: true, error: null, one_product: [] };
    case OneProductActionType.GET_PRODUCT_SUCCESS:
      return { loading: false, error: null, one_product: action.payload };
    case OneProductActionType.ERROR_ON_REQUEST:
      return { loading: false, error: action.payload, one_product: [] };
    default:
      return state;
  }
};
