import { combineReducers } from "redux";
import getProducts from "./getProdcutsReducer";
// Import your reducers and put them inside of here so you have access to the store.
const rootReducer = combineReducers({ getProducts });

export default rootReducer;
