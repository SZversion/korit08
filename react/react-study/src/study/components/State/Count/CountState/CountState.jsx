import { useState } from "react";
import CountHeader from "../CountHeader/CountHeader";
import CountButton from "../CountButton/CountButton";

function CountState() {
  const [count, setCount] = useState(0);
  console.log("Count Rendering");

  const handleOnClick = (e) => {
    /*
        useState는 0번 index가 값, 1번 index로 함수를 가진 배열을 리턴해주는 함수
        Class useState<E>() {
            private E value;
            private function(); 
        } 대충 이런 식
    */
    setCount(count + parseInt(e.target.value));
  };

  return (
    <div>
      <CountHeader count={count}></CountHeader>
      <CountButton text={"+1"} value={1} onClick={handleOnClick}></CountButton>
      <CountButton text={"-1"} value={-1} onClick={handleOnClick}></CountButton>
    </div>
  );
}

export default CountState;
