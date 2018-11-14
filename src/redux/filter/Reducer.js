const defaultState = {
    name: '',
    position: '',
    age: ''
  };

export const reducer = (state = defaultState, action) => {
    switch (action.type) {
        
      case "CHANGE_FILTER":
          return { ...state, ...action.payload};

      default:
          return state;
    }
  }