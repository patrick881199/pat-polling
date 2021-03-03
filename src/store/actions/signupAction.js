import {
  USER_SIGNUP,
  USER_SIGNUP_ERROR,
  CHECK_EMAIL,
  CHECK_USERNAME,
  CHECK_EMAIL_ERROR,
  CHECK_USERNAME_ERROR,
} from "../types";
import axios from "axios";
import { base_url } from "../../api";

export const signup = (signupInfo) => async (dispatch) => {
  try {
    const res = await axios.post(`${base_url}/api/auth/signup`, signupInfo);
    dispatch({
      type: USER_SIGNUP,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USER_SIGNUP_ERROR,
      payload: error,
    });
  }
};

//checkEmail

export const checkEmail = (email) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${base_url}/api/user/checkEmailAvailability?email=${email}`
    );
    dispatch({
      type: CHECK_EMAIL,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_EMAIL_ERROR,
      payload: error,
    });
  }
};

export const checkUsername = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `${base_url}/api/user/checkUsernameAvailability?username=${username}`
    );
    dispatch({
      type: CHECK_USERNAME,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CHECK_USERNAME_ERROR,
      payload: error,
    });
  }
};
