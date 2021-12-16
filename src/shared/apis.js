// *** apis.js ***

import axios from 'axios';
import { getToken } from './token';

const instance = axios.create({
  baseURL: 'http://13.125.45.147',
  withCredentials: true, // 쿠키를 자동으로 가지고 가게 설정
});

instance.interceptors.request.use(config => {
  config.headers['Content-Type'] = 'application/json; charset=utf-8';
  config.headers['X-Requested-With'] = 'XMLHttpRequest';
  config.headers['authorization'] = getToken() ? `${getToken()}` : '';
  config.headers.Accept = 'application/json';
  return config;
});

const instanceMulti = axios.create({
  baseURL: 'url입력',
  headers: { 'content-type': 'multipart/form-data' }, //폼데이터
});

instanceMulti.interceptors.request.use(config => {
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
  writeComment: (postId, content) =>
    instance.post(`/api/comments/${postId}`, content), // 댓글 작성
  deleteComment: commentId => instance.delete(`/api/comments/${commentId}`), // 댓글 삭제

  //마이페이지
  getMyPost: userId => instance.get(`/api/users/${userId}/posts`), // 마이페이지 리스트

  //프로필 수정페이지
  uploadMyImage: (userId, url) => instance.post(`/api/users/${userId}`, url), // 프로필 이미지업로드
  editMyProfile: (userId, myPageInfo) =>
    instance.put(`/api/users/${userId}`, myPageInfo), // 마이페이지/내 정보 수정
};

export default apis;
