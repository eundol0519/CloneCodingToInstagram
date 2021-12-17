import instance from '../instance';
import instanceMulti from '../instanceMulti';

//전체 게시글 조회 페이지
export function getPostList() {
  return instance({
    method: 'GET',
    url: '/api/posts',
  });
}

// 게시물 이미지 업로드
export function uploadPostImageOn(img) {
  return instanceMulti({
    method: 'POST',
    url: `/api/posts/images`,
    data: img,
  });
}

// 게시글 작성
export function postWriteOn(postInfo) {
  return instance({
    method: 'POST',
    url: `/api/posts`,
    data: postInfo,
  });
}

// 게시글 상세페이지 조회
export function getDetailPostList(postId) {
  return instance({
    method: 'GET',
    url: `/api/posts/${postId}`,
  });
}

// 좋아요 / 취소
export function postLikeCancel(postId) {
  return instance({
    method: 'POST',
    url: `/api/posts/${postId}/like`,
  });
}

// 게시글 삭제
export function deletePostList(postId) {
  return instance({
    method: 'DELETE',
    url: `/api/posts/${postId}`,
  });
}

//유저게시물 페이지
export function getMyPostList(userId) {
  return instance({
    method: 'GET',
    url: `/api/users/posts/${userId}`,
  });
}
