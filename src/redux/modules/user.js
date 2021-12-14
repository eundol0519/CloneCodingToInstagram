import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// Actions

const LOGIN = 'LOGIN';

const initialState = {
  users: [],
};

// Action Creators

const LoginGet = createAction(LOGIN, user => ({
  user,
}));

//미들웨이
const signInGetDB = (username, pw) => {
  return async function (dispatch, getstate, { history }) {
    console.log(username, pw);
  };
};
const signUpPostDB = userInfo => {
  return async function (dispatch, getstate, { history }) {
    console.log(userInfo);
  };
};

// Reducer
export default handleActions(
  {
    [LOGIN]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

const actionCreators = {
  LoginGet,
  signInGetDB,
  signUpPostDB,
};

export { actionCreators };
