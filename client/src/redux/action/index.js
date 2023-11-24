import * as ActionType from "./ActionType"
import axios from "axios";

export const getData = (payload) => (dispatch) => {
  axios
    .get("http://localhost:3000/store")
    .then((response) => {
      dispatch({
        type: "GET_DATA",
        payload: response,
      });
    })
    .catch((err) => console.log(err));
};

export const getAccount = (payload) => (dispatch) => {
  axios
    .get("http://localhost:3000/account")
    .then((response) => {
      dispatch({
        type: "GET_ACC",
        payload: response,
      });
    })
    .catch((err) => console.log(err));
};

// export const login = (payload) => (dispatch) => {
//     axios
//       .post("http://localhost:3000/login")
//       .then((response) => {
//         dispatch({
//           type: "LOGIN_AC",
//           payload: response,
//         });
//       })
//       .catch((err) => console.log(err));
// }

export const filter = (payload) => {
  return {
    type: "FILTER",
    payload,
  };
};

export const fetchUserLoginSuccess = (userData) => ({
  type: ActionType.FETCH_USER_LOGIN_SUCCESS,
  payload: userData,
});

export const fetchUserLoginFailure = (error) => ({
  type: ActionType.FETCH_USER_LOGIN_FAILURE,
  payload: error,
});
