import { ProductState, ProductsActionType } from "../../type/listProducts";

const defaultState: ProductState = {
  valueInput: "",
  maxResults: 30,
  startIndex: 0,
  orderBy: "",
  products: [],
  loading: false,
  error: null,
};

export const ListProductReducer = (
  state = defaultState,
  action: any
): ProductState => {
  switch (action.type) {
    case ProductsActionType.GET_VALUE_FROM_INPUT:
      return {
        valueInput: action.payload,
        maxResults: 30,
        startIndex: 0,
        orderBy: "",
        loading: false,
        error: null,
        products: [...state.products],
      };
    case ProductsActionType.GET_PRODUCT:
      return {
        valueInput: state.valueInput,
        maxResults: 30,
        startIndex: 0,
        orderBy: "",
        loading: true,
        error: null,
        products: [],
      };
    case ProductsActionType.GET_PRODUCT_SUCCESS:
      return {
        valueInput: state.valueInput,
        maxResults: 30,
        startIndex: 0,
        orderBy: "",
        loading: false,
        error: null,
        products: action.payload,
      };
    case ProductsActionType.GET_LOAD_MORE_PRODUCT:
      return {
        valueInput: state.valueInput,
        startIndex: state.startIndex + 30,
        maxResults: state.maxResults + 30,
        orderBy: "",
        loading: true,
        error: null,
        products: [...state.products],
      };
    case ProductsActionType.GET_LOAD_MORE_PRODUCT_SUCCESS:
      return {
        valueInput: state.valueInput,
        startIndex: state.startIndex,
        maxResults: state.maxResults,
        orderBy: "",

        loading: false,
        error: null,
        products: [...state.products, action.paylod],
      };
    case ProductsActionType.ERROR_ON_REQUEST:
      return {
        valueInput: "",
        maxResults: 30,
        startIndex: 0,
        orderBy: "",
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};
