import * as actionTypes from "../action/ActionType";

let initialState = {};

const userReducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.FETCH_USER_LOGIN_SUCCESS:
      return {
        ...state,
        userLogin: action.payload,
        error: null,
      };
    case actionTypes.FETCH_USER_LOGIN_FAILURE:
      return {
        ...state,
        userLogin: null,
        error: action.payload,
      };
    default:
      return state;
  }
};

export default userReducer;
