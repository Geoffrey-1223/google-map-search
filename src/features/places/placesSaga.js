import { call, put, takeLatest } from "redux-saga/effects";

import {
  searchPlaceRequest,
  searchPlaceSuccess,
  searchPlaceFailure,
  addSearchHistory,
} from "./placesAction";

const fakeApi = (data) =>
  new Promise((resolve) => setTimeout(() => resolve(data), 300));
function* handleSearch(action) {
  try {
    const result = yield call(fakeApi, action.payload);
    yield put(searchPlaceSuccess(result));
    yield put(addSearchHistory(result));
  } catch (error) {
    yield put(searchPlaceFailure());
  }
}

export default function* rootSaga() {
  yield takeLatest(searchPlaceRequest.type, handleSearch);
}