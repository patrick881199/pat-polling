import { USER_VOTE, USER_VOTE_ERROR, CLEAR_PREV_VOTE_RESULT } from "../types";

const initialState = {
  pollResult: null,
};

const voteReducer = (state = initialState, action) => {
  switch (action.type) {
    case USER_VOTE:
      return {
        pollResult: action.payload,
      };
    case CLEAR_PREV_VOTE_RESULT:
      return {
        pollResult: null,
      };
    case USER_VOTE_ERROR:
      return {
        error: action.payload,
      };
    default:
      return state;
  }
};

export default voteReducer;
