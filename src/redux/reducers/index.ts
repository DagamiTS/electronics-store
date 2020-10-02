import { combineReducers } from 'redux';
// Reducers
import electronics from './electronics';
import filters from './filters';
import cart from './cart';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  electronics,
  filters,
  cart
});

export default rootReducer;