import BrowserRouter from 'react-router-dom/BrowserRouter';
import React from 'react';
import { hydrate } from 'react-dom';
import { Provider } from 'react-redux';
import { serviceWorker } from '@core/lib-react/server';
import { MuiThemeProvider, createMuiTheme } from '@material-ui/core/styles';


import configureStore from '../shared/store/configureStore';
import App from '../shared/App';

const pkg = require('../../package.json');

/* eslint-disable no-underscore-dangle */
const preloadedState = window.__PRELOADED_STATE__;
delete window.__PRELOADED_STATE__;
/* eslint-enable no-underscore-dangle */

const store = configureStore(preloadedState);
const theme = createMuiTheme({});

hydrate(
  <Provider store={store}>
    <BrowserRouter>
      <MuiThemeProvider theme={theme}>
        <App />
      </MuiThemeProvider>
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
