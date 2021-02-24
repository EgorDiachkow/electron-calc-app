import React from 'react';
import { Route } from 'react-router-dom';
import classes from './MenuBar.module.css';

export default function LeftMenuBar() {
  return (
    <div className={classes.containerrigtht}>
      <Route exact path="/">1</Route>
      <Route path="/raschet">2</Route>
    </div>
  );
}