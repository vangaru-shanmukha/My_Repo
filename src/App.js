import React, { Component } from 'react';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom'

import Layout from './pages/Layout';
import Logout from './Components/Logout/Logout';
import MaterialUILogin from './pages/MaterialUILogin';
import AuthenticatedRoute from './Components/Login/AuthenticatedRoute';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Router>
          <Switch>
            <Route path="/" exact component={MaterialUILogin} />
            <Route path="/login" exact component={MaterialUILogin} />
            <AuthenticatedRoute path="/logout" exact component={Logout} />
            <AuthenticatedRoute path="/home" exact component={Layout} />
            <Layout />
          </Switch>
        </Router>
      </React.Fragment>
    );
  }
}

export default App;
