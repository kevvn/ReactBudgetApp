import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { serviceWorker } from '@core/lib-react/server';

import configureStore from '../shared/store/configureStore';
import App from '../shared/App';

const pkg = require('../../package.json');

/* eslint-disable no-underscore-dangle */
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle */


const loadState = () => {
  try{
    const serializedState = localStorage.getItem('state');
    if(serializedState === null){
      return undefined;
    }
    return JSON.parse(serializedState);
  }catch (err){
    return undefined;
  }
}

const saveState = (state) => {
  try {
    const serializedState = JSON.stringify(state);
    localStorage.setItem('state',serializedState);
  } catch (err){
    console.error(err);
  }
}
const store = configureStore(loadState());

store.subscribe(() =>{
  saveState({
    budgetData: store.getState().budgetData
  })
})
hydrate(
  <Provider store={store}>
    <BrowserRouter>
        <App />
    </BrowserRouter>
  </Provider>,
  document.getElementById('root'),
);

if (module.hot) {
  module.hot.accept();
}

if (process.env.NODE_ENV === 'production' && pkg.config.pwa) {
  serviceWorker.register();
} else if (ServiceWorkerRegistration) {
  serviceWorker.unregister();
}
