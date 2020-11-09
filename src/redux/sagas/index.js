import { all, fork } from "redux-saga/effects";

import userSaga from "./watchers/userSaga";

export default function* root() {
  yield all([fork(userSaga)]);
}
