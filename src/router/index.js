import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";
import config from './config';

function Router () {

  return (
    <HashRouter>
      <Switch>
        {config.map(item =>
          <Route
            exact={item.exact}
            path={item.path}
            component={item.component} />
        )}
      </Switch>
    </HashRouter>
  );
}

export default Router;
