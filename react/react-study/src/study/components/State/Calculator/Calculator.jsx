import { useState } from "react";

function Calculator() {
  const [displayNum, setDisplayNum] = useState("0");
  const [num, setNum] = useState("");
  const [isPlus, setIsPlus] = useState(true);
  const [result, setResult] = useState(0);

  const handleStackNumOnClick = (e) => {
    if (e.target.value !== 0 && displayNum === "0") {
      setDisplayNum(e.target.value);
      setNum(e.target.value);
    } else {
      setDisplayNum(displayNum + e.target.value);
      setNum(num + e.target.value);
    }
  };

  const changeBoolean = () => {
    setIsPlus((prev) => !prev);
  };

  const handleCalculateOnClick = (e) => {
    if (num !== "") {
      console.log(e.target.value);
      console.log(isPlus);
      let isPlusInput = JSON.parse(e.target.value);
      if (isPlusInput && isPlus) {
        setResult(result + parseInt(num));
        setDisplayNum(displayNum + " + ");
        setNum("");
        console.log("앞에거 더하고 + 추가");
      } else if (!isPlusInput && isPlus) {
        setResult(result + parseInt(num));
        setDisplayNum(displayNum + " - ");
        setNum("");
        changeBoolean();
        console.log("앞에거 더하고 - 추가");
      } else if (isPlusInput && !isPlus) {
        setResult(result - parseInt(num));
        setDisplayNum(displayNum + " + ");
        setNum("");
        changeBoolean();
        console.log("앞에거 빼고 + 추가");
      } else if (!isPlusInput && !isPlus) {
        setResult(result - parseInt(num));
        setDisplayNum(displayNum + " - ");
        setNum("");
        console.log("앞에거 빼고 - 추가");
      }
    }
  };

  const hadleResultOnClick = (e) => {
    if (isPlus) {
      setResult(result + parseInt(num));
    } else {
      setResult(result - parseInt(num));
    }
  };

  return (
    <>
      <h1>입력 : {displayNum}</h1>
      <h1>결과 : {result}</h1>
      <div>
        <button onClick={handleCalculateOnClick} value={true}>
          +
        </button>
        <button onClick={handleCalculateOnClick} value={false}>
          -
        </button>
        <button onClick={hadleResultOnClick}>=</button>
      </div>
      <div>
        <button onClick={handleStackNumOnClick} value={1}>
          1
        </button>
        <button onClick={handleStackNumOnClick} value={2}>
          2
        </button>
        <button onClick={handleStackNumOnClick} value={3}>
          3
        </button>
      </div>
      <div>
        <button onClick={handleStackNumOnClick} value={4}>
          4
        </button>
        <button onClick={handleStackNumOnClick} value={5}>
          5
        </button>
        <button onClick={handleStackNumOnClick} value={6}>
          6
        </button>
      </div>
      <div>
        <button onClick={handleStackNumOnClick} value={7}>
          7
        </button>
        <button onClick={handleStackNumOnClick} value={8}>
          8
        </button>
        <button onClick={handleStackNumOnClick} value={9}>
          9
        </button>
      </div>
      <div>
        <button onClick={handleStackNumOnClick} value={0}>
          0
        </button>
      </div>
    </>
  );
}

export default Calculator;
