import { USER_VOTE, USER_VOTE_ERROR, CLEAR_PREV_VOTE_RESULT } from "../types";
import axios from "axios";

export const vote = (pollId, selectedOption) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8081/api/polls/${pollId}/votes`,
      { choiceId: selectedOption },
      {
        headers: {
          Authorization: `${localStorage.getItem(
            "tokenType"
          )} ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    dispatch({
      type: USER_VOTE,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_VOTE_ERROR,
      payload: error,
    });
  }
};

export const clearPreviousVoteResult = () => (dispatch) => {
  dispatch({
    type: CLEAR_PREV_VOTE_RESULT,
  });
};
