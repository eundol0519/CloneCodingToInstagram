import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';
// Actions

const INSTAGRAMADD = 'INSTAGRAMADD';

const initialState = {
  cards: [],
};

// Action Creators

const todo_delect = createAction(INSTAGRAMADD, (id, pid) => ({
  id,
  pid,
}));

//미들웨이
const todoAddDB = (pid, todoText) => {
  return async function (dispatch, getstate, { history }) {
    const lof = await apis.signin();
    console.log(lof);
  };
};

// Reducer
export default handleActions(
  {
    [INSTAGRAMADD]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

const actionCreators = {
  todo_delect,
};

export { actionCreators };
