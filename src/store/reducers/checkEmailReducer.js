import { CHECK_EMAIL, USERS_ERROR } from "../types";

const initialState = {
  available: true,
};

const checkEmailReducer = (state = initialState, action) => {
  switch (action.type) {
    case CHECK_EMAIL:
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

export default checkEmailReducer;
