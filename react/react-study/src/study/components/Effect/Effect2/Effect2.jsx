/** @jsxImportSource @emotion/react */
import { css } from "@emotion/react";
import React, { useState } from "react";

const aa = (p1, p2) => css`
  display: flex;
  box-sizing: border-box;
  border: 3px solid ${p1 ? "purple" : "green"};
  width: 200px;
  height: 200px;
  background-color: ${p2 ? "red" : "yellow"};
`;

function Effect2(props) {
  const [flag, setFlag] = useState(false);

  const handleOnclick = (e) => {
    setFlag((prev) => !prev);
  };

  return (
    <div>
      <div css={aa(flag, !flag)}></div>
      <button onClick={handleOnclick}>색 변경</button>
    </div>
  );
}

export default Effect2;
