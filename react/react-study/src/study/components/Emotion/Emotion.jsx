/*
    Emotion (CSS in JS 라이브러리)
    주석으로 @jsxImportSource @emotion/react 추가해야 작동함
    css 객체 import -> css`` 문자열로 css 작성
    자동완성 안되니까 extension 으로 vscode-styled-components 설치
*/

/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React from "react";
import * as s from "./styles";

function Emotion(props) {
  return (
    <div>
      <div css={s.box1}></div>
      <div css={s.box2("gray")}></div>
    </div>
  );
}

export default Emotion;
