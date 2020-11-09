import { SET_IS_LOADING, SUCCESS_SIGNUP, FAILED_SIGNUP } from "../constants";

const initialState = {
  isLoading: false,
  loggedIn: false,
  error: undefined,
  errMsg: "",
};

export default function setBrowserInfo(state = initialState, action) {
  switch (action.type) {
    case SET_IS_LOADING:
      return { ...state, isLoading: action.isLoading };
    case SUCCESS_SIGNUP:
      sessionStorage.setItem("loggedIn", true);
      return { ...state, loggedIn: true };
    case FAILED_SIGNUP:
      sessionStorage.setItem("loggedIn", false);
      return {
        ...state,
        error: true,
        errMsg: action.errMsg,
      };
    default:
      return state;
  }
}
