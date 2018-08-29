import { createStore } from 'redux';
import { getMiddleware } from '@core/lib-react/server';
import rootReducer from './rootReducer';

export default (preloadedState) => {
  const store = createStore(rootReducer, preloadedState, getMiddleware());

  if (module.hot) {
    // Enable Webpack hot module replacement for reducers
    module.hot.accept('./rootReducer', () => {
      store.replaceReducer(rootReducer);
    });
  }

  return store;
};
