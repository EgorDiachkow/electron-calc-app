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

    setStateDate(statistickItems.reverse());
  }

  useEffect(() => {
    window.getStatistic().then((result) => {
      const availableData = result === null ? ModelStatistick : result;

      createdModelDate(availableData);
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>Статистика оплат</div>
      <div className={classes.containerTotal}>
        <div className={classes.totalItem}>
          Всего за текущий год:
          <div className={classes.totalValue}>2000р</div>
        </div>
        <div className={classes.totalItem}>
          За всё время:
          <div className={classes.totalValue}>2000р</div>
        </div>
      </div>
      <div className={classes.items}>
        <div className={`${classes.item} ${classes.title}`}>
          <span>Дата</span>
          <span>Стоимость</span>
        </div>
        {stateDate ? (
          stateDate.map((elem) => (
            <div className={`${classes.item}`}>
              <span>{elem[0]}</span>
              <span>{elem[1]}</span>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <LineChart height="160px" data={stateDate} />
    </div>
  );
}