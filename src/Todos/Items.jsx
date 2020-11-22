import React from "react";
import "./Todos.css";
import { setDeleteTodo } from "../store/actions/todo";
import { useSelector, useDispatch } from "react-redux";
const Items = React.memo((props) => {
  const tasks = useSelector((state) => state.todos.tasks);
  const dispatch = useDispatch();
  const itemsDeleteTaskHandler = (e) => {
    dispatch(setDeleteTodo(e.target.value));
  };

  let itemsElement = [];
  const active = false;
  tasks.map((d) => {
    return itemsElement.push(
      <div key={d.id}>
        <input
          className={active ? "active" : null}
          readOnly
          value={d.taskName}
          key={d.id}
          id={d.id}
        />
        <button value={d.id} onClick={itemsDeleteTaskHandler}>
          Delete
        </button>
      </div>
    );
  });

  return <div style={{ marginTop: "1em" }}>{itemsElement}</div>;
});

export default Items;
