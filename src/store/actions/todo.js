import { TODO_ADDING_TASK, TODO_DELETE_TASK } from "../types";

export const setAddTodo = (payload) => ({ type: TODO_ADDING_TASK, payload });
export const setDeleteTodo = (payload) => ({ type: TODO_DELETE_TASK, payload });
