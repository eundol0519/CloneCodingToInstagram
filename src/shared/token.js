// *** token.js ***

// 키값 기준으로 쿠키에 저장된 값을 가져오는 함수
const getToken = name => {
  // 쿠키 값을 가져옵니다.
  let value = '; ' + document.cookie;

  let parts = value.split('; ' + name + '=');
  if (parts.length === 2) {
    return parts.pop().split(';').shift();
  }
};

// 쿠키에 저장하는 함수
const setToken = (name, value, exp = 5) => {
  let date = new Date();
  // 날짜를 만들어줍니다.

  date.setTime(date.getTime() + exp * 24 * 60 * 60 * 1000);
  // 저장!
  document.cookie = `${name}=${value}; expires=${date.toUTCString()};path=/`;
};

// 만료일을 예전으로 설정해 쿠키를 지웁니다.
const delToken = name => {
  let date = new Date('2020-01-01').toUTCString();

  console.log(date);

  document.cookie = name + '=; expires=' + date;
};
export { getToken, setToken, delToken };
