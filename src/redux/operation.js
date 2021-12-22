import action from './action';
import axios from 'axios';

const getUsers = () => dispatch => {
  dispatch(action.getUsersRequest());

  axios.get(' https://venbest-test.herokuapp.com/')
    .then(response => dispatch(action.getUsersSuccess(response.data)))
    .catch(error => dispatch(action.getUsersError(error.message)));
}

export default {
  getUsers
}