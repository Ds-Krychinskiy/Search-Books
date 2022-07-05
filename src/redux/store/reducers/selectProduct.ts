import {
  SelectProductActionType,
  SelectProductState,
} from "../../type/selectProduct";

const defaultState: SelectProductState = {
  selectProduct: [],
  loading: false,
  error: null,
};

export const SelectProductReducer = (
  state = defaultState,
  action: any
): SelectProductState => {
  switch (action.type) {
    case SelectProductActionType.GET_PRODUCT:
      return { loading: true, error: null, selectProduct: [] };
    case SelectProductActionType.GET_PRODUCT_SUCCESS:
      return { loading: false, error: null, selectProduct: [action.payload] };
    case SelectProductActionType.ERROR_ON_REQUEST:
      return { loading: false, error: action.payload, selectProduct: [] };
    default:
      return state;
  }
};
