import React, { useState, useEffect } from "react";
import { connect } from 'react-redux';
const Items = (props) => {
  console.log(props);
  const { tasks} = props;
  const itemsDeleteTaskHandler = (e) => {
    props.onDeleteTask(e.target.value);
  };

  let itemsElement = [];
  tasks.map((d) => {
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

const mapStateToProps=state=>{
  return {
    tasks:state.tasks
  }
}


const mapDispatchToProps=dispatch=>{
  return {
    onDeleteTask:(id)=>dispatch({type:'DELETE_TASK',payload:id})
  }
}

export default connect(mapStateToProps,mapDispatchToProps)(Items);
