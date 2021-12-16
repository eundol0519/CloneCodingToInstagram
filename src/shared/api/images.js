import instanceMulti from '../instanceMulti';
//프로필 수정페이지

export function uploadMyImage(userId, url) {
  return instanceMulti({
    method: 'POST',
    url: `/api/users/${userId}`,
    data: url,
  });
}

export function uploadPostImage(img) {
  return instanceMulti({
    method: 'POST',
    url: `/api/posts/imageUpload`,
    data: img,
  });
}
