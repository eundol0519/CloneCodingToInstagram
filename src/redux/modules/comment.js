import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';

// Actions

const INSTAGRAMADD = 'INSTAGRAMADD';

const initialState = {
  cards: [],
};

// Action Creators

const instaAction = createAction(INSTAGRAMADD, (id, pid) => ({
  id,
  pid,
}));

//미들웨이
const todoAddDB = (pid, todoText) => {
  return async function (dispatch, getstate, { history }) {};
};

// Reducer
export default handleActions(
  {
    [INSTAGRAMADD]: (state, action) => produce(state, draft => {}),
  },
  initialState
);

const actionCreators = {
  instaAction,
};

export { actionCreators };
