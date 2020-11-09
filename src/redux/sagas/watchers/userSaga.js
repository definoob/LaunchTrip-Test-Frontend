import { put, takeLatest, call } from "redux-saga/effects";
import { signup } from "../../lib/api";
import { REQUEST_SIGNUP } from "../../constants";
import { setIsLoading, successSignup, failedSignup } from "../../actions";

function* requestSignup(action) {
  try {
    const { username, email, password, password_confirmation } = action;
    yield put(setIsLoading(false));
    const data = yield call(
      signup,
      username,
      email,
      password,
      password_confirmation
    );

    if (data.error === false) {
      yield put(successSignup());
    }
    if (data.error === true) {
      yield put(failedSignup(data.errMsg));
    }
  } catch (e) {}
}

export default function* watchSaga() {
  yield takeLatest(REQUEST_SIGNUP, requestSignup);
}
