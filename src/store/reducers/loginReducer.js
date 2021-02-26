import { USER_LOGIN, USERS_ERROR } from "../types";

const initialState = {
  accessToken: null,
  tokenType: null,
  error: null,
};

const loginReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_LOGIN:
      return {
        accessToken: action.payload.accessToken,
        tokenType: action.payload.tokenType,
        error: null,
      };
    case USERS_ERROR:
      return {
        error: action.payload,
        accessToken: null,
        tokenType: null,
      };
    default:
      return state;
  }
};

export default loginReducer;
