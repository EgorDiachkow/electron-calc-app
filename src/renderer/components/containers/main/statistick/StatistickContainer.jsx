import React from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import classes from './Statistick.module.css';

export default function StatistickContainer() {
  return (
    <div className={classes.container}>
      <LineChart data={[['2021-01-8', 1231], ['2021-02-10', 1300]]} />
    </div>
  );
}