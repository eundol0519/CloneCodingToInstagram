import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

// Actions

const ADD_POST = 'ADD_POST';
const GET_POST = 'GET_POST';

const initialState = {
  cards: [
    {
      status: 200,
    },
    {
      content: '글내용',
      likeCount: '24',
      nickname: '뚱이',
      imageUrl:
        'https://blog.kakaocdn.net/dn/EicxP/btq2z0ELlLb/4DzUVhKcnWurHt8VoJGWJ1/img.png',
      createdAt: '2021-12-13',
    },
  ],
};

// Action Creators

const addPost = createAction(ADD_POST, postInfo => ({
  postInfo,
}));
const getPost = createAction(GET_POST, postInfo => ({
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

      dispatch(addPost(request));
    } catch (error) {
      console.log('PostWrtieFB error');
    }
  };
};

const PostDetailLookUpFB = postId => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log('PostDetailLookUpFB try');
      const response = await apis.getDetailPost(postId);
      console.log('PostDetailLookUpFB response', response.data[1]);

      dispatch(getPost(response.data[1]));
    } catch (error) {
      console.log('PostDetailLookUpFB error');
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
    [GET_POST]: (state, action) => {
      produce(state, draft => {
        draft.cards.push(action.payload.postInfo);
      });
    },
  },
  initialState
);

const actionCreators = {
  PostWriteFB,
  PostDetailLookUpFB,
};

export { actionCreators };
