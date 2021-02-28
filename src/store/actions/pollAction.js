import { GET_POLLS, GET_POLLS_ERROR } from "../types";
import axios from "axios";

export const getPolls = (page, pageSize) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8081/api/polls?page=${page}&size=${pageSize}`,
      {
        headers: {
          Authorization: `${localStorage.getItem(
            "tokenType"
          )} ${localStorage.getItem("accessToken")}`,
        },
      }
    );
    dispatch({
      type: GET_POLLS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_POLLS_ERROR,
      payload: error,
    });
  }
};
