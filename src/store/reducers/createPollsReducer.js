import {
  CREATE_POLLS,
  CREATE_POLLS_ERROR,
  CLEAR_CREATION_MESSAGE,
} from "../types";

const initialState = {
  success: "",
  message: "",
};

export default function createPollsReducer(state = initialState, action) {
  switch (action.type) {
    case CREATE_POLLS:
      return {
        ...state,
        ...action.payload,
      };

    case CREATE_POLLS_ERROR:
      return {
        ...state,
        ...action.payload,
      };
    case CLEAR_CREATION_MESSAGE:
      return {
        success: "",
        message: "",
      };

    default:
      return state;
  }
}
