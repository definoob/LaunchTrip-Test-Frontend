import { put, takeLatest, call } from "redux-saga/effects";
import { signup, login } from "../../lib/api";
import { REQUEST_SIGNUP, REQUEST_LOGIN } from "../../constants";
import {
  setIsLoading,
  successSignup,
  failedSignup,
  successLogin,
  failedLogin,
} from "../../actions";

function* requestSignup(action) {
  try {
    const { username, email, password, password_confirmation } = action;
    const data = yield call(
      signup,
      username,
      email,
      password,
      password_confirmation
    );

    yield put(setIsLoading(false));
    if (data.error === false) {
      yield put(successSignup(data.body));
    } else if (data.error === true) {
      yield put(failedSignup(data.errMsg));
    }
  } catch (e) {
    yield put(failedSignup("Something went wrong."));
  }
}

function* requestLogin(action) {
  try {
    const { email, password } = action;
    const data = yield call(login, email, password);

    yield put(setIsLoading(false));
    if (data.error === false) {
      yield put(successLogin(data.body));
    } else if (data.error === true) {
      yield put(failedLogin(data.errMsg));
    }
  } catch (e) {
    yield put(failedLogin("Something went wrong."));
  }
}

export default function* watchSaga() {
  yield takeLatest(REQUEST_SIGNUP, requestSignup);
  yield takeLatest(REQUEST_LOGIN, requestLogin);
}
