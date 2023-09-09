import React from 'react';
import {
  HashRouter as Router,
  Route,
  Switch,
} from 'react-router-dom';

import Home from '../pages/Home';
import Agende from '../pages/Agende';

const Routes = () => (
  <Router>
    <Switch>
      <Route exact path="/" component={Home} />
      <Route exact path="/agende" component={Agende} />
    </Switch>
  </Router>
);

export default Routes;
