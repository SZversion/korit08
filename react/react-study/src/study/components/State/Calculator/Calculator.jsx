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
  const handlePlusOnClick = (e) => {
    if (num !== "") {
      setResult(result + parseInt(num));
      setDisplayNum(displayNum + " + ");
      setNum("");
      setIsPlus(true);
    }
  };

  const handleCalculateOnClick = (e) => {
    if (num !== "") {
      if (e.target.value && setIsPlus) {
        setResult(result + parseInt(num));
        setDisplayNum(displayNum + " + ");
        setNum("");
        setIsPlus(false);
      } else {
        setResult(result - parseInt(num));
        setDisplayNum(displayNum + " - ");
        setNum("");
        setIsPlus(true);
      }
    }
  };

  const handleMinusOnClick = (e) => {
    if (num !== "") {
      setResult(result - parseInt(num));
      setDisplayNum(displayNum + " - ");
      setNum("");
      setIsPlus(false);
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
        <button onClick={handlePlusOnClick} value={true}>
          +
        </button>
        <button onClick={handleMinusOnClick} value={false}>
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
