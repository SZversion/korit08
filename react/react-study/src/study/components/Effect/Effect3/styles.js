import { css } from "@emotion/react";

export const container = css`
  position: relative;
  display: flex;
  justify-content: start;
  align-items: center;
  width: 400px;
  height: 100px;
`;

export const box1 = (input) => css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: red;
  font-size: 40px;
  left: ${input}px;
  transition: all 0.5s ease-in-out;
`;
export const box2 = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: blue;
  font-size: 40px;
`;
export const box3 = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: green;
  font-size: 40px;
`;
export const box4 = css`
  position: absolute;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100px;
  height: 100px;
  background-color: yellow;
  font-size: 40px;
`;

export const button = css`
  margin: 10px;
`;
