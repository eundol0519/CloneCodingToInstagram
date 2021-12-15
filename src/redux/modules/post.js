import { createAction, handleActions } from 'redux-actions';
import { produce } from 'immer';
import apis from '../../shared/apis';

// Action Type

const GET_ONE_POST = 'GET_ONE_POST';
const GET_POST = 'GET_POST'; // 항민
const GET_MYPOST = 'GET_MYPOST'; // 항민

const initialState = {
  postList: [
    {
      postId: 1,
      content: '카카오프렌즈',
      likeCount: '2',
      userNickname: '초콜렛',
      imageUrl:
        'https://www.google.com/imgres?imgurl=https%3A%2F%2Ft1.kakaocdn.net%2Fkakaocorp%2Fkakaocorp%2Fadmin%2Fservice%2Fa85d0594017900001.jpg&imgrefurl=https%3A%2F%2Fwww.kakaocorp.com%2Fpage%2Fdetail%2F580&tbnid=1bXXZ3LxWNcp9M&vet=12ahUKEwjFtYH4j-H0AhWVCt4KHb9ZAXsQMygAegUIARDSAQ..i&docid=1F2bVLbF5-kfJM&w=1920&h=1079&itg=1&q=%EC%B9%B4%EC%B9%B4%EC%98%A4%ED%94%84%EB%A0%8C%EC%A6%88&ved=2ahUKEwjFtYH4j-H0AhWVCt4KHb9ZAXsQMygAegUIARDSAQ',
      createdAt: '2021-12-13',
    },
  ],

  post: {
    postId: 4,
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
    userEmail: 'test@test.com',
    userName: '홍길동',
    nickname: '스펀지밥',
    imageUrl_profile: 'uploads/profiles/1639343163898_myPhoto.jpg',
    introduce: '내소개',
    phoneNumber: '010-1234-5678',
  },

  cards: [
    {
      status: 200,
    },
    {
      postId: 1,
      content: '카카오프렌즈',
      likeCount: '2',
      nickname: '초콜렛',
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
const getPosts = createAction(GET_POST, post_list => ({ post_list })); //항민
const getMyPost = createAction(GET_MYPOST, myPostInfo => ({ myPostInfo })); //항민

// middleware
const getPostDB = () => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('getPostDB try!!');
      const response = await apis.getPost();
      console.log(response);

      const post_list = response.data;
      console.log(post_list);

      const getPost = createAction(GET_POST, postInfo => ({
        postInfo,
      }));

      dispatch(getPosts(post_list));
    } catch (error) {
      console.log(error);
      window.alert(error);
    }
  };
};

const getMyPostDB = nickname => {
  return async (dispatch, getState, { history }) => {
    try {
      console.log('getMyPostDB try!!');
      const response = await apis.getMyPost(nickname);
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
        draft.postList = action.payload.post_list;
      }),
  },
  initialState
);

const actionCreators = {
  PostWriteFB,
  PostDetailLookUpFB,
  getPostDB,
  getMyPostDB,
};
