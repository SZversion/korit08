/** @jsxImportSource @emotion/react */
import * as s from "./styles";
import React, { useState } from "react";

function Effect3(props) {
  const selectBox = [
    {
      boxId: 1,
      boxPosition: 0,
    },
    {
      boxId: 2,
      boxPosition: 0,
    },
    {
      boxId: 3,
      boxPosition: 0,
    },
    {
      boxId: 4,
      boxPosition: 0,
    },
  ];
  const [box, setBox] = useState(selectBox);
  const handleOnClick = (e) => {};

  const moveBox = (boxId) => {
    setBox(box[boxId].boxPosition + 100);
  };

  return (
    <>
      <div css={s.container}>
        <div css={s.box1(box1)}>1</div>
        <div css={s.box2}>2</div>
        <div css={s.box3}>3</div>
        <div css={s.box4}>4</div>
      </div>
      <button css={s.button} onClick={handleOnClick}>
        이동
      </button>
    </>
  );
}

export default Effect3;
