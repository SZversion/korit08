/** @jsxImportSource @emotion/react */
import { Link } from "react-router-dom";
import * as s from "./styles";

import React, { useState } from "react";
import { LuLogOut, LuUser, LuUserPlus } from "react-icons/lu";
import { useQueryClient } from "@tanstack/react-query";
import { CiLogin } from "react-icons/ci";

function RootHeader() {
  const queryClient = useQueryClient();
  const authentication = queryClient.getQueryData(["principalUserQuery"]).data;
  const principal = authentication.principal;

  return (
    <header css={s.layout}>
      <h1>
        <Link to={"/"}>사이트 로고</Link>
      </h1>
      {principal !== "anonymousUser" ? (
        <ul>
          <li>
            <Link to={"/auth/mypage"}>
              <LuUser></LuUser>
            </Link>
          </li>
          <li>
            <Link to={"/auth/logout"}>
              <LuLogOut></LuLogOut>
            </Link>
          </li>
        </ul>
      ) : (
        <ul>
          <li>
            <Link to={"/users/signin"}>
              <CiLogin></CiLogin>
            </Link>
          </li>
          <li>
            <Link to={"/users/signup"}>
              <LuUserPlus></LuUserPlus>
            </Link>
          </li>
        </ul>
      )}
    </header>
  );
}

export default RootHeader;
