/* eslint-disable react/destructuring-assignment */
import React from 'react';
import { FiSettings } from 'react-icons/fi';
import { Route, NavLink } from 'react-router-dom';
import SavePopUp from '../modal/SavePopUp.jsx';
import classes from './MenuBar.module.css';
import { StatistickContainer } from './main/statistick/StatistickContainer.jsx';
import { CalculatorContainer } from './main/Calculator/CalculatorContainer.jsx';
import { MainSetting } from './setting/MainSetting.jsx';

export default function rightMenuBar(props) {
  return (
    <div className={classes.containerrigtht}>
      <NavLink to="/setting">
        <div className={classes.iconSetting}><FiSettings size="18px" color="#fff" /></div>
      </NavLink>
      <Route path="/raschet"><CalculatorContainer dataStore={props.dataStore} /></Route>
      <Route path="/setting"><MainSetting setTest={props.setTest} /></Route>
      <Route path="/state"><StatistickContainer /></Route>
      <Route exact path="/"><SavePopUp /></Route>
    </div>
  );
}