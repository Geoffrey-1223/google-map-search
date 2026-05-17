import { configureStore } from "@reduxjs/toolkit";
import createSagaMiddleware from "redux-saga";

import placesReducer from "../features/places/placesAction";
import rootSaga from "../features/places/placesSaga";

const sagaMiddleware = createSagaMiddleware();

export const store = configureStore({
  reducer: {
    places: placesReducer,
  },
  middleware: (getDefaultMiddleware) =>
    getDefaultMiddleware({ thunk: false }).concat(sagaMiddleware),
});

sagaMiddleware.run(rootSaga);