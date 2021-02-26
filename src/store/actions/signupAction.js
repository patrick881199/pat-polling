import {
  USER_SIGNUP,
  USERS_ERROR,
  CHECK_EMAIL,
  CHECK_USERNAME,
} from "../types";
import axios from "axios";

export const signup = (signupInfo) => async (dispatch) => {
  try {
    const res = await axios.post(
      `http://localhost:8081/api/auth/signup`,
      signupInfo
    );
    dispatch({
      type: USER_SIGNUP,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};

//checkEmail

export const checkEmail = (email) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8081/api/user/checkEmailAvailability?email=${email}`
    );
    dispatch({
      type: CHECK_EMAIL,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};

export const checkUsername = (username) => async (dispatch) => {
  try {
    const res = await axios.get(
      `http://localhost:8081/api/user/checkUsernameAvailability?username=${username}`
    );
    dispatch({
      type: CHECK_USERNAME,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: USERS_ERROR,
      payload: error,
    });
  }
};
