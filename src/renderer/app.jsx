import React, { useState } from 'react';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import LeftBar from './components/containers/LeftBar.jsx';
import RigthBar from './components/containers/RigthBar.jsx';
import classes from './index.module.css';

export default function App() {
  return (
    <Router>
      <div>
        <Switch>
          <Route path="/main_window">
            <div className={classes.container}>
              <LeftBar />
              <RigthBar />
            </div>
          </Route>
        </Switch>
      </div>
    </Router>
  );
}