import React, { useState } from "react";
import Items from "./items";

const Todo = () => {
  const [taskData, setTaskData] = useState([]);
  const [modelTask, setModelTask] = useState("");

  const addTaskHandler = () => {
    createNewTask(modelTask);
    setModelTask("");
  };

  String.prototype.capitalize = function () {
    return this.replace(/(^|\s)([a-z])/g, function (m, p1, p2) {
      return p1 + p2.toUpperCase();
    });
  };

  const createNewTask = (taskName) => {
    if (taskName.length > 0) {
      let date = new Date();
      let randomId = `${date.getHours()}${date.getMinutes()}${date.getSeconds()}${date.getUTCMilliseconds()}${date.getMonth()}${date.getUTCFullYear()}`;
      let format = {
        id: randomId,
        taskName: taskName.capitalize(),
        isDone: false,
      };
      taskData.push(format);
      setTaskData(taskData);
    } else {
      console.log("taskname is empty");
      return false;
    }
  };

  const deleteTaskHandler = (id) => {
    let filterTaskData = taskData.filter((d) => {
      return d.id !== id;
    });
    setTaskData(filterTaskData);
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

      <Items items={taskData} deleteTask={deleteTaskHandler} />
    </>
  );
};

export default Todo;
