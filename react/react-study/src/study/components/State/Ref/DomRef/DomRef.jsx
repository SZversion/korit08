import React, { useEffect, useRef, useState } from "react";

function DomRef(props) {
  const [name, setName] = useState();
  const inputRef = useRef();

  /*
    마운트, 언마운트 관리 useEffect
      useEffect -> 마운트(컴포넌트가 호출되어 return 값을 반환해서 화면을 랜더링 할 때) 될때 동작 할 부분을 정의하는 곳
      return -> 언마운트(컴포넌트가 화면에서 사라질 때) 될때 동작 할 부분을 정의하는 곳
      useEffect는 함수 와 배열을 매개변수로 받음 이때 배열에는 바라보는 값을 넣으면 그 값이 변할때만 호출됨
  */
  useEffect(() => {
    console.log("마운트(장착)");
    console.log(inputRef.current.value);
    return () => {
      console.log("언마운트(해제)");
    };
  }, [name]);
  console.log("렌더링");

  return (
    <div>
      <input type="text" ref={inputRef} value={"asdf"} />
    </div>
  );
}

export default DomRef;
