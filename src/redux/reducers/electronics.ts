const electronicsInitialState = {
  items: [],
  isLoaded: false
};

export type Action = {
  type: string,
  payload?: any
};

const electronics = (state = electronicsInitialState, action: Action) => {
  switch (action.type) {
    case 'SET_ELECTRONICS': {
      return {
        ...state,
        items: action.payload,
        isLoaded: true
      };
    }
    default: return state;
  }
};

export default electronics;