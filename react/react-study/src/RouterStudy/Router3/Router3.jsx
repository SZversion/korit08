import React, { useEffect } from "react";
import { Link, Route, Routes, useLocation, useNavigate } from "react-router-dom";

/*
    경로(path) 관리
    이동기록(history) 관리
*/

function Router3(props) {
  const location = useLocation();
  const nav = useNavigate();

  useEffect(() => {
    console.log("경로 이동 함!");
    console.log(location.pathname); // 현재 페이지의 경로를 리턴해줌
    if (location.pathname === "/location/2") {
      nav("/location/3", {
        state: {
          name: "qwer",
          age: 12,
        },
      });
    }
  }, [location.pathname]);

  useEffect(() => {
    console.log("쿼리(서치) 파람 변경!!");
    console.log(location.search); // 현재 페이지에 입력되는 변수(?뒤의 값) 을 반환함
  }, [location.search]);

  useEffect(() => {
    console.log(location.state);
  }, [location.state]);

  const handleBackOnClick = (e) => {
    nav(-1);
  };

  return (
    <div>
      <Link to={"/location/1"}>location1</Link>
      <Link to={"/location/2"}>location2</Link>
      <Link to={"/location/3"}>location3-1</Link>
      <Link to={"/location/3?name=qwer"}>location3-2</Link>
      <Link to={"/location/3?name=asdf"}>location3-3</Link>
      <button onClick={handleBackOnClick}>뒤로가기</button>
      <Routes>
        <Route path="/location/1" element={<h1>Location1</h1>}></Route>
        <Route path="/location/2" element={<h1>Location2</h1>}></Route>
        <Route path="/location/3" element={<h1>Location3</h1>}></Route>
      </Routes>
    </div>
  );
}

export default Router3;
