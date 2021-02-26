import { combineReducers } from "redux";
import checkEmailReducer from "./checkEmailReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import checkUsernameReducer from "./checkUsernameReducer";

export default combineReducers({
  loginToken: loginReducer,
  signupInfo: signupReducer,
  emailAvailibilty: checkEmailReducer,
  usernameAvailibilty: checkUsernameReducer,
});
