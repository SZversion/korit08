import { css } from "@emotion/react";

export const inputItem = css`
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-bottom: 10px;
  width: 100%;
`;

export const inputContainer = (status) => css`
  display: flex;
  align-items: center;
  border: 1px solid #dbdbdb;
  border-radius: 8px;
  width: 100%;
  height: 35px;
  background-color: #fff;

  & > input {
    box-sizing: border-box;
    border: none;
    outline: none;
    border-radius: 8px;
    flex-grow: 1;
    height: 100%;
    padding: 0 10px;
  }

  & > div {
    display: flex;
    justify-content: center;
    align-items: center;
    width: 35px;
    height: 100%;

    &:nth-last-of-type(1) > * {
      font-size: 20px;
      color: ${status === "success" ? "#38ba00" : "#f10400"};
    }
  }

  & > p {
    display: flex;
    justify-content: center;
    align-items: center;
    padding: 0 8px;
    cursor: pointer;
  }
`;

export const messageContainer = () => css`
  display: flex;
  justify-content: start;
  box-sizing: border-box;
  padding: 0 5px;
  width: 100%;
  font-size: 12px;
  text-align: left;
  color: #f10400;
  cursor: default;
`;
