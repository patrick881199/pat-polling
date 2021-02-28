import { GET_USERS, GET_USERS_ERROR } from "../types";

const initialState = {
  users: ["haha"],
  loading: true,
};

export default function userReducer(state = initialState, action) {
  switch (action.type) {
    case GET_USERS:
      return {
        ...state,
        users: action.payload,
        loading: false,
      };
    case GET_USERS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
