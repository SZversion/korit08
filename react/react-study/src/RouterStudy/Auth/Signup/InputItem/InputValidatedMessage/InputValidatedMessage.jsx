/** @jsxImportSource @emotion/react */
import * as s from "./styles";

import React from "react";

function InputValidatedMessage({ status, message }) {
  const SUCCESS = "success";
  const ERROR = "error";

  if (status === ERROR) {
    return <div css={s.messageContainer()}>{message}</div>;
  } else {
    return <></>;
  }
}

export default InputValidatedMessage;
