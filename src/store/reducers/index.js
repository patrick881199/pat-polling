import { combineReducers } from "redux";
import checkEmailReducer from "./checkEmailReducer";
import loginReducer from "./loginReducer";
import signupReducer from "./signupReducer";
import checkUsernameReducer from "./checkUsernameReducer";
import pollsReducer from "./pollsReducer";
import voteReducer from "./voteReducer";
import createPollsReducer from "./createPollsReducer";

export default combineReducers({
  loginToken: loginReducer,
  signupInfo: signupReducer,
  emailAvailibilty: checkEmailReducer,
  usernameAvailibilty: checkUsernameReducer,
  polls: pollsReducer,
  voteResult: voteReducer,
  createPollsResults: createPollsReducer,
});
