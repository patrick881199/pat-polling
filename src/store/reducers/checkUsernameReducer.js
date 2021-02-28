import { CHECK_USERNAME, CHECK_USERNAME_ERROR } from "../types";

const initialState = {
  available: true,
};

const checkUsernameReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_USERNAME:
      return {
        available: action.payload.available,
      };
    case CHECK_USERNAME_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default checkUsernameReducer;
