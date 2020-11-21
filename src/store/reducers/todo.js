import { TODO_ADDING_TASK,TODO_DELETE_TASK } from "../types";

const initialState = {
  tasks: [],
};

const todoReducer = (state = initialState, action) => {
  switch (action.type) {
    case TODO_ADDING_TASK:
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case TODO_DELETE_TASK:
      let filterTaskData = state.tasks.filter((d) => {
        return d.id !== action.payload;
      });

      return {
        ...state,
        tasks: [...filterTaskData],
      };
    default:
      return state;
  }
};

export default todoReducer;
