const initialState = {
  tasks: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADDING_TASK":
      return {
        ...state,
        tasks: [...state.tasks, action.payload],
      };

    case "DELETE_TASK":
      let filterTaskData = state.tasks.filter((d) => {
        return d.id !==action.payload;
      });

      return{
          ...state,
          tasks:[...filterTaskData]
      }


  }
  return state;
};

export default reducer;
