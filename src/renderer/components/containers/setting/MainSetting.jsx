import React from 'react';
import classes from './MainSetting.module.css';

export default function MainSetting() {
  return (
    <div className={classes.container}>
      <div className={classes.titleBlock}>Настройки</div>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          тарифы
        </div>
      </div>
    </div>
  );
}