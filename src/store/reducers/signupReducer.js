import { USER_SIGNUP, USER_SIGNUP_ERROR } from "../types";

const initialState = {
  success: false,
  message: null,
};

const signupReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_SIGNUP:
      return {
        success: action.payload.success,
        message: action.payload.message,
      };
    case USER_SIGNUP_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default signupReducer;
