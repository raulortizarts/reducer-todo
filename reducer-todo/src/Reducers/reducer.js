export const initialState = [
    {
        item: 'Learn about reducers',
        completed: false,
        id: 3892987589
      }
]

export function reducer(state, action) {

    switch (action.type) {
      case "ADD_TODO":
        return state.concat({
              todo: action.payload,
              completed: false,
              id: Date.now()
                   
          });
          case "TOGGLE_COMPLETE":
            return state.map(todo => {
              if(todo.id === action.payload) {
                return {...todo, completed: !todo.completed};
              }else {
                return todo;
              }
            });
            case "CLEAR_COMPLETED":
              return state.filter(todo => !todo.completed)
  
      default:
        return state;
    }
  }