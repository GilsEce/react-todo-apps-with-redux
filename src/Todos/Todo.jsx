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
    let array_param = param.trim().split(" ");
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
    <div className="todo-container">
      <div className="newtask-container">
        <h1 style={{ margin: "0", padding: "20px 0", color: "white",fontSize:'100px' }}>
          Todo Apps
        </h1>
        <input
          className="task-input"
          value={modelTask}
          onChange={(e) => {
            setModelTask(e.target.value);
          }}
          placeholder="Input Task Here"
        />
        <button className="btn-newtask" onClick={addTaskHandler}>
          Add
        </button>
        <Items />
      </div>
    </div>
  );
});

export default Todo;
