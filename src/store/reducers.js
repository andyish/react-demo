import { combineReducers } from 'redux';

import recipees from './ducks/recipees.duck';

const createRootReducer = () => combineReducers({
  recipees
});

export default createRootReducer;