import React from 'react';
import Dashboard from './components/pages/Dashboard';
import { Router, Route } from 'react-router';
import history from './components/utils/history';
import Favourites from './components/pages/Favourites';
import Appbar from './components/molecules/Appbar';
import { Grid } from '@material-ui/core';
import { useSelector } from 'react-redux';

function App() {
  let favourites = useSelector(state => state.cart.favourites);
  return (
    <Grid container justify="center" direction="column" spacing={6} style={{
      margin: 0,
      width: '100%',
    }}>
      <Grid item>
        <Appbar notifications={favourites.length} />
      </Grid>
      <Grid item>
        <Router history={history}>
          <Route path="/" exact component={Dashboard} />
          <Route path="/favourites" exact component={Favourites} />
        </Router>
      </Grid>
    </Grid>
  );
}

export default App;
