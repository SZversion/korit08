import React from "react";
import { Link, Route, Routes } from "react-router-dom";

/*
    하위라우트(서브라우트)

*/

function Page1() {
  return (
    <>
      <div>
        <h1>page1</h1>
        <Routes>
          <Route path="/page1" element={<h1>페이지1</h1>}></Route>
          <Route path="/page2" element={<Page2></Page2>}></Route>
        </Routes>
      </div>
    </>
  );
}

function Page2() {
  return (
    <>
      <div>
        <h1>page2</h1>
      </div>
    </>
  );
}

function Router2(props) {
  return (
    <div>
      <header>
        <Link to={"pagestudy/page1"}>page1</Link>
        <Link to={"pagestudy/page2"}>page2</Link>
        <Link to={"pagestudy2/name1"}>name1</Link>
        <Link to={"pagestudy2/name2"}>name2</Link>
      </header>
      <h1>Router2</h1>
      <Routes>
        <Route
          path="/pagestudy/*"
          element={
            <>
              <h1>sutdy1</h1>
              <Page1></Page1>
            </>
          }
        ></Route>
        <Route
          path="/pagestudy2/*"
          element={
            <>
              <h1>sutdy2</h1>
              <Routes>
                <Route path="/name1" element={<h1>name1</h1>}></Route>
                <Route path="/name2" element={<h1>name2</h1>}></Route>
              </Routes>
            </>
          }
        ></Route>
      </Routes>
    </div>
  );
}

export default Router2;
