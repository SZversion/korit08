import React from "react";
import { IoCheckmarkCircleOutline } from "react-icons/io5";
import { VscError } from "react-icons/vsc";

function CheckDiv({ inputStateName }) {
  return (
    <div>
      {inputStateName.status !== "idle" &&
        (inputStateName.status === "success" ? (
          <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
        ) : (
          <VscError></VscError>
        ))}
    </div>
  );
}

export default CheckDiv;
