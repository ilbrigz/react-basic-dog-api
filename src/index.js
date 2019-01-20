import React from "react";
import ReactDOM from "react-dom";
import HomePage from "./components/HomePage";

import "./styles.css";

function App() {
  return <HomePage />;
}

const rootElement = document.getElementById("root");
ReactDOM.render(<App />, rootElement);
