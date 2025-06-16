import React, { useState } from "react";
import { IoCheckmarkCircleOutline, IoEye, IoEyeOff } from "react-icons/io5";
import { VscError } from "react-icons/vsc";

function PasswordCheckDiv({ inputStateName }) {
  const [showPassword, setShowPassword] = useState(false);

  console.log(showPassword);
  return (
    <>
      <p onClick={() => setShowPassword((prev) => !prev)}>{showPassword ? <IoEyeOff></IoEyeOff> : <IoEye></IoEye>}</p>
      {inputStateName.status !== "idle" &&
        (inputStateName.status === "success" ? (
          <div>
            <IoCheckmarkCircleOutline></IoCheckmarkCircleOutline>
          </div>
        ) : (
          <div>
            <VscError></VscError>
          </div>
        ))}
    </>
  );
}

export default PasswordCheckDiv;
