import "./App.css";
import HelloJsx from "./study/components/HelloJsx/HelloJsx";
import HelloProps from "./study/components/HelloProps/HelloProps";
import HelloReact from "./study/components/HelloReact";
import Calculator from "./study/components/State/Calculator/Calculator";
import CountHeader from "./study/components/State/CountHeader/CountHeader";
import CountState from "./study/components/State/CountState/CountState";
import InputState1 from "./study/components/State/InputState/InputState1";
import InputState2 from "./study/components/State/InputState2/InputState2";
import InputState3 from "./study/components/State/InputState3/InputState3";

function App() {
  return (
    <div>
      {/* <HelloReact />
      <HelloJsx />
      <HelloProps /> */}
      {/* <CountState></CountState>
      <CountHeader></CountHeader> */}
      <Calculator></Calculator>
      {/* <InputState1></InputState1> */}
      {/* <InputState2></InputState2> */}
      {/* <InputState3></InputState3> */}
    </div>
  );
}

export default App;
