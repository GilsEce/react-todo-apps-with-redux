import React, { useState } from "react";
import { setAddTodo } from "../store/actions/todo";
import { useDispatch } from "react-redux";
import "./Todos.css";
import Items from "./Items";

const Todo = React.memo((props) => {
  const dispatch = useDispatch();
  const [modelTask, setModelTask] = useState("");
  const addTaskHandler = () => {
    createNewTask(modelTask);
    setModelTask("");
  };

  const capitalize = (param) => {
    let array_param = param.split(" ");
    let result_array = [];
    array_param.map((p) => {
      return (result_array = [
        ...result_array,
        p.replace(/^./, p[0].toUpperCase()),
      ]);
    });

    return result_array.join(" ");
  };

  const createNewTask = (taskName) => {
    if (taskName.length > 0) {
      let date = new Date();
      let randomId = `${date.getHours()}${date.getDate()}${date.getMinutes()}${date.getSeconds()}${date.getUTCMilliseconds()}${
        date.getMonth() + 1
      }${date.getUTCFullYear()}`;
      let format = {
        id: randomId,
        taskName: capitalize(taskName),
        isDone: false,
      };

      dispatch(setAddTodo(format));
    } else {
      return false;
    }
  };

  return (
    <>
      <h1>Todo Apps</h1>

      <input
        value={modelTask}
        onChange={(e) => {
          setModelTask(e.target.value);
        }}
        placeholder="Input Task Here"
      />
      <button onClick={addTaskHandler}>Add</button>
      <Items />
    </>
  );
});

export default Todo;
