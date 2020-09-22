import { createStore, Store } from "redux";
import reducer from "./reducer";

const store: Store = createStore<any, any, any, any>(reducer);
export default store;
