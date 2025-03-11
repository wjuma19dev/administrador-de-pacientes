import * as type from "./actions/type.js";
import { pacienteReducer } from "./reducer/index.js";
import { store } from "./store.js";

export const dispatch = (action) => {
  pacienteReducer(store, action);
};

export const useSelector = (fn) => {
  return fn(store);
};
