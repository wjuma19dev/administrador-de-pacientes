import reducer from "./reducer/index.js";
import { store } from "./store.js";

export const dispatch = (action) => {
  reducer(store, action);
};

export const useSelector = (fn) => {
  return fn(store);
};
