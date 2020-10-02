import { combineReducers } from 'redux';
// Reducers
import electronics from './electronics';
import filters from './filters';

export type RootState = ReturnType<typeof rootReducer>;

const rootReducer = combineReducers({
  electronics,
  filters
});

export default rootReducer;