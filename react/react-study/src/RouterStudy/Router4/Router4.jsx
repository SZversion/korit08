import React, { useEffect, useState } from "react";
import { Route, Routes, useParams, useSearchParams } from "react-router-dom";

/** PathParam */
function Component1() {
  const { name } = useParams(); // :name 으로 받은 값을 받을수 있음
  console.log(name);
  return <></>;
}

/** SearchParam */
function Component2() {
  const [searchParam, setSearchParam] = useSearchParams();
  const [inputKey, setInputKey] = useState("");
  const [inputValue, setInputValue] = useState("");

  useEffect(() => {
    let searchParamObj = {};
    const entries = searchParam.entries();
    console.log(entries);
    while (true) {
      const next = entries.next();
      if (next.done) {
        break;
      }

      const [key, value] = next.value;
      searchParamObj = {
        ...searchParamObj,
        [key]: value,
      };
      console.log(next.value);
    }
    console.log("get :", searchParam.get(inputKey));
    console.log("현재 매개변수 :", searchParam);
  }, [searchParam.size]);

  const handleOnClick = (e) => {
    setSearchParam((prev) => {
      console.log("이전 매개변수 :", prev);
      prev.set("address", "busan");
      return prev;
    });
  };

  const handleInputOnClick = (e) => {
    setSearchParam((prev) => {
      prev.set(inputKey, inputValue);
      console.log("prev :", prev);
      return prev;
    });
  };

  const handleOnChange = (e) => {
    if (e.target.name === "inputKey") {
      setInputKey(e.target.value);
    } else if (e.target.name === "inputValue") {
      setInputValue(e.target.value);
    }
    console.log("getAll :", searchParam.getAll);
  };

  return (
    <div>
      <input placeholder="key" name="inputKey" onChange={handleOnChange}></input>
      <input placeholder="value" name="inputValue" onChange={handleOnChange}></input>
      <button onClick={handleInputOnClick}>값 추가</button>
      <button onClick={handleOnClick}>주소 추가</button>
    </div>
  );
}

function Router4(props) {
  return (
    <div>
      <Routes>
        {/* name 을 key, 입력값을 value로 받겠다 */}
        <Route path="/param1/:name" element={<Component1 />}></Route>
        <Route path="/param2" element={<Component2 />}></Route>
      </Routes>
    </div>
  );
}

export default Router4;
