import React from 'react';
import Route from 'react-router-dom/Route';
import Switch from 'react-router-dom/Switch';

import { NotFound } from '@core/lib-react/views';
import Home from './views/home';

const Main = () => (
  <Switch>
    <Route exact path="/" component={Home} />
    {/* Add your app's routes here */}

    {/* last route is the default fallback if no matching path exists */}
    <Route path="/*" component={NotFound} />
  </Switch>
);

export default Main;
