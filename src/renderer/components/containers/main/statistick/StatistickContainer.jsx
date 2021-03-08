import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import ModelStatistick from '../../../../model/ModelStatistic.js';
import classes from './Statistick.module.css';

export default function StatistickContainer() {
  const [stateDate, setStateDate] = useState([]);

  function createdModelDate(data) {
    const listData = Object.entries(data.statistick);
    const statistickItems = [];

    listData.forEach((item) => {
      statistickItems.push([item[1].when, item[1].total]);
    });
    setStateDate(statistickItems);
  }

  useEffect(() => {
    window.getStatistic().then((result) => {
      const availableData = result === null ? ModelStatistick : result;
      createdModelDate(availableData);
    });
  }, []);

  return (
    <div className={classes.container}>
      <LineChart data={stateDate} />
    </div>
  );
}