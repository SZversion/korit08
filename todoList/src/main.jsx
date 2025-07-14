import { StrictMode, useEffect, useState } from "react";
import { createRoot } from "react-dom/client";
import Todo from "./Todo";

createRoot(document.getElementById("root")).render(<App></App>);

function App() {
  return <Todo />;
}
