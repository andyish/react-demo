import { combineReducers } from 'redux';

import images from './ducks/images.duck';

const createRootReducer = () => combineReducers({
  images
});

export default createRootReducer;