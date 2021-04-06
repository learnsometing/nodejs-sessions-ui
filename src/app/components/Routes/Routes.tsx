import React, { ReactElement } from 'react';

// Components
import Home from '../Home';
import Login from '../../features/account/Login';
import Signup from '../../features/account/Signup';

// React Router Dom
import { Route, Switch } from 'react-router-dom';

function Routes(): ReactElement {
  return (
    <Switch>
      <Route component={Home} exact path="/" />
      <Route component={Login} path="/login" />
      <Route component={Signup} path="/signup" />
    </Switch>
  );
}

export default Routes;
