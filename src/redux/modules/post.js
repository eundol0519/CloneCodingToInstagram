import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

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
      likeCount: '2',
      userNickname: '초콜렛',
      imageUrl:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      createdAt: '2021-12-13',
    },
    {
      postId: 1,
      userId: 1,
      content: '카카오프렌즈는 사랑입니다.',
      likeCount: '2',
      userNickname: '초콜렛',
      imageUrl:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      createdAt: '2021-12-13',
    },
    {
      postId: 1,
      userId: 1,
      content: '카카오프렌즈는 사랑입니다.',
      likeCount: '2',
      userNickname: '초콜렛',
      imageUrl:
        'https://w.namu.la/s/b9052678c125bbdfe7d07ddfa9b3110a1f333e5b1a801d105ad66f9a078ca2eb35f56622ef12ee4f0962ef7f3a603059c6f0a98dda56b939170c2aa7290fe33faf58a73f448852832d8d5353837ca61c',
      createdAt: '2021-12-13',
    },
  ],

  post: {
    postId: 4,
    userId: 4,
    content: '글내용',
    likeCount: '2',
    userNickname: '스펀지밥',
    imageUrl: 'uploads/posts/1639370169898_myPhoto.jpg',
    createdAt: '2021-12-13',
  },

  myPageList: [
    {
      userEmail: 'test@test.com',
      userName: '라이언',
      nickname: '라이언일병구하기',
      imageUrl_profile:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Fitem.kakaocdn.net%2Fdo%2F30cef086c8778d80e1487385bd5efe7b82f3bd8c9735553d03f6f982e10ebe70&imgrefurl=https%3A%2F%2Fe.kakao.com%2Ft%2Fhello-kakao-friends&tbnid=5m-6mpSjEHrZLM&vet=12ahUKEwjFtYH4j-H0AhWVCt4KHb9ZAXsQMygPegUIARDxAQ..i&docid=G_LuMlbZBAamHM&w=210&h=210&itg=1&q=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88&ved=2ahUKEwjFtYH4j-H0AhWVCt4KHb9ZAXsQMygPegUIARDxAQ',
      introduce: '안녕!!',
      phoneNumber: '010-1234-5678',
    },
  ],

  mypage: {
    postId: 4,
    content: '글내용',
    likeCount: '2',
    imageUrl: 'uploads/posts/1639370169898_myPhoto.jpg',
    createdAt: '2021-12-13',
  },

  cards: [
    {
      status: 200,
    },
    {
      postId: 1,
      content: '카카오프렌즈',
      likeCount: '2',
      nickname: '뚱이2',
      imageUrl:
        'https://t1.kakaocdn.net/kakaocorp/kakaocorp/admin/service/a85d0594017900001.jpg',
      createdAt: '2021-12-13',
    },
  ],
};

// action creators
const getOnePost = createAction(GET_POST, postInfo => ({
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

      const post_list = response.data;
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
      const response = await apis.getMyPost(userId);
      console.log(response);

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
      const postInfo = { contnet: content, imageurl: imageUrl };
      const response = await apis.postWrite(postInfo);

      if (response === 201) {
        dispatch(getPosts());
      }
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
      dispatch(getOnePost(response.data[1]));
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

      if (response.status === 204) {
        window.alert('게시물이 삭제 되었습니다.');
      } else {
        return;
      }
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
      let likeCount = parseInt(getState().post.cards[1].likeCount);

      if (likeStatus === 'plus') {
        console.log('좋아요 +1');
        likeCount++;
      } else if (likeStatus === 'minus') {
        console.log('좋아요 -1');
        likeCount--;
      }

      let postInfo = { ...getState().post.cards[1], likeCount: likeCount };
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
      produce(state, draft => {
        draft.cards.push(action.payload.postInfo);
      });
    },
    [GET_MYPOST]: (state, action) =>
      produce(state, draft => {
        draft.myPageList = action.payload.myPostInfo;
      }),
    [SET_LIKE]: (state, action) =>
      produce(state, draft => {
        draft.cards[1] = action.payload.postInfo;
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
