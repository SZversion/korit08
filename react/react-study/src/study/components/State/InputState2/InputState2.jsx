import { useState } from "react";

function InputState2() {
  const [inputValue, setInputValue] = useState({});

  const fx1 = () => {};
  const fx2 = fx1;

  const handleOnChange = () => {
    const name = e.target.name;
    const value = e.target.value;
    console.log(`name: ${name}, value: ${value}`);

    const newInputValue = {
      ...InputValue,
      [name]: value,
    };

    setInputValue(newInputValue);

    const addr = "address"; // address 으로 초기화
    const obj = {
      name: "name1",
      age: 21,
      ["address"]: "남구",
      [addr]: "my home", // my home 대입
    };
  };
  const fx3 = handleOnChange;

  return (
    <div>
      <div>
        <input type="text" name="t1" value={inputValue.t1} onChange={handleOnChange} />
        <input type="text" name="t2" value={inputValue.t2} onChange={handleOnChange} />
        <input type="text" name="t3" value={inputValue.t3} onChange={handleOnChange} />
      </div>
      <div>
        <input
          type="text"
          value={inputValue.t1}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <input
          type="text"
          value={inputValue.t2}
          onChange={(e) => {
            console.log(e);
          }}
        />
        <input
          type="text"
          value={inputValue.t3}
          onChange={(e) => {
            console.log(e);
          }}
        />
      </div>
    </div>
  );
}

export default InputState2;
