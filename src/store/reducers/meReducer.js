import { GET_ME, GET_ME_ERROR } from "../types";

const initialState = {
  id: "",
  username: "",
  name: "",
};

const meReducer = (state = initialState, action) => {
  switch (action.type) {
    case GET_ME:
      return {
        ...action.payload,
      };
    case GET_ME_ERROR:
      return {
        ...action.payload,
      };
    default:
      return state;
  }
};

export default meReducer;
