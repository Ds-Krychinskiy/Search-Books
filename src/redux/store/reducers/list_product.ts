import { ProductState, ProductActionType } from "../../type/list_product";

const defaultState: ProductState = {
  product: [],
  loading: false,
  error: null,
};

export const ListProductReducer = (
  state = defaultState,
  action: any
): ProductState => {
  switch (action.type) {
    case ProductActionType.GET_PRODUCT:
      return { loading: true, error: null, product: [] };
    case ProductActionType.GET_PRODUCT_SUCCESS:
      return { loading: false, error: null, product: action.payload };
    case ProductActionType.ERROR_ON_REQUEST:
      return { loading: false, error: action.payload, product: [] };
    default:
      return state;
  }
};
