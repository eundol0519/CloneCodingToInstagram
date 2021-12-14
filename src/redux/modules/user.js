import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';
import { setToken } from '../../shared/token';
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
const signInGetDB = user_info => {
  return async function (dispatch, getstate, { history }) {
    console.log(user_info);
    // const LoginInfo = await apis.signin(user_info);
    // setToken('authorization', LoginInfo.token);
    // localStorage.setItem('userInfo',JSON.stringify( LoginInfo.user));
    history.push('/');
  };
};
const signUpPostDB = userInfo => {
  return async function (dispatch, getstate, { history }) {
    // const LoginInfo = await apis.signup(userInfo);
    localStorage.setItem('json', JSON.stringify({ a: 1, b: 2 }));
    history.push('/signin');
  };
};
const ProfileModification = userInfoNew => {
  return async function (dispatch, getstate, { history }) {
    // const Info = await apis.editMyProfile(userInfoNew);
    console.log(userInfoNew);
    history.push('/');
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
  ProfileModification,
};

export { actionCreators };
