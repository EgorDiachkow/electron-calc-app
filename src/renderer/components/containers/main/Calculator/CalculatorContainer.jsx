import React from 'react';
import classes from './Calculator.module.css';

export default function CalculatorContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.containerItem}>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Киловатт</span>
          <input className={classes.inputItem} type="text" value="0" />
          <span>кВт⋅ч</span>
        </div>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Квартплата</span>
          <input className={classes.inputItem} type="text" value="283" />
          <span>руб.</span>
        </div>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Эл. энергия</span>
          <input className={classes.inputItem} type="text" value="0" />
          <span>руб.</span>
        </div>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Газ</span>
          <input className={classes.inputItem} type="text" value="35" />
          <span>руб.</span>
        </div>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Вода</span>
          <input className={classes.inputItem} type="text" value="163" />
          <span>руб.</span>
        </div>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Отопление</span>
          <input className={classes.inputItem} type="text" value="515" />
          <span>руб.</span>
        </div>
        <div className={classes.inputContainer}>
          <span className={classes.inputTitle}>Мусор</span>
          <input className={classes.inputItem} type="text" value="19" />
          <span>руб.</span>
        </div>
      </div>
    </div>
  );
}