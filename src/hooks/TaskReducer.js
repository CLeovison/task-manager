// Change action names to accurately define purpose (e.g. ADD_TASK instead of just ADD)
export const taskReducer = (state, action) => {
  switch (action.type) {
      case 'ADD_TASK':
          return [...state, { id: Date.now(), title: action.payload, completed: false }];
      case 'TOGGLE_TASK_STATUS':
          return state.map(task => task.id === action.payload ? { ...task, completed: !task.completed } : task);
      case 'DELETE_TASK':
          return state.filter(task => task.id !== action.payload);
     case "EDIT_TASK":
            return state.map(task => task.id === action.payload.id ? { ...task, title: action.payload.title } : task)
      default:
          throw new Error(`Unhandled action type: ${action.type}`);
  }
};