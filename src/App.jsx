import React from "react";
import "./App.css";
import Todo from "./Todos/Todo";

const App = React.memo(() => {
  return (
    <div className="App">
      <Todo />
    </div>
  );
});

export default App;
