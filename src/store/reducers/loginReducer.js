import { USER_LOGIN, USER_LOGIN_ERROR, CLEAR_LOGING_STORE } from "../types";

const initialState = {
  accessToken: "",
  tokenType: "",
  error: "",
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        ...state,
        accessToken: action.payload.accessToken,
        tokenType: action.payload.tokenType,
        error: "",
      };
    case USER_LOGIN_ERROR:
      return {
        error: action.payload,
        accessToken: "",
        tokenType: "",
      };
    case CLEAR_LOGING_STORE:
      return {
        accessToken: "",
        tokenType: "",
      };
    default:
      return state;
  }
};

export default loginReducer;
