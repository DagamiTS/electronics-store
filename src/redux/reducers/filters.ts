import { Action } from './electronics';

const filtersInitialState = {
  category: null,
  sortBy: {
    name: 'rating',
    order: 'desc'
  },
};

export type SortBy = {
  name: string,
  order: string
};

const filters = (state = filtersInitialState, action: Action) => {
  switch (action.type) {
    case 'SET_CATEGORY': {
      return {
        ...state,
        category: action.payload,
      }
    }
    case 'SET_SORT_BY': {
      return {
        ...state,
        sortBy: action.payload
      }
    }
    default:
      return state;
  }
};

export default filters;