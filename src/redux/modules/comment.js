import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

// Actions

const GET_COMMENT = 'GET_COMMENT';

const initialState = {
  cards: [
    [
      {
        nickname: '스펀지밥',
        commentId: 1,
        content:
          'abcdefghijklmnopqrstsdasdasdasdkajsdkajsdkajsdkuvwxyzabcdefghijklmnopqrstuvwxyz',
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
        commentId: 3,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 4,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 5,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 6,
        content: '댓글내용2',
        createdAt: '2021-12-14',
      },
      {
        nickname: '뚱이',
        commentId: 7,
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
      console.log('CommentLookUpFB response', response.data);

      dispatch(getComment(response.data));
    } catch (error) {
      console.log('CommentLookUpFB error');
    }
  };
};

const CommentAddFB = (postId, content) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log('AddCommentFB try');
      const response = await apis.writeComment(postId, content);

      dispatch(CommentLookUpFB(postId)); // 댓글 목록 다시 요청
    } catch (error) {
      console.log('AddCommentFB error');
    }
  };
};

const CommentDeleteFB = (commentId, postId) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('CommentDeleteFB try');
      const response = await apis.deleteComment(commentId);

      window.alert('댓글이 삭제 되었습니다.');
      dispatch(CommentLookUpFB(postId));
    } catch (error) {
      console.log(error);
    }
  };
};

// Reducer
export default handleActions(
  {
    [GET_COMMENT]: (state, action) =>
      produce(state, draft => {
        draft.cards = action.payload.commentInfo;
      }),
  },
  initialState
);

const actionCreators = {
  CommentLookUpFB,
  CommentAddFB,
  CommentDeleteFB,
};

export { actionCreators };
