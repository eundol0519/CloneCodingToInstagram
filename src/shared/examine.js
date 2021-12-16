export const isEmail = id => {
  const emailRegex =
    /^(([^<>()\[\].,;:\s@"]+(\.[^<>()\[\].,;:\s@"]+)*)|(".+"))@(([^<>()[\].,;:\s@"]+\.)+[^<>()[\].,;:\s@"]{2,})$/i;
  if (emailRegex.test(id) === true) {
    return { check: true, boo: true, comment: '이메일 형식입니다.' };
  } else {
    return { check: true, boo: false, comment: '이메일 형식이 아닙니다.' };
  }
};

export const isNameCheck = name => {
  if (name.length >= 2 && name.length <= 10) {
    return { check: true, boo: true, comment: '이름이 알맞습니다.' };
  } else {
    return {
      check: true,
      boo: false,
      comment: '이름은 2자이상 10자이하 입니다',
    };
  }
};

export const isNickNameCheck = nickname => {
  if (nickname.length >= 2 && nickname.length <= 10) {
    return { check: true, boo: true, comment: '닉네임이 알맞습니다.' };
  } else {
    return {
      check: true,
      boo: false,
      comment: '닉네임이 2자이상 10자이하 입니다',
    };
  }
};

export const isPwCheck = pw => {
  if (pw.length >= 4 && pw.length <= 12) {
    return { check: true, boo: true, comment: '비밀번호가 알맞습니다.' };
  } else {
    return {
      check: true,
      boo: false,
      comment: '비밀번호은 4자이상 12자이하 입니다 ',
    };
  }
};

export const isPhoneNumber = num => {
  if (num.length >= 9 && num.length <= 12) {
    return { check: true, boo: true, comment: '전화 번호가 알맞습니다.' };
  } else {
    return {
      check: true,
      boo: false,
      comment: '전화번호는 9자이상 12자이하 입니다 ',
    };
  }
};

export const isIntro = intro => {
  if (intro.length <= 200) {
    return { check: true, boo: true, comment: '소개문이 알맞습니다.' };
  } else {
    return {
      check: true,
      boo: false,
      comment: '소개문은 200자 이내 여야 합니다.',
    };
  }
};
