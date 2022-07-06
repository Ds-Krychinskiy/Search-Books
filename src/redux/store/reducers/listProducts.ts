import { ProductState, ProductsActionType } from "../../type/listProducts";

const defaultState: ProductState = {
  valueInput: "",
  maxResults: 30,
  startIndex: 0,
  subject: "",
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
        subject: "",
        orderBy: "",
        loading: false,
        error: null,
        products: [...state.products],
      };
    case ProductsActionType.GET_SUBJECT:
      return {
        valueInput: state.valueInput,
        maxResults: 30,
        startIndex: 0,
        subject: action.payload,
        orderBy: state.orderBy,
        loading: false,
        error: null,
        products: [...state.products],
      };
    case ProductsActionType.GET_ORDERBY:
      return {
        valueInput: state.valueInput,
        maxResults: 30,
        startIndex: 0,
        subject: state.subject,
        orderBy: action.payload,
        loading: false,
        error: null,
        products: [...state.products],
      };
    case ProductsActionType.GET_PRODUCT:
      return {
        valueInput: state.valueInput,
        maxResults: 30,
        startIndex: 0,
        subject: state.subject,
        orderBy: state.orderBy,
        loading: true,
        error: null,
        products: [],
      };
    case ProductsActionType.GET_PRODUCT_SUCCESS:
      return {
        valueInput: state.valueInput,
        maxResults: 30,
        startIndex: 0,
        subject:state.subject,
        orderBy: state.orderBy,
        loading: false,
        error: null,
        products: action.payload,
      };
    case ProductsActionType.GET_LOAD_MORE_PRODUCT:
      return {
        valueInput: state.valueInput,
        startIndex: state.startIndex + 30,
        maxResults: state.maxResults,
        subject: state.subject,
        orderBy: state.orderBy,
        loading: true,
        error: null,
        products: [...state.products],
      };
    case ProductsActionType.GET_LOAD_MORE_PRODUCT_SUCCESS:
      return {
        valueInput: state.valueInput,
        startIndex: state.startIndex,
        maxResults: state.maxResults,
        subject: state.subject,
        orderBy: state.orderBy,
        loading: false,
        error: null,
        products: [...state.products, ...action.payload],
      };
    case ProductsActionType.ERROR_ON_REQUEST:
      return {
        valueInput: "",
        maxResults: 30,
        startIndex: 0,
        subject: state.subject,
        orderBy: "",
        loading: false,
        error: action.payload,
        products: [],
      };
    default:
      return state;
  }
};
