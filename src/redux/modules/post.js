import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

// Actions

const ADD_POST = 'ADD_POST';

const initialState = {
  cards: [],
};

// Action Creators

const addPosts = createAction(ADD_POST, postInfo => ({
  postInfo,
}));

//Middleware

const PostWriteFB = (content, imageUrl) => {
  return async function (dispatch, getState, { history }) {
    const request = { content: content, imageUrl: imageUrl };
    const response = await apis.postWrite(request);
    console.log('PostWrtieFB response', response.data.status);

    try {
      console.log('PostWrtieFB try');
      const request = { content: content, imageUrl: imageUrl };
      const response = await apis.postWrite(request);
      console.log('PostWrtieFB response', response.data.status);

      dispatch(addPosts(request));
    } catch (error) {
      console.log('PostWrtieFB error');
    }
  };
};

// Reducer
export default handleActions(
  {
    [ADD_POST]: (state, action) => {
      produce(state, draft => {
        draft.cards.push(action.payload.postInfo);
      });
    },
  },
  initialState
);

const actionCreators = {
  PostWriteFB,
};

export { actionCreators };
