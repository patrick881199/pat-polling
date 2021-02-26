import { GET_POLLS, USERS_ERROR } from "../types";
import axios from "axios";

export const getPolls = () => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8081/api/polls?page=0&size=2`
    );
    dispatch({
      type: GET_POLLS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
