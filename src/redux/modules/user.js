import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import { setToken } from '../../shared/token';
import axios from 'axios';
import { editMyProfile } from '../../shared/api/myinto';
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
  return function (dispatch, getstate, { history }) {
    console.log(userInfo);

    axios({
      method: 'POST',
      url: 'http://13.125.45.147/api/users/login',
      data: {
        userEmail: userInfo.userEmail,
        password: userInfo.password,
      },
    })
      .then(async res => {
        console.log(res.data.token);
        setToken('authorization', res.data.token);

        axios({
          method: 'GET',
          url: 'http://13.125.45.147/api/users/me',
          headers: {
            'Content-Type': 'application/json; charset=utf-8',
            'X-Requested-With': 'XMLHttpRequest',
            authorization: `Bearer ${res.data.token}`,
            Accept: 'application/json',
          },
          data: {},
        })
          .then(res => {
            localStorage.setItem('userInfo', JSON.stringify(res.data));
          })
          .catch(error => {
            alert('회원정보 GET에 실패 했습니다.');
            console.log('회원정보 DB ERROR', error);
          });
        history.push('/');
      })
      .catch(error => {
        alert('로그인에 실패 했습니다.');
        console.log('로그인 DB ERROR', error);
      });
  };
};
const signUpPostDB = userInfo => {
  return function (dispatch, getstate, { history }) {
    console.log(userInfo);
    axios({
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
        history.push('/in/signIn');
      })
      .catch(error => {
        alert('회원가입에 실패 했습니다.');
        console.log('회원가입 DB ERROR', error);
      });
  };
};
const ProfileModification = (userId, userInfoNew) => {
  return async function (dispatch, getstate, { history }) {
    console.log(userInfoNew);
    await editMyProfile(userId, userInfoNew);
    localStorage.setItem('userInfo', JSON.stringify(userInfoNew));
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
