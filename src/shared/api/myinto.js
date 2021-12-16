import instance from '../instance';

export function editMyProfile(userId, myPageInfo) {
  return instance({
    method: 'PUT',
    url: `/api/users/${userId}`,
    data: myPageInfo,
  });
}

export function getMyPost(userId) {
  return instance({
    method: 'GET',
    url: `/api/users/${userId}/posts`,
  });
}
