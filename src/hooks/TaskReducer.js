export function taskReducer(state, action) {
  switch (action.type) {
    case "ADD":
     
      return [
        ...state,
        { id: Date.now(), title: action.payload, completed: false },
      ];
    case "TOGGLE":
      return state.map(task => task.id === action.payload ? {...task, completed: !task.completed}: task)
    case "Delete":
      return state;
    default: 
      throw new Error("This Shit Has Some Error");
  }
}
