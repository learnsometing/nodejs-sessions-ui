import React, { ReactElement } from 'react';

// Components
import Home from '../Home';

// React Router Dom
import { Route, BrowserRouter as Router, Switch } from 'react-router-dom';

function Routes(): ReactElement {
  return (
    <Router>
      <Switch>
        <Route component={Home} path="/" />
      </Switch>
    </Router>
  );
}

export default Routes;
