/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import React, { useEffect, useState } from "react";
import { VscError } from "react-icons/vsc";
import { IoCheckmarkCircleOutline, IoEye, IoEyeOff } from "react-icons/io5";
import InputItem from "./InputItem/InputItem";
import CheckDiv from "./InputItem/CheckDiv/CheckDiv";
import PasswordCheckDiv from "./InputItem/CheckDiv/PasswordCheckDiv";

function useSignInAndUpInput({ type, name, placeholder, value, valid }) {
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

  const handleOnblur = (e) => {
    if (isEmpty(value)) {
      setStatus(STATUS.idle);
      return;
    }
    if (valid.enabled) {
      setStatus(valid.regex.test(value) ? STATUS.success : STATUS.error);
    }
  };

  const isEmpty = (str) => {
    return !/^.+$/.test(str);
  };

  return {
    inputValue,
    element: (
      <SignInAndUpInput
        type={type}
        name={name}
        placeholder={placeholder}
        value={value}
        onChange={handleOnChange}
        onBlur={handleOnblur}
        status={status}
        message={valid.defaultMessage}
      ></SignInAndUpInput>
    ),
  };
}

function SignInAndUpInput({ type, name, placeholder, value, onChange, onBlur, status, message }) {
  return (
    <div css={s.inputItem}>
      <div css={s.inputContainer(inputStateName.status)}>
        <input
          type={type}
          name={name}
          placeholder={placeholder}
          value={value}
          onChange={onChange}
          onBlur={onBlur}
        />
        {CheckDiv}
      </div>
      <InputValidatedMessage status={status} message={message}></InputValidatedMessage>
    </div>
  );
}

function useInputValidatedMessage({ defaultMessage }) {
  const STATUS = {
    idle: "idle", // 초기 대기상태
    success: "success", // 성공
    error: "error", // 오류
  };
  const [status, setStatus] = useState(STATUS.idle);
  const [message, setMessage] = useState(defaultMessage || "");

  return {
    status,
    setStatus,
    message,
    setMessage,
    element: <InputValidatedMessage status={status} message={message}></InputValidatedMessage>,
  };
}

function InputValidatedMessage({ status, message }) {}

function PasswordInputHiddenButton() {
  const [isShow, setShow] = useState(false);

  const handleOnclick = () => {
    setShow((prev) => !prev);
  };
}

function Signup(props) {
  const [inputState, setInputState] = useState({
    username: {
      value: "",
      message: "아이디는 영문 또는 숫자를 포함한 2~20자 입니다.",
      regex: /^(?=.*[a-zA-Z])[A-Za-z0-9]{4,20}$/, //영문 대소문자, 숫자 로만 이루어진 2~20자
      status: "idle", // success(성공), error(오류), idle(초기 대기상태)
    },
    password: {
      value: "",
      message: "비밀번호는 영문 대소문자와 특수문자를 포함하는 8~20자 입니다.",
      regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/,
      //  - 최소 한 글자 이상의 문자, 한 글자 이상의 숫자, 하나 이상의 특수문자 포함
      //  - 허용 특수문자: !@#$%^&*()
      //  - 전체 길이 8~20자
      status: "idle",
    },
    checkPassword: {
      value: "",
      message: "비밀번호가 서로 맞지 않습니다.",
      regex: "",
      status: "idle",
    },
    fullName: {
      value: "",
      message: "한글 또는 영문 대소문자와 공백만 가능합니다.",
      regex: /^[가-힣a-zA-Z\s]{2,20}$/,
      //  - 한글 또는 영문 대소문자, 공백 포함 가능
      //  - 전체 길이 2~20자
      status: "idle",
    },
    email: {
      value: "",
      message: "이메일 형식이 아닙니다.",
      regex: /^[^\s@]+@[^\s@]+\.[^\s@]+$/, //  - 기본적인 이메일 형식 검증
      status: "idle",
    },
  });

  const [submitDisabled, setSubmitDisabled] = useState(true);

  const [inputs, setInputs] = useState([
    {
      type: "text",
      name: "username",
      palceholder: "사용자 이름",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[a-zA-Z])[A-Za-z0-9]{4,20}$/,
        message: "아이디는 영문 또는 숫자를 포함한 2~20자 입니다.",
      },
    },
    {
      type: "password",
      name: "password",
      palceholder: "비밀번호",
      value: "",
      valid: {
        enabled: true,
        regex: /^(?=.*[a-z])(?=.*[A-Z])(?=.*[!@#$%^&*()])[A-Za-z\d!@#$%^&*()]{8,20}$/,
        message: "비밀번호는 영문 대소문자와 특수문자를 포함하는 8~20자 입니다.",
      },
    },
    {
      type: "password",
      name: "checkPassword",
      palceholder: "비밀번호 확인",
      value: "",
      valid: {
        enabled: false,
        regex: null,
        message: "비밀번호가 서로 일치하지 않습니다.",
      },
    },
  ]);

  const inputItems = inputs.map((input) => useSignInAndUpInput(input));

  const usernameInputValidatedMessage = useInputValidatedMessage();

  const handleOnChange = (e) => {
    setInputState((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
      },
    }));
  };

  useEffect(() => {
    inputState.password.value;
  }, [inputState]);

  const handleOnBlur = (e) => {
    if (!/^.+$/.test(inputState[e.target.name].value)) {
      setInputState((prev) => ({
        ...prev,
        [e.target.name]: {
          ...prev[e.target.name],
          status: "idle",
        },
      }));
      return;
    }

    if (e.target.name === "checkPassword") {
      if (inputState.password.status === "success") {
        setInputState((prev) => ({
          ...prev,
          checkPassword: {
            ...prev["checkPassword"],
            status: prev["checkPassword"].value === prev["password"].value ? "success" : "error",
          },
        }));
      } else {
        setInputState((prev) => ({
          ...prev,
          checkPassword: {
            ...prev["checkPassword"],
            status: "idle",
          },
        }));
      }
      return;
    }

    setInputState((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        status: prev[e.target.name].regex.test(prev[e.target.name].value) ? "success" : "error",
      },
    }));
  };

  useEffect(() => {
    setSubmitDisabled(
      !!Object.values(inputState)
        .map((obj) => obj.status)
        .find((status) => status !== "success")
    );
  }, [inputState]);

  return (
    <div css={s.layout}>
      <div css={s.container}>
        <h1 css={s.title}>회원가입</h1>
        {inputItems.map((inputItem) => inputItem.element)}
        <InputItem
          name={"password"}
          status={inputState.password.status}
          message={inputState.password.message}
          placeholder={"비밀번호"}
          inputStateName={inputState.password}
          inputState={inputState}
          setInputState={setInputState}
        ></InputItem>

        <div css={s.inputItem}>
          <div css={s.inputContainer(inputState.checkPassword.status)}>
            <input
              type="text"
              name="checkPassword"
              placeholder="비밀번호 확인"
              value={inputState.checkPassword.value}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            <div>
              {inputState.checkPassword.status !== "idle" &&
                (inputState.checkPassword.status === "success" ? (
                  <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
                ) : (
                  <VscError></VscError>
                ))}
            </div>
          </div>
          {inputState.checkPassword.status === "error" && (
            <div css={s.messageContainer()}>{inputState.checkPassword.message}</div>
          )}
        </div>
        <div css={s.inputItem}>
          <div css={s.inputContainer(inputState.fullName.status)}>
            <input
              type="text"
              name="fullName"
              placeholder="풀네임"
              value={inputState.fullName.value}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            <div>
              {inputState.fullName.status !== "idle" &&
                (inputState.fullName.status === "success" ? (
                  <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
                ) : (
                  <VscError></VscError>
                ))}
            </div>
          </div>
          {inputState.fullName.status === "error" && (
            <div css={s.messageContainer()}>{inputState.fullName.message}</div>
          )}
        </div>
        <div css={s.inputItem}>
          <div css={s.inputContainer(inputState.email.status)}>
            <input
              type="text"
              name="email"
              placeholder="이메일"
              value={inputState.email.value}
              onChange={handleOnChange}
              onBlur={handleOnBlur}
            />
            <div>
              {inputState.email.status !== "idle" &&
                (inputState.email.status === "success" ? (
                  <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
                ) : (
                  <VscError></VscError>
                ))}
            </div>
          </div>
          {inputState.email.status === "error" && (
            <div css={s.messageContainer()}>{inputState.email.message}</div>
          )}
        </div>
      </div>
      <button css={s.submitButton} disabled={submitDisabled}>
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
