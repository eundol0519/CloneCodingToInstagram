import { createAction, handleActions } from "redux-actions";
import { produce } from "immer";
import apis from "../../shared/apis";
import api from "../../shared/api";
import {
  getPostList,
  getDetailPostList,
  deletePostList,
  getMyPostList,
  postLikeCancel,
  postWriteOn,
} from "../../shared/api/post";

// Action Type

const GET_ONE_POST = "GET_ONE_POST";
const GET_POST = "GET_POST";
const GET_MYPOST = "GET_MYPOST";
const SET_LIKE = "SET_LIKE";

const initialState = {
  postList: [],

  post: {},

  myPageList: [],

  users: {},

  cards: {},
};

// action creators
const getOnePost = createAction(GET_ONE_POST, postInfo => ({
  postInfo,
}));
const getPosts = createAction(GET_POST, post_list => ({ post_list }));
const getMyPost = createAction(GET_MYPOST, myPostInfo => ({ myPostInfo }));
const setLike = createAction(SET_LIKE, postInfo => ({ postInfo }));

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getPostDB try!!");
      const response = await getPostList();
      const post_list = response.data.posts;
      dispatch(getPosts(post_list));
    } catch (error) {
      console.log(error);
    }
  };
};

const getMyPostDB = userId => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("getMyPostDB try!!");
      console.log(userId);
      const response = await getMyPostList(userId);
      console.log(response.data);

      const myPostInfo = response.data;
      console.log(myPostInfo);

      dispatch(getMyPost(myPostInfo));
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };
};

const PostWriteFB = (content, imageUrl) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("PostWriteFB try!!");
      const postInfo = { content: content, imageUrl: imageUrl };
      console.log(postInfo);
      const response = await postWriteOn(postInfo);

      dispatch(getPostDB());
    } catch (error) {
      console.log(error);
    }
  };
};

const PostDetailLookUpFB = postId => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("PostDetailLookUpFB try!!");
      const response = await getDetailPostList(postId);
      dispatch(getOnePost(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const PostDeleteFB = postId => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("PostDeleteFB try");
      const response = await deletePostList(postId);
      console.log(response.data.status);

      window.alert("게시물이 삭제 되었습니다.");
    } catch (error) {
      console.log(error);
    }
  };
};

const PostLikeFB = (postId, likeStatus) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log("PostLikeFB try");
      const response = await postLikeCancel(postId);
      let likeCount = parseInt(getState().post.cards.likeCount);
      let myLike = false;

      if (likeStatus === "plus") {
        console.log("좋아요 +1");
        likeCount++;
        myLike = true;
      } else if (likeStatus === "minus") {
        console.log("좋아요 -1");
        likeCount--;
        myLike = false;
      }

      let postInfo = {
        ...getState().post.cards,
        likeCount: likeCount,
        myLike: myLike,
      };
      console.log(postInfo);
      dispatch(setLike(postInfo));
    } catch (error) {
      console.log(error);
    }
  };
};

// Reducer

export default handleActions(
  {
    [GET_POST]: (state, action) =>
      produce(state, draft => {
        draft.postList = action.payload.post_list;
      }),
    [GET_ONE_POST]: (state, action) => {
      return produce(state, draft => {
        const postInfo = action.payload.postInfo;
        draft.cards.postId = postInfo.postId;
        draft.cards.userId = postInfo.userId;
        draft.cards.content = postInfo.content;
        draft.cards.commentCount = postInfo.commentCount;
        draft.cards.likeCount = postInfo.likeCount;
        draft.cards.nickname = postInfo.nickname;
        draft.cards.imageUrl = postInfo.imageUrl;
        draft.cards.createdAt = postInfo.createdAt;
        draft.cards.imageUrl_profile = postInfo.imageUrl_profile;
        draft.cards.myLike = postInfo.myLike;
      });
    },
    [GET_MYPOST]: (state, action) =>
      produce(state, draft => {
        draft.myPageList = action.payload.myPostInfo.posts;
        draft.users = action.payload.myPostInfo.users;
      }),
    [SET_LIKE]: (state, action) =>
      produce(state, draft => {
        draft.cards = action.payload.postInfo;
      }),
  },
  initialState
);

const actionCreators = {
  PostWriteFB,
  PostDetailLookUpFB,
  getPostDB,
  getMyPostDB,
  PostDeleteFB,
  PostLikeFB,
};

export { actionCreators };
