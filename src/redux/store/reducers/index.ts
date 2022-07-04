import { combineReducers } from "redux";
import { ListProductReducer } from "./list_product";
import { OneProductReducer } from "./one_product";

export const rootReducer = combineReducers({
  listProduct: ListProductReducer,
  oneProduct: OneProductReducer,
});

export type RootState = ReturnType<typeof rootReducer>;
