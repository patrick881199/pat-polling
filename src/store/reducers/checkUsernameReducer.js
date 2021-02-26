import { CHECK_USERNAME, USERS_ERROR } from "../types";

const initialState = {
  available: true,
};

const checkUsernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USERNAME:
      return {
        available: action.payload.available,
      };
    case USERS_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default checkUsernameReducer;
