// *** apis.js ***

import axios from 'axios';
import { getToken } from './token';
import instanceMulti from './instanceMulti';
import instance from './instance';

const apis = {
  // 로그인,회원가입
  signin: userInfo =>
    instance.post('http://13.125.45.147/api/users/login', userInfo), // 로그인
  signup: userInfo =>
    instance.post('http://13.125.45.147/api/users/Signup', userInfo), // 회원가입
  getUserInfo: () => instance.get('http://13.125.45.147/api/users/me'), //로그인 시 유저정보 가지고 오는 api

  //전체 게시글 조회 페이지
  getPost: () => instance.get('http://13.125.45.147/api/posts'), // 전체 게시글 조회

  //게시글 작성페이지 (모달창)
  uploadPostImage: img =>
    instance.post(`http://13.125.45.147/api/posts/images`, img), // 게시글 이미지업로드
  postWrite: postInfo =>
    instance.post(`http://13.125.45.147/api/posts`, postInfo), // 게시글 작성

  //게시물 상세 페이지 (모달창)
  getDetailPost: postId =>
    instance.get(`http://13.125.45.147/api/posts/${postId}`), // 게시글 상세페이지 조회
  postLikeCancel: postId =>
    instance.post(`http://13.125.45.147/api/posts/${postId}/like`), // 좋아요 / 취소
  deletePost: postId =>
    instance.delete(`http://13.125.45.147/api/posts/${postId}`), // 게시글 삭제

  getComment: postId =>
    instance.get(`http://13.125.45.147/api/comments/${postId}`), // 댓글 조회
  writeComment: (postId, content) =>
    instance.post(`http://13.125.45.147/api/comments/${postId}`, content), // 댓글 작성
  deleteComment: commentId =>
    instance.delete(`http://13.125.45.147/api/comments/${commentId}`), // 댓글 삭제

  //다른 유저 페이지
  getMyPost: userId =>
    instance.get(`http://13.125.45.147/api/users/posts/${userId}`), // 다른 유저 페이지 리스트

  //프로필 수정페이지
  uploadMyImage: (userId, url) =>
    instanceMulti.post(`http://13.125.45.147/api/users/${userId}`, url), // 프로필 이미지업로드
  editMyProfile: (userId, myPageInfo) =>
    instance.put(`http://13.125.45.147/api/users/${userId}`, myPageInfo), // 마이페이지/내 정보 수정
};

export default apis;
