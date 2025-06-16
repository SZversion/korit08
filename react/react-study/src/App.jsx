import { BrowserRouter } from "react-router-dom";
import "./App.css";
import Router1 from "./RouterStudy/Router1/Router1";
import Effect1 from "./study/components/Effect/Effect1/Effect1";
import Effect2 from "./study/components/Effect/Effect2/Effect2";
import Effect3 from "./study/components/Effect/Effect3/Effect3";
import Emotion from "./study/components/Emotion/Emotion";
import Emotion2 from "./study/components/Emotion/Emotion2";
import Calculator from "./study/components/State/Calculator/Calculator";
import InputState4 from "./study/components/State/InputState/InputState4/InputState4";
import DomRef from "./study/components/State/Ref/domRef/domRef";
import Index from "./ToDoList/pages/Index";
import Router2 from "./RouterStudy/Router2/Router2";
import Router3 from "./RouterStudy/Router3/Router3";
import Router4 from "./RouterStudy/Router4/Router4";

function App() {
  return (
    <BrowserRouter>
      {/* <HelloReact></HelloReact> */}
      {/* <HelloJsx /> */}
      {/* <HelloProps />? */}
      {/* <CountState></CountState> */}
      {/* <CountHeader></CountHeader> */}
      {/* <Calculator></Calculator> */}
      {/* <InputState1></InputState1> */}
      {/* <InputState2></InputState2> */}
      {/* <InputState3></InputState3> */}
      {/* <InputState4></InputState4> */}
      {/* <DomRef></DomRef> */}
      {/* <Effect1></Effect1> */}
      {/* <Effect2></Effect2> */}
      {/* <Emotion></Emotion> */}
      {/* <Emotion2></Emotion2> */}
      {/* <Effect3></Effect3> */}
      {/* <Index></Index> */}
      {/* <Router1></Router1> */}
      {/* <Router2></Router2> */}
      {/* <Router3></Router3> */}
      {/* <Router4></Router4> */}
      <MainRouter></MainRouter>
    </BrowserRouter>
  );
}
import MainRouter from "./RouterStudy/Auth/Routers/MainRouter";

export default App;
