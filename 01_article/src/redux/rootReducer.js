import { combineReducers } from "@reduxjs/toolkit";
import { good } from "./reducers/good";

const rootReducer = combineReducers({
  // あとでここにReducerを並べる
  good,
});

export default rootReducer;