import React from "react";
import RootLayout from "../RootLayout/RootLayout";
import { Route, Routes } from "react-router-dom";
import Home from "../Home/Home";
import AuthRouter from "./AuthRouter";
import UnAuthRouter from "./UnAuthRouter";
import NotFound from "../NotFound/NotFound";
import RootHeader from "../RootHeader/RootHeader";

function MainRouter(props) {
  return (
    <RootLayout>
      <RootHeader></RootHeader>
      <Routes>
        {/* Routes 내부는 조건문으로 실행됨 위에서 먼저 걸리는게 있으면 밑에는 실행 안됨 */}
        <Route path="" element={<Home></Home>}></Route>
        <Route path="/auth/*" element={<UnAuthRouter></UnAuthRouter>}></Route>
        <Route path="/users/*" element={<AuthRouter></AuthRouter>}></Route>
        <Route path="*" element={<NotFound></NotFound>}></Route>
      </Routes>
    </RootLayout>
  );
}

export default MainRouter;
