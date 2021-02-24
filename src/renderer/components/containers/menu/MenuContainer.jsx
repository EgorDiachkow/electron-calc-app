import React from 'react';
import { Link } from 'react-router-dom';
import { IoCalculatorSharp, IoEnter, IoStatsChartOutline } from 'react-icons/io5';
import classes from './Menu.module.css';

export default function MenuContainer() {
  return (
    <div className={classes.container}>
      <Link to="/raschet">
        <div className={classes.containerItem}>
          <IoCalculatorSharp size="25px" color="#fff" />
          <span className={classes.titleItem}>Расчёт</span>
        </div>
      </Link>
      <Link to="/state">
        <div className={classes.containerItem}>
          <IoStatsChartOutline size="25px" color="#fff" />
          <span className={classes.titleItem}>Статистика</span>
        </div>
      </Link>
      <Link to="/login">
        <div className={classes.containerItem}>
          <IoEnter size="25px" color="#fff" />
          <span className={classes.titleItem}>Регистрация</span>
        </div>
      </Link>
    </div>
  );
}