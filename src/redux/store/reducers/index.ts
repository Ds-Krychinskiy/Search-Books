import { combineReducers } from "redux";
import { ListProductReducer } from "./listProducts";
import { SelectProductReducer } from "./selectProduct";

export const rootReducer = combineReducers({
  listProduct: ListProductReducer,
  selectProduct: SelectProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
