/** @jsxImportSource @emotion/react */
import axios from "axios";
import * as s from "./styles";

import React, { useEffect, useState } from "react";
import { MdOutlineCheckCircle } from "react-icons/md";
import { IoEye, IoEyeOff } from "react-icons/io5";
import { VscError } from "react-icons/vsc";
import { useNavigate } from "react-router-dom";

function useSignInAndUpInput({ id, type, name, placeholder, value, valid }) {
  const STATUS = {
    idle: "idle", // 초기 대기상태
    success: "success", // 성공
    error: "error", // 오류
  };
  const [inputValue, setInputValue] = useState(value);
  const [status, setStatus] = useState(STATUS.idle);

  const handleOnChange = (e) => {
    setInputValue(e.target.value);
  };

  const handleOnBlur = (e) => {
    if (isEmpty(e.target.value)) {
      setStatus(STATUS.idle);
      return;
    }

    if (valid.enabled) {
      setStatus(valid.regex.test(e.target.value) ? STATUS.success : STATUS.error);
      return;
    }

    setStatus(valid.callback() ? STATUS.success : STATUS.error);
  };

  const isEmpty = (str) => {
    return !/^.+$/.test(str);
  };

  return {
    name: name,
    value: inputValue,
    status: status,
    element: (
      <SignInAndUpInput
        key={id}
        type={type}
        name={name}
        placeholder={placeholder}
        value={inputValue}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
        status={status}
        message={valid.message}
      ></SignInAndUpInput>
    ),
  };
}

function SignInAndUpInput({ type, name, placeholder, value, onChange, onBlur, status, message }) {
  const { isShow, element: PasswordInputHiddenButton } = usePasswordInputHiddenButton();

  return (
    <div css={s.inputItem}>
      <div css={s.inputContainer(status)}>
        <input
          type={type === "password" ? (isShow ? "text" : "password") : type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {type === "password" && PasswordInputHiddenButton}
        {status !== "idle" &&
          (status === "success" ? (
            <div>
              <MdOutlineCheckCircle></MdOutlineCheckCircle>
            </div>
          ) : (
            <div>
              <VscError></VscError>
            </div>
          ))}
      </div>
      <InputValidatedMessage status={status} message={message}></InputValidatedMessage>
    </div>
  );
}

function usePasswordInputHiddenButton() {
  const [isShow, setShow] = useState(false);

  const handleOnClick = () => {
    setShow((prev) => !prev);
  };

  return {
    isShow,
    element: (
      <PasswordInputHiddenButton
        isShow={isShow}
        onClick={handleOnClick}
      ></PasswordInputHiddenButton>
    ),
  };
}

function PasswordInputHiddenButton({ isShow, onClick }) {
  return <p onClick={onClick}>{isShow ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}</p>;
}

function InputValidatedMessage({ status, message }) {
  const ERROR = "error";

  if (status === ERROR) {
    return <div css={s.messageContainer()}>{message}</div>;
  }

  return <></>;
}

function Signup(props) {
  const navigate = useNavigate();
  const [submitDisabled, setSubmitDisabled] = useState(true);
  const inputs = [
    {
      id: 1,
      type: "text",
      name: "username",
      placeholder: "사용자 이름",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[a-zA-Z])[A-Za-z0-9]{2,20}$/,
        message: "아이디는 영문 또는 숫자를 포함한 2~20자 입니다.",
      },
    },
    {
      id: 2,
      type: "password",
      name: "password",
      placeholder: "비밀번호",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/,
        message: "비밀번호는 영문 대소문자와 특수문자를 포함하는 8~20자 입니다.",
      },
    },
    {
      id: 3,
      type: "password",
      name: "checkPassword",
      placeholder: "비밀번호 확인",
      value: "",
      valid: {
        enabled: false,
        regex: null,
        callback: () => inputItems[1].inputValue === inputItems[2].inputValue,
        message: "비밀번호가 서로 일치하지 않습니다.",
      },
    },
    {
      id: 4,
      type: "text",
      name: "fullName",
      placeholder: "성명",
      value: "",
      valid: {
        enabled: true,
        regex: /^[가-힣a-zA-Z0-9\s]{2,20}$/,
        message: "한글 또는 영문 대소문자와 공백, 숫자만 가능합니다.",
      },
    },
    {
      id: 5,
      type: "email",
      name: "email",
      placeholder: "이메일",
      value: "",
      valid: {
        enabled: true,
        regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/,
        message: "이메일 형식이 아닙니다.",
      },
    },
  ];

  const inputItems = inputs.map((input) => useSignInAndUpInput(input));

  useEffect(() => {
    setSubmitDisabled(!!inputItems.find((inputItem) => inputItem.status !== "success"));
  }, [inputItems]);

  const handleRegisterOnClick = async () => {
    const url = "http://localhost:8080/api/users";

    let data = {}; // dto 와 형태(key값)가 같아야 함

    inputItems.forEach((inputItem) => {
      data = {
        ...data,
        [inputItem.name]: inputItem.value,
      };
    });

    try {
      const response = await axios.post(url, data);
      alert("사용자 등록 완료");

      navigate("/users/signin", {
        state: {
          username: response.data.username,
          password: "",
        },
      });
    } catch {
      alert("사용자 등록 실패");
    }
  };

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <h1 css={s.title}>회원가입</h1>
        {inputItems.map((inputItem) => inputItem.element)}
      </div>
      <button css={s.submitButton} disabled={submitDisabled} onClick={handleRegisterOnClick}>
        가입하기
      </button>
    </div>
  );
}

export default Signup;

/** gpt로 정규표현식 만들기
 * usename, password, checkpassword, fullname, email
 * javascript 정규 표현식을 각각 만들어주고 error 메세지도 만들어줘
 */
