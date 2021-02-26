import { USER_LOGIN, USERS_ERROR } from "../types";
import axios from "axios";

export const login = (loginCredential) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8081/api/auth/signin`,
      loginCredential
    );
    dispatch({
      type: USER_LOGIN,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
