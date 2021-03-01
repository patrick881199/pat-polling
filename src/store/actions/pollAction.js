import {
  GET_POLLS,
  GET_POLLS_ERROR,
  CREATE_POLLS,
  CREATE_POLLS_ERROR,
  CLEAR_CREATION_MESSAGE,
} from "../types";
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

export const createPolls = (payload) => async (dispatch) => {
  try {
    const res = await axios.post(`http://localhost:8081/api/polls`, payload, {
      headers: {
        Authorization: `${localStorage.getItem(
          "tokenType"
        )} ${localStorage.getItem("accessToken")}`,
      },
    });
    dispatch({
      type: CREATE_POLLS,
      payload: res.data,
    });
  } catch (error) {
    dispatch({
      type: CREATE_POLLS_ERROR,
      payload: error,
    });
  }
};

export const clearCreationMessage = () => (dispatch) => {
  dispatch({
    type: CLEAR_CREATION_MESSAGE,
  });
};

// export const createPolls = (payload) => async (dispatch) => {
//   try {
//     const res = await axios.post(`http://localhost:8081/api/polls`, payload, {
//       headers: {
//         Authorization: `${localStorage.getItem(
//           "tokenType"
//         )} ${localStorage.getItem("accessToken")}`,
//       },
//     });
//     dispatch({
//       type: CREATE_POLLS,
//       payload: res.data,
//     });
//   } catch (error) {
//     dispatch({
//       type: CREATE_POLLS_ERROR,
//       payload: error,
//     });
//   }
// };
