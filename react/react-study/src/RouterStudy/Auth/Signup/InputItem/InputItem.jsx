/** @jsxImportSource @emotion/react */
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import * as s from "./styles";

import React, { useState } from "react";
import InputValidatedMessage from "./InputValidatedMessage/InputValidatedMessage";
import PasswordCheckDiv from "./CheckDiv/PasswordCheckDiv";
import CheckDiv from "./CheckDiv/CheckDiv";

function InputItem({ name, status, message, placeholder, inputStateName, inputState, setInputState }) {
  const handleOnChange = (e) => {
    setInputState((prev) => ({
      ...prev,
      [e.target.name]: {
        ...prev[e.target.name],
        value: e.target.value,
      },
    }));
  };
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

  return (
    <div css={s.inputItem}>
      <div css={s.inputContainer(inputStateName.status)}>
        <input
          type={name === "password" ? "password" : "text"}
          name={name}
          placeholder={placeholder}
          value={inputStateName.value}
          onChange={handleOnChange}
          onBlur={handleOnBlur}
        />
        {name === "password" ? (
          <PasswordCheckDiv inputStateName={inputStateName}></PasswordCheckDiv>
        ) : (
          <CheckDiv inputStateName={inputStateName}></CheckDiv>
        )}
      </div>
      <InputValidatedMessage status={status} message={message}></InputValidatedMessage>
    </div>
  );
}

export default InputItem;
<>
  {/* <div>
    {inputState.username.status !== "idle" && // status가 idle이 아닐때만 아래 실행
      (inputState.username.status === "success" ? (
        <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
      ) : (
        <VscError></VscError>
      ))}
  </div>
  <div css={s.inputItem}>
    <div css={s.inputContainer(inputState.username.status)}>
      <input
        type="text"
        name="username"
        placeholder="사용자 이름"
        value={inputState.username.value}
        onChange={handleOnChange}
        onBlur={handleOnBlur}
      />
      <div>
        {inputState.username.status !== "idle" && // status가 idle이 아닐때만 아래 실행
          (inputState.username.status === "success" ? (
            <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
          ) : (
            <VscError></VscError>
          ))}
      </div>
    </div>
    {inputState.username.status === "error" && <div css={s.messageContainer()}>{inputState.username.message}</div>}
  </div>; */}
</>;
