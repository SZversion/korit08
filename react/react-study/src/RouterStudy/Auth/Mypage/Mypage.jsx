/** @jsxImportSource @emotion/react */
import { useQueryClient } from "@tanstack/react-query";
import * as s from "./styles";

import React, { useState } from "react";
import axios from "axios";

function Mypage(props) {
  const queryClient = useQueryClient();
  const principalUserQueryData = queryClient.getQueryData(["principalUserQuery"]).data.principal;

  const [userInfo, setUserInfo] = useState({
    username: principalUserQueryData.username,
    fullName: principalUserQueryData.fullName,
    email: principalUserQueryData.email,
  });

  const [passwordInfo, setPasswordInfo] = useState({
    oldPassword: "",
    newPassword: "",
    newPasswordCheck: "",
  });

  const handleUserInfoOnChange = (e) => {
    setUserInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handleUserInfoModificationOnClick = (e) => {
    if (!userInfo.fullName || !userInfo.email) {
      alert("성명 또는 이메일을 입력하세요.");
      return;
    }

    if (
      principalUserQueryData.fullName === userInfo.fullName &&
      principalUserQueryData.email === userInfo.email
    ) {
      alert("변경 사항이 없습니다.");
      return;
    }

    const accessToken = localStorage.getItem("AccessToken");
    axios.put(`http://localhost:8080/api/users/${principalUserQueryData.userId}`, userInfo, {
      headers: {
        Authorization: !accessToken ? null : `Bearer ${accessToken}`,
      },
    });
  };

  const handlePasswordInfoOnChange = (e) => {
    setPasswordInfo((prev) => ({
      ...prev,
      [e.target.name]: e.target.value,
    }));
  };

  const handlePasswordInfoModificationOnClick = async (e) => {
    if (!!JSON.stringify(Object.values(passwordInfo).find((value) => value === ""))) {
      alert("비밀번호를 입력하세요.");
      return;
    }

    const accessToken = localStorage.getItem("AccessToken");
    try {
      const response = await axios.put(
        `http://localhost:8080/api/users/${principalUserQueryData.userId}/password`,
        passwordInfo,
        {
          headers: {
            Authorization: !accessToken ? null : `Bearer ${accessToken}`,
          },
        }
      );
      console.log(response);
    } catch (error) {
      console.error(error);
      console.log(error.response);
    }
  };

  return (
    <div>
      <div>
        <h2>사용자 정보 수정</h2>
        <div>
          <label htmlFor="">사용자 이름 </label>
          <input
            type="text"
            name="username"
            placeholder="사용자 이름"
            value={userInfo.username}
            onChange={handleUserInfoOnChange}
            disabled
          />
        </div>
        <div>
          <label htmlFor="">성명 </label>
          <input
            type="text"
            name="fullName"
            placeholder="성명"
            value={userInfo.fullName}
            onChange={handleUserInfoOnChange}
          />
        </div>
        <div>
          <label htmlFor="">이메일 </label>
          <input
            type="text"
            name="email"
            placeholder="이메일"
            value={userInfo.email}
            onChange={handleUserInfoOnChange}
          />
        </div>
        <button onClick={handleUserInfoModificationOnClick}>변경하기</button>
      </div>
      <div>
        <h2>비밀번호 변경</h2>
        <div>
          <input
            type="password"
            name="oldPassword"
            placeholder="기존 비밀번호"
            value={passwordInfo.oldPassword}
            onChange={handlePasswordInfoOnChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="newPassword"
            placeholder="새 비밀번호"
            value={passwordInfo.newPassword}
            onChange={handlePasswordInfoOnChange}
          />
        </div>
        <div>
          <input
            type="password"
            name="newPasswordCheck"
            placeholder="새 비밀번호 확인"
            value={passwordInfo.newPasswordCheck}
            onChange={handlePasswordInfoOnChange}
          />
        </div>
        <button onClick={handlePasswordInfoModificationOnClick}>변경하기</button>
      </div>
    </div>
  );
}

export default Mypage;
