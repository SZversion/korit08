const usernameInput = document.querySelector(".username-input");
const passwordInput = document.querySelector(".password-input");
const registerButton = document.querySelector(".register-button");

registerButton.onclick = (e) => {
  if (!!usernameInput.value && !!passwordInput.value) {
    localStorage.setItem("username", usernameInput.value);
    localStorage.setItem("password", passwordInput.value);
    alert("회원가입 성공! 로그인 페이지로 이동합니다.");
    window.location.href = "./login.html";
  } else {
    alert("아이디와 비밀번호를 입력해주세요");
  }
};
