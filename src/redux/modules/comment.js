import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import {
  getComment,
  writeComment,
  deleteComment,
} from "../../shared/api/commnet";
// Actions

const GET_COMMENT = "GET_COMMENT";

const initialState = {
  cards: [],
};

// Action Creators

const get_Comment = createAction(GET_COMMENT, commentInfo => ({
  commentInfo,
}));

//미들웨이
const CommentLookUpFB = postId => {
  return async function (dispatch, getState, { history }) {
    try {
      const response = await getComment(postId);

      dispatch(get_Comment(response.data));
    } catch (error) {
      console.log("CommentLookUpFB error");
    }
  };
};

const CommentAddFB = (postId, content) => {
  return async function (dispatch, getState, { history }) {
    try {
      console.log(postId, content);
      const contents = { content: content };
      const response = await writeComment(postId, contents);

      dispatch(CommentLookUpFB(postId)); // 댓글 목록 다시 요청
    } catch (error) {
      console.log("AddCommentFB error");
    }
  };
};

const CommentDeleteFB = (commentId, postId) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("CommentDeleteFB try");
      const response = await deleteComment(commentId);

      window.alert("댓글이 삭제 되었습니다.");
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
