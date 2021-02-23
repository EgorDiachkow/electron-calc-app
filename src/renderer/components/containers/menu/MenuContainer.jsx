import React from 'react';
import { IoCalculatorSharp, IoEnter, IoStatsChartOutline } from 'react-icons/io5';
import classes from './Menu.module.css';

export default function MenuContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.containerItem}>
        <IoCalculatorSharp size="25px" color="#fff" />
        <span className={classes.titleItem}>Рассчёт</span>
      </div>
      <div className={classes.containerItem}>
        <IoStatsChartOutline size="25px" color="#fff" />
        <span className={classes.titleItem}>Статистика</span>
      </div>
      <div className={classes.containerItem}>
        <IoEnter size="25px" color="#fff" />
        <span className={classes.titleItem}>Регистрация</span>
      </div>
    </div>
  );
}