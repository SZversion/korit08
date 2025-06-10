import { useState } from "react";

function InputState1() {
  const [inputValue1, setInputValue1] = useState("");
  const [h1Text1, setH1Text1] = useState("");
  const [inputValue2, setInputValue2] = useState("");
  const [h1Text2, setH1Text2] = useState("");

  console.log("Rendering");

  const handleOnChange = (e) => {
    setInputValue1(e.target.value);
  };

  const handleOnChange2 = (e) => {
    setInputValue2(e.target.value);
  };

  const handleOnClick = (e) => {
    setH1Text1(inputValue1);
    setH1Text2(inputValue2);
  };

  return (
    <div>
      <h1>{h1Text1}</h1>
      <h1>{h1Text2}</h1>
      <input type="text" value={inputValue1} onChange={handleOnChange} />
      <input type="text" value={inputValue2} onChange={handleOnChange2} />
      <button onClick={handleOnClick}>확인</button>
    </div>
  );
}

export default InputState1;
