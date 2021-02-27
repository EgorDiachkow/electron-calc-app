import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { FaSave } from 'react-icons/fa';
import { Route } from 'react-router-dom';
import ReactTooltip from 'react-tooltip';
import classes from './MenuBar.module.css';
import StatistickContainer from './main/statistick/StatistickContainer.jsx';
import CalculatorContainer from './main/Calculator/CalculatorContainer.jsx';

export default function rightMenuBar() {
  return (
    <div className={classes.containerrigtht}>
      <div className={classes.iconSetting}><FiSettings size="18px" color="#fff" /></div>
      <div className={classes.iconSave} data-tip="Сохраните платёж"><FaSave size="18px" color="#fff" /></div>
      <Route exact path="/">1</Route>
      <Route path="/raschet"><CalculatorContainer /></Route>
      <Route path="/state"><StatistickContainer /></Route>
      <ReactTooltip place="bottom" effect="solid" />
    </div>
  );
}