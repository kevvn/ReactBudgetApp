import React from 'react';
import Express from 'express';
import { StaticRouter } from 'react-router-dom';
import { renderToString } from 'react-dom/server';
import { Provider } from 'react-redux';
import { template } from '@core/lib-react/server';
import App from '../shared/App';
import configureStore from '../shared/store/configureStore';
import { MockRouting } from '../../mocks/index';
var compression = require('compression')

/* assets manifest gets generated at build time */
// eslint-disable-next-line import/no-dynamic-require
const assets = require(process.env.RAZZLE_ASSETS_MANIFEST);

const context = {};
const MarsServer = new Express();
MarsServer.disable('x-powered-by');

// ************************************
// *** Add your express routes here ***

// ************************************

// Serve API responses from mock service, if enabled
if (process.env.NODE_ENV === 'development' && process.env.RAZZLE_MOCK_SERVICE_ENABLED === 'true') {
  MarsServer.use('/api/**', MockRouting);
}

// Handle all UI routes through React-router for single-page application
const store = configureStore({tabSelected: 0});
MarsServer.use(compression())
MarsServer.get('/static/*', (req, res) => {
  const path = `public/static/${req.params[0]}`;
  if (req.params[0].indexOf('.css') > 0) {
    res.type('text/css');
  } else {
    res.type('application/javascript');
  }
  res.sendFile(path, {
    root: './build',
  });
}).get('/*', (req, res) => {
  if (req.params[0].indexOf('.js') > 0) {
    const path = `public/${req.params[0]}`;
    res.type('application/javascript');
    res.sendFile(path, {
      root: './build',
    });
  } else {
    const preloadedState = store.getState();
    // *** Assign inital page title for application here, can be updated client-side
    const htmlPageTitle = 'Mars Application';

    // The ESLint rules (react/jsx-indent) and (function-paren-newline) conflict with each other when JSX is used as a function param
    // (i.e. when using renderToString). The issue can be circumvented using double-parens, but double-parens are cleaned up via prettier
    // prettier-ignore
    const markup = renderToString((
      <Provider store={store}>
        <StaticRouter context={context} location={req.url}>
          <App />
        </StaticRouter>
      </Provider>

    ));

    if (context.url) {
      res.redirect(context.url);
    } else {
      res.status(200).send(template(htmlPageTitle, assets.client.css, assets.client.js, preloadedState, markup));
    }
  }
});

export default MarsServer;
