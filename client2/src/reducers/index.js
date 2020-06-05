import { combineReducers } from "redux";
import authReducer from "./authReducers";
import errorReducer from "./errorReducers";
import fetchProfileReducer from "./fetchProfileReducer";
export default combineReducers({
  auth: authReducer,
  errors: errorReducer,
  fetchProfileData: fetchProfileReducer
});
