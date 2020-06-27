/** @format */

import React from "react";
// import logo from './logo.svg';
import "./App.css";
import dictionary from "./dictionary";
import Core from "./core";

// const generator = new Core(dictionary, getNode, getSubGraph);

function App() {
  return (
    <div className="App">
      <Core dictionary={dictionary} />
    </div>
  );
}

export default App;
