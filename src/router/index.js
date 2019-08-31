import React from 'react';
import { HashRouter, Route, Switch } from "react-router-dom";

import Login from '../views/Login';
import Manage from '../views/Manage';

function Router () {

  return (
    <HashRouter>
      <Switch>
        <Route path="/login" component={Login} />
        <Route path="/manage" component={Manage} />
      </Switch>
    </HashRouter>
  );
}

export default Router;
