/* eslint-disable no-use-before-define */
import React from 'react';
import { NavLink } from 'react-router-dom';
import classes from './PlugCalculator.module.css';

export default function PlugCalculator() {
  return (
    <div className={classes.container}>
      <div className={classes.messageContainer}>
        <div className={classes.title}>Расчёт</div>
        <div className={classes.messageTitle}> Вы не указали тарифы</div>
      </div>
      <NavLink to="/setting">
        <input className={classes.btn} type="submit" value="Настройки" />
      </NavLink>
    </div>
  );
}