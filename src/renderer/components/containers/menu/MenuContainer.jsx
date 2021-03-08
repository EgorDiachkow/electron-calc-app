import React from 'react';
import { NavLink } from 'react-router-dom';
import { IoCalculatorSharp, IoEnter, IoStatsChartOutline } from 'react-icons/io5';
import classes from './Menu.module.css';

export default function MenuContainer() {
  return (
    <div className={classes.container}>
      <NavLink activeClassName={classes.active} className={classes.linkItem} to="/raschet">
        <div className={classes.containerItem}>
          <IoCalculatorSharp size="25px" color="#fff" />
          <span className={classes.titleItem}>Расчёт</span>
        </div>
      </NavLink>
      <NavLink activeClassName={classes.active} className={classes.linkItem} to="/state">
        <div className={classes.containerItem}>
          <IoStatsChartOutline size="25px" color="#fff" />
          <span className={classes.titleItem}>Статистика</span>
        </div>
      </NavLink>
    </div>
  );
}