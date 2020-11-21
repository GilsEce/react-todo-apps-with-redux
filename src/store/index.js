import { createStore, combineReducers } from "redux";
import todosReducer from "./reducers/todo";

const rootReducer = combineReducers({
  todos: todosReducer,
});

export const store = createStore(rootReducer);
