import { GET_POLLS, GET_POLLS_ERROR } from "../types";

const initialState = {
  content: [],
  page: "",
  size: "",
  totalElements: "",
  totalPages: "",
  last: false,
};

export default function pollsReducer(state = initialState, action) {
  switch (action.type) {
    case GET_POLLS:
      return {
        content: action.payload.content,
        page: action.payload.page,
        size: action.payload.size,
        totalElements: action.payload.totalElements,
        totalPages: action.payload.totalPages,
        last: action.payload.last,
      };
    case GET_POLLS_ERROR:
      return {
        ...state,
        loading: false,
        error: action.payload,
      };
    default:
      return state;
  }
}
