import { USER_LOGIN, USER_LOGIN_ERROR, CLEAR_LOGING_STORE } from "../types";
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
      type: USER_LOGIN_ERROR,
      payload: error,
    });
  }
};

export const clearLoginStore = () => (dispatch) => {
  dispatch({
    type: CLEAR_LOGING_STORE,
  });
};
