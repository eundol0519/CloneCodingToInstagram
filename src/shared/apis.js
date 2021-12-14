// *** apis.js ***

import axios from 'axios';
import { getToken } from './token';

const instance = axios.create({
  baseURL: 'url입력',
  withCredentials: true, // 쿠키를 자동으로 가지고 가게 설정
});

// Content-Type : 헤더는 클라이언트에게 반환된 컨텐츠의 컨텐츠 유형이 실제로 무엇인지를 알려줍니다.
// Authorization : 헤더는 인증 토큰(JWT든, Bearer 토큰이든)을 서버로 보낼 때 사용하는 헤더입니다. API 요청같은 것을 할 때 토큰이 없으면 거절당하기 때문에 이 때, Authorization을 사용하면 됩니다.
// Authorization: Bearer XXXXXXXXXXXXX // 보통 Basic이나 Bearer같은 토큰의 종류를 먼저 알리고 그 다음에 실제 토큰 문자를 적어 보냅니다.
// Accept : 클라이언트 자신이 원하는 미디어 타입 및 우선순위를 알린다.
// `headers`는 서버에 전송 될 사용자 정의 헤더 입니다. headers: { 'X-Requested-With': 'XMLHttpRequest' }
instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['authorization'] = getToken() ? `${getToken()}` : '';
  config.headers.Accept = 'application/json';
  return config;
});

const apis = {
  // 로그인,회원가입
  signin: userInfo => instance.post('/api/users/login', userInfo), // 로그인
  signup: userInfo => instance.post('/api/users/Signup', userInfo), // 회원가입
  getUserInfo: () => instance.get('/api/users/me'), //로그인 시 유저정보 가지고 오는 api
  //전체 게시글 조회 페이지
  getPost: () => instance.get('/api/posts'), // 전체 게시글 조회

  //게시글 작성페이지 (모달창)
  uploadPostImage: img => instance.post(`/api/posts/imageUpload`, img), // 게시글 이미지업로드
  postWrite: postInfo => instance.post(`/api/posts/write`, postInfo), // 게시글 작성

  //게시물 상세 페이지 (모달창)
  getDetailPost: postId => instance.get(`/api/posts/details/${postId}`), // 게시글 상세페이지 조회
  postLikeCancel: postId => instance.post(`/api/posts/details/like/${postId}`), // 좋아요 / 취소
  deletePost: postId => instance.delete(`/api/posts/details/${postId}`), // 게시글 삭제

  getComment: postId => instance.get(`/api/comments/${postId}`), // 댓글 조회
  commentWrite: (postId, commentInfo) =>
    instance.post(`/api/comments/${postId}`, commentInfo), // 댓글 작성
  deleteComment: commentId => instance.delete(`/api/comments/${commentId}`), // 댓글 삭제

  //마이페이지
  getMyInfoPost: nickname => instance.get(`/api/mypage/${nickname}`), // 마이페이지 정보 조회
  getMyPost: nickname => instance.get(`/api/mypage/posts/${nickname}`), // 마이페이지 리스트

  //프로필 수정페이지
  uploadMyImage: (userId, url) => instance.post(`/api/users/${userId}`, url), // 프로필 이미지업로드
  editMyProfile: (userId, myPageInfo) =>
    instance.put(`/api/users/${userId}`, myPageInfo), // 마이페이지/내 정보 수정
};

export default apis;
