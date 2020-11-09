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

export function successSignup() {
  return { type: everything.SUCCESS_SIGNUP };
}

export function failedSignup(errMsg) {
  return { type: everything.FAILED_SIGNUP, errMsg };
}
