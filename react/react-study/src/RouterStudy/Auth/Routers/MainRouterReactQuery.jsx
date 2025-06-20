import React, { useEffect, useState } from "react";
import RootLayout from "../RootLayout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import AuthRouter from "./AuthRouter";
import UnAuthRouter from "./UnAuthRouter";
import NotFound from "../NotFound/NotFound";
import RootHeader from "../RootHeader/RootHeader";
import axios from "axios";
import { useGlobalStateStore, useRefreshStore } from "../stores/storeStudy";
import { useQuery } from "@tanstack/react-query";

/**
 * 전역 상태 관리
 * 1. 클라이언트 전역 상태 (Zustand 사용 recoil -> react 19에서 지원 X)
 * 2. 서버 전역 상태 (ReactQuery)
 */

function MainRouterReactQuery(props) {
  const principalUserQuery = useQuery({
    queryKey: ["principalUserQuery"],
    queryFn: async () => {
      const accessToken = localStorage.getItem("AccessToken");
      return await axios.get("http://localhost:8080/api/users/principal", {
        headers: {
          Authorization: !accessToken ? null : `Bearer ${accessToken}`, //  get 요청에 header로 이거 보낸다
        },
      });
    },
  });

  console.log("is :", principalUserQuery.isLoading);
  console.log("data :", principalUserQuery.data);

  return (
    <>
      {!principalUserQuery.isLoading && (
        <RootLayout>
          <RootHeader></RootHeader>
          <Routes>
            {/* Routes 내부는 조건문으로 실행됨 위에서 먼저 걸리는게 있으면 밑에는 실행 안됨 */}
            <Route path="" element={<Home></Home>}></Route>
            <Route path="/auth/*" element={<AuthRouter></AuthRouter>}></Route>
            <Route path="/users/*" element={<UnAuthRouter></UnAuthRouter>}></Route>
            <Route path="*" element={<NotFound></NotFound>}></Route>
          </Routes>
        </RootLayout>
      )}
    </>
  );
}

export default MainRouterReactQuery;
