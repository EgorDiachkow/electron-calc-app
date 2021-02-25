import React from 'react';
import { IoWaterSharp } from 'react-icons/io5';
import classes from './Statistick.module.css';

export default function StatistickContainer() {
  return (
    <div className={classes.container}>
      <div className={classes.itemContainer}>
        <div className={classes.beforeConitainer}>
          <IoWaterSharp size="40px" />
        </div>
        <div>
          <div className={classes.itemValue}>163 руб.</div>
          <div className={classes.titleValue}>Вода</div>
        </div>
      </div>
    </div>
  );
}