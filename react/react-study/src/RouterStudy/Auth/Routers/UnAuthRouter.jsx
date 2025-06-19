import React from "react";
import { Route, Routes } from "react-router-dom";
import Signin from "../Signin/Signin";
import Signup from "../Signup/Signup";
import NotFound from "../NotFound/NotFound";

function UnAuthRouter() {
  return (
    <Routes>
      <Route path="/signin" element={<Signin></Signin>}></Route>
      <Route path="/signup" element={<Signup></Signup>}></Route>
      <Route path="*" element={<NotFound></NotFound>}></Route>
    </Routes>
  );
}

export default UnAuthRouter;
