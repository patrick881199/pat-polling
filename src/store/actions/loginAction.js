import {
  USER_LOGIN,
  USER_LOGIN_ERROR,
  CLEAR_LOGING_STORE,
  GET_ME,
  GET_ME_ERROR,
} from "../types";
import axios from "axios";

import { base_url } from "../../api";
export const login = (loginCredential) => async (dispatch) => {
  try {
    const res = await axios.post(
      `${base_url}/api/auth/signin`,
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

export const getMe = () => async (dispatch) => {
  try {
    const res = await axios.get(`${base_url}/api/user/me`, {
      headers: {
        Authorization: `${localStorage.getItem(
          "tokenType"
        )} ${localStorage.getItem("accessToken")}`,
      },
    });
    dispatch({
      type: GET_ME,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: GET_ME_ERROR,
      payload: error,
    });
  }
};
