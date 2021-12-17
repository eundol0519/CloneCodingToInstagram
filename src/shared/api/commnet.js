import instance from "./instance";

// 댓글 조회
export function getComment(postId) {
  return instance({
    method: "GET",
    url: `/api/comments/${postId}`,
  });
}

// 댓글 작성
export function writeComment(postId, content) {
  return instance({
    method: "POST",
    url: `/api/comments/${postId}`,
    data: content,
  });
}

//댓글 삭제
export function deleteComment(commentId) {
  return instance({
    method: "DELETE",
    url: `/api/comments/${commentId}`,
  });
}
