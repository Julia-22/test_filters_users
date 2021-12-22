import { createAction } from "@reduxjs/toolkit";

const getUsersRequest = createAction('users/getUsersRequest');
const getUsersSuccess = createAction('users/getUsersSuccess');
const getUsersError = createAction('users/getUsersError');

const filterUsers = createAction('users/filterUsers');


export default {
  getUsersRequest,
  getUsersSuccess,
  getUsersError,
  filterUsers,
}