import { useState } from "react";

function InputState3() {
  const studentInputValueEmpty = {
    name: "",
    age: "",
    address: "",
  };

  const [studentInputValue, setStudentInputValue] = useState(studentInputValueEmpty);

  const handleOnChange = (e) => {
    const { name, value } = e.target;
    setStudentInputValue((prev) => ({ ...prev, [name]: value })); // setter 의 매개변수는 원래의 상태값을 가지고 옴
  };

  return (
    <div>
      <h1>{studentInputValue.name}</h1>
      <h1>{studentInputValue.age}</h1>
      <h1>{studentInputValue.address}</h1>
      <input type="text" name="name" value={studentInputValue.name} onChange={handleOnChange} />
      <input type="text" name="age" value={studentInputValue.age} onChange={handleOnChange} />
      <input type="text" name="address" value={studentInputValue.address} onChange={handleOnChange} />
    </div>
  );
}

export default InputState3;
