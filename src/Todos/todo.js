import React, { useState } from "react";
import { connect } from 'react-redux';
import Items from "./items";


const Todo = (props) => {
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
  
      props.onAddingTask(format);
    } else {
      //console.log("taskname is empty");
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
};


const mapStateToProps=state=>{
  return {
    tasks:state.tasks
  }
}

const mapDispatchToProps=dispatch=>{
  return {
    onAddingTask:(newTask)=>dispatch({type:'ADDING_TASK',payload:newTask})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Todo);
