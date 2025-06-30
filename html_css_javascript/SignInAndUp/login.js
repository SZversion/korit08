const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const loginButton = document.querySelector(".login-button");

loginButton.onclick = (e) => {
  if (!!usernameInput.value && !!passwordInput.value) {
    if (usernameInput.value === localStorage.getItem("username")) {
      if (passwordInput.value === localStorage.getItem("password")) {
        alert("로그인 성공!");
        usernameInput.value = "";
        passwordInput.value = "";
        return;
      }
    }
    alert("로그인 실패");
  } else {
    ㅋ``;
    alert("아이디와 비밀번호를 입력해주세요");
  }
};
