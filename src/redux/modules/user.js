import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';
import { setToken } from '../../shared/token';
import axios from 'axios';
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
const signInGetDB = userInfo => {
  return async function (dispatch, getstate, { history }) {
    console.log(userInfo);
    await axios({
      method: 'POST',
      url: 'http://13.125.45.147/api/users/login',
      data: {
        userEmail: userInfo.userEmail,
        password: userInfo.password,
      },
    })
      .then(res => {
        setToken('authorization', res.headers.authorization);
        history.push('/');
      })
      .catch(error => {
        alert('로그인에 실패 했습니다.');
        console.log('로그인 DB ERROR', error);
      });
  };
};
const signUpPostDB = userInfo => {
  return async function (dispatch, getstate, { history }) {
    console.log(userInfo);
    await axios({
      method: 'POST',
      url: 'http://13.125.45.147/api/users',
      data: {
        userEmail: userInfo.email,
        userName: userInfo.name,
        nickname: userInfo.nickname,
        password: userInfo.pw,
      },
    })
      .then(res => {
        history.push('/in/signin');
      })
      .catch(error => {
        alert('회원가입에 실패 했습니다.');
        console.log('회원가입 DB ERROR', error);
      });
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
