import { combineReducers } from "redux";
import email from "./emailReducer";
import userInfo from "./userInfoReducer";
import joey from "./joeyReducer";
const rootReducer = combineReducers({
  email,
  userInfo,
  joey,
});

export default rootReducer;
