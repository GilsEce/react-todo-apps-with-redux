import React, { useState, useEffect } from "react";

const Items = (props) => {
  const { items, deleteTask } = props;

  const itemsDeleteTaskHandler = (e) => {
    deleteTask(e.target.value);
  };

  let itemsElement = [];
  items.map((d) => {
    itemsElement.push(
      <div key={d.id}>
        <input readOnly value={d.taskName} key={d.id} id={d.id} />
        <button value={d.id} onClick={itemsDeleteTaskHandler}>
          Delete
        </button>
      </div>
    );
  });

  return <div style={{ marginTop: "1em" }}>{itemsElement}</div>;
};

export default Items;
