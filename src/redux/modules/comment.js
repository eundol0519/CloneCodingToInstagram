import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

// Actions

const GET_COMMENT = 'GET_COMMENT';

const initialState = {
  cards: [
    {
      status: 200,
    },
    [
      {
        nickname: 'abcdefghijklmnopqrstuvwxyz',
        commentId: 1,
        content: 'abcdefghijklmnopqrstuvwxyzabcdefghijklmnopqrstuvwxyz',
        createdAt: '2021-12-13',
      },
      {
        nickname: '뚱이',
        commentId: 2,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 2,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 2,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 2,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 2,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 2,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
    ],
  ],
};

// Action Creators

const getComment = createAction(GET_COMMENT, commentInfo => ({
  commentInfo,
}));

//미들웨이
const CommentLookUpFB = postId => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log('CommentLookUpFB try');
      const response = await apis.getComment(postId);
      console.log('CommentLookUpFB response', response.data[1]);

      dispatch(getComment(response.data[1]));
    } catch (error) {
      console.log('CommentLookUpFB error');
    }
  };
};

// Reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.cards = [...action.payload.commentInfo];
      }),
  },
  initialState
);

const actionCreators = {
  CommentLookUpFB,
};

export { actionCreators };
