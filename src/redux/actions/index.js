import * as everything from "../constants";

export function setIsLoading(isLoading) {
  return {
    type: everything.SET_IS_LOADING,
    isLoading,
  };
}

export function requestSignup(
  username,
  email,
  password,
  password_confirmation
) {
  return {
    type: everything.REQUEST_SIGNUP,
    username,
    email,
    password,
    password_confirmation,
  };
}

export function successSignup(body) {
  return { type: everything.SUCCESS_SIGNUP, body };
}

export function failedSignup(errMsg) {
  return { type: everything.FAILED_SIGNUP, errMsg };
}

export function requestLogin(email, password) {
  return {
    type: everything.REQUEST_LOGIN,
    email,
    password,
  };
}

export function successLogin(body) {
  return { type: everything.SUCCESS_LOGIN, body };
}

export function failedLogin(errMsg) {
  return { type: everything.FAILED_LOGIN, errMsg };
}

export function requestLogout() {
  return { type: everything.REQUEST_LOGOUT };
}
