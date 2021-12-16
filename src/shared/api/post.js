import instance from '../instance';

//전체 게시글 조회 페이지
export function getPost() {
  return instance({
    method: 'GET',
    url: '/api/posts',
  });
}

// 게시글 작성
export function postWrite(postInfo) {
  return instance({
    method: 'GET',
    url: `/api/posts/write`,
    data: postInfo,
  });
}

// 게시글 상세페이지 조회
export function getDetailPost(postId) {
  return instance({
    method: 'POST',
    url: `/api/comments/${postId}`,
  });
}

// 좋아요 / 취소
export function postLikeCancel(postId) {
  return instance({
    method: 'DELETE',
    url: `/api/posts/details/like/${postId}`,
  });
}

// 게시글 삭제
export function deletePost(postId) {
  return instance({
    method: 'DELETE',
    url: `/api/posts/details/${postId}`,
  });
}
