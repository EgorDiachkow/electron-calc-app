import React from 'react';
import { Route } from 'react-router-dom';
import classes from './MenuBar.module.css';
import StatistickContainer from './main/statistick/StatistickContainer.jsx';
import CalculatorContainer from './main/Calculator/CalculatorContainer.jsx';

export default function rightMenuBar() {
  return (
    <div className={classes.containerrigtht}>
      <Route exact path="/">1</Route>
      <Route path="/raschet"><CalculatorContainer /></Route>
      <Route path="/state"><StatistickContainer /></Route>
    </div>
  );
}