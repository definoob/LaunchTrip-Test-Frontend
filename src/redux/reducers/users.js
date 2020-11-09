import {
  SET_IS_LOADING,
  SUCCESS_SIGNUP,
  FAILED_SIGNUP,
  SUCCESS_LOGIN,
  FAILED_LOGIN,
  REQUEST_LOGOUT,
} from "../constants";

const initialState = {
  isLoading: false,
  loggedIn: sessionStorage.getItem("loggedIn"),
  error: undefined,
  errMsg: "",
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SUCCESS_SIGNUP:
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("userInfo", JSON.stringify(action.body));
      return { ...state, loggedIn: true };
    case FAILED_SIGNUP:
      sessionStorage.clear();
      return { ...state, error: true, errMsg: action.errMsg };
    case SUCCESS_LOGIN:
      sessionStorage.setItem("loggedIn", true);
      sessionStorage.setItem("userInfo", JSON.stringify(action.body));
      return { ...state, loggedIn: true };
    case FAILED_LOGIN:
      sessionStorage.clear();
      return { ...state, error: true, errMsg: action.errMsg };
    case REQUEST_LOGOUT:
      sessionStorage.clear();
      return { ...state, loggedIn: false, error: true, errMsg: "" };
    default:
      return state;
  }
}
