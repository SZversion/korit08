/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import { css } from "@emotion/react";
import React from "react";

function Emotion2(props) {
  return (
    <div>
      <div css={s.box1}></div>
      <div css={s.box2("gray")}></div>
    </div>
  );
}

export default Emotion2;
