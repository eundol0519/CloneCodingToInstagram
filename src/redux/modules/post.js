import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';
import api from '../../shared/api';

// Action Type

const GET_ONE_POST = 'GET_ONE_POST';
const GET_POST = 'GET_POST';
const GET_MYPOST = 'GET_MYPOST';
const SET_LIKE = 'SET_LIKE';

const initialState = {
  postList: [
    {
      postId: 1,
      userId: 1,
      content: '카카오프렌즈는 사랑입니다.',
      commentCount: 3,
      likeCount: 3,
      userNickname: '초콜렛',
      imageUrl:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      imageUrl_profile:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      createdAt: '2021-12-13',
      myLike: false,
    },
    {
      postId: 1,
      userId: 1,
      content: '카카오프렌즈는 사랑입니다.',
      commentCount: 3,
      likeCount: 3,
      userNickname: '초콜렛',
      imageUrl:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      imageUrl_profile:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      createdAt: '2021-12-13',
      myLike: false,
    },
    {
      postId: 1,
      userId: 1,
      content: '카카오프렌즈는 사랑입니다.',
      commentCount: 3,
      likeCount: 3,
      userNickname: '초콜렛',
      imageUrl:
        'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg',
      imageUrl_profile:
        'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg',
      createdAt: '2021-12-13',
      myLike: false,
    },
  ],

  post: {
    postId: 4,
    userId: 4,
    content: '글내용',
    commentCount: '3',
    likeCount: '2',
    nickname: '스펀지밥',
    imageUrl: 'uploads/posts/1639370169898_myPhoto.jpg',
    createdAt: '2021-12-13',
    imageUrl_profile: 'uploads/profiles/165555_myPhoto.jpg',
    myLike: false,
  },

  myPageList: [
    {
      postId: 1,
      content: '글내용1',
      likeCount: 2,
      imageUrl:
        'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg',
      createdAt: '2021-12-13',
    },
    {
      postId: 2,
      content: '글내용2',
      likeCount: 24,
      imageUrl:
        'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg',
      createdAt: '2021-12-13',
    },
  ],

  users: {
    userId: 1,
    userEmail: 'test@test.com',
    userName: 'Olivi',
    nickname: '스펀지밥',
    imageUrl_profile:
      'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg',
    introduce: ' Olivia 개인레슨 문의주세요 ❤️🧡💛💚💙💜❤️🧡💛💚💙💜😎😎',
    phoneNumber: '010-1234-5678',
  },

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
      console.log('getPostDB try!!');
      const response = await apis.getPost();

      const post_list = response.data.posts;
      console.log(post_list);

      dispatch(getPosts(post_list));
    } catch (error) {
      console.log(error);
    }
  };
};

const getMyPostDB = userId => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('getMyPostDB try!!');
      console.log(userId);
      const response = await apis.getMyPost(userId);
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
      console.log('PostWriteFB try!!');
      const postInfo = { contnet: content, imageUrl: imageUrl };
      const response = await apis.postWrite(postInfo);

      dispatch(getPostDB());
    } catch (error) {
      console.log(error);
    }
  };
};

const PostDetailLookUpFB = postId => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('PostDetailLookUpFB try!!');
      const response = await apis.getDetailPost(postId);
      console.log(response.data);
      dispatch(getOnePost(response.data));
    } catch (error) {
      console.log(error);
    }
  };
};

const PostDeleteFB = postId => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('PostDeleteFB try');
      const response = await apis.deletePost(postId);
      console.log(response.data.status);

      window.alert('게시물이 삭제 되었습니다.');
    } catch (error) {
      console.log(error);
    }
  };
};

const PostLikeFB = (postId, likeStatus) => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('PostLikeFB try');
      const response = await apis.postLikeCancel(postId);
      let likeCount = parseInt(getState().post.cards.likeCount);

      if (likeStatus === 'plus') {
        console.log('좋아요 +1');
        likeCount++;
      } else if (likeStatus === 'minus') {
        console.log('좋아요 -1');
        likeCount--;
      }

      let postInfo = { ...getState().post.cards, likeCount: likeCount };
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
