import React, { Component } from 'react';

import DishHeader from './Components/Header/DishHeader/dishHeader';
import TableHeader from './Components/Header/TableHeader/tableHeader';
import Tables from './Components/Body/Tables/Tables';
import Menus from './Components/Body/Menus/Menus';

import classes from './App.module.css';

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <div className={classes.Header}>
          <TableHeader />
          <DishHeader />
        </div>
        <div className={classes.Body}>
          <Tables />
          <Menus />
        </div>
      </React.Fragment>
    );
  }
}

export default App;
