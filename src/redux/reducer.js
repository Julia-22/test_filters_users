import { createReducer } from "@reduxjs/toolkit";
import { combineReducers } from "redux";
import action from "./action";

const usersReducer = createReducer([], {
  [action.getUsersSuccess]: (_, { payload }) => payload,
});


export default combineReducers({
  items: usersReducer,
})