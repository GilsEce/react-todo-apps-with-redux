import React from "react";
import logo from "./logo.svg";
import "./App.css";
import Todo from "./Todos/todo";

function App() {
  let todoResult = [];
  let tenTimesTodo = () => {
    let key = 1;
    for (let x = 0; x < 1; x++) {
      todoResult.push(<Todo name={"hello"} key={key++} />);
    }
  };

  tenTimesTodo();

  return <div className="App">{todoResult}</div>;
}

export default App;
