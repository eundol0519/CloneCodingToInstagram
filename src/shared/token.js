// *** token.js ***

// 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
const getToken = () => {
  // 쿠키 값을 가져옵니다.
  const accessToken = document.cookie.split('=')[1];
  console.log(accessToken);
  return accessToken;
};

// 쿠키에 저장하는 함수
const setToken = (name, value, exp = 5) => {
  let date = new Date();
  // 날짜를 만들어줍니다.
  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  // 저장!
  document.cookie = `${name}=${value}; expires=${date.toUTCString()}`;
};

// 만료일을 예전으로 설정해 쿠키를 지웁니다.
const delToken = name => {
  let date = new Date('2020-01-01').toUTCString();

  console.log(date);

  document.cookie = name + '=; expires=' + date;
};
export { getToken, setToken, delToken };

// '; user_id=id; user_pwd=pwd'.split("; user_id=");
// (2) ['', 'id; user_pwd=pwd']

// ['', 'id; user_pwd=pwd'].pop()
// 'id; user_pwd=pwd'

// ['', 'id; user_pwd=pwd'].pop().split(";")
// (2) ['id', ' user_pwd=pwd']

// ['', 'id; user_pwd=pwd'].pop().split(";").shift()
// 'id'

///////////////////////////////////////////////////////////////

// '; user_id=id; user_pwd=pwd'.split("; user_pwd=");
// (2) ['; user_id=id', 'pwd']

// ['; user_id=id', 'pwd'].pop()
// 'pwd'

// ['; user_id=id', 'pwd'].pop().split(";")
// ['pwd']

// ['; user_id=id', 'pwd'].pop().split(";").shift()
// 'pwd'
/*
setCookie('token', res.data.token, 3)
localStorage.setItem('id', res.data.user.id)
localStorage.setItem('nickname', res.data.user.nickname)
dispatch(setUser({ email: email.email, nickname: res.data.user.nickname }))
*/
