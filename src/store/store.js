
import { applyMiddleware, compose, createStore } from 'redux'
import createRootReducer from './reducers'
import { initialAppState } from './app.state';
import thunk from 'redux-thunk';

export default function configureStore(preloadedState) {
  const store = createStore(
    createRootReducer(),
    preloadedState,
    compose(
      applyMiddleware(
        thunk,
      ),
    ),
  )

  return store;
}

export const store = configureStore(initialAppState);
