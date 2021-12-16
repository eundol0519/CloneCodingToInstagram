//프로필 수정페이지
import instance from '../instance';
import instanceMulti from '../instanceMulti';

//프로필 이미지업로드
export function uploadMyImage(userId, url) {
  return instanceMulti({
    method: 'POST',
    url: `/api/users/${userId}`,
    data: url,
  });
}

//마이페이지/내 정보 수정
export function editMyProfile(userId, myPageInfo) {
  return instance({
    method: 'PUT',
    url: `/api/users/${userId}`,
    data: myPageInfo,
  });
}
