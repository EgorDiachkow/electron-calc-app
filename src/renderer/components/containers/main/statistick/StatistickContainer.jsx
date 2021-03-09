/* eslint-disable no-use-before-define */
import React, { useEffect, useState } from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import ModelStatistick from '../../../../model/ModelStatistic.js';
import classes from './Statistick.module.css';

export default function StatistickContainer() {
  const [stateDate, setStateDate] = useState([]);
  const [allTotal, setAllTotal] = useState(0);
  const [yearTotal, setYearTotal] = useState(0);

  function createdModelDate(data) {
    const listData = Object.entries(data.statistick);
    const statistickItems = [];

    listData.forEach((item) => {
      statistickItems.push([item[1].when, item[1].total]);
    });
    getTotalAll(statistickItems);
    getTotalYear(statistickItems);
    setStateDate(statistickItems.reverse());
  }
  function getTotalYear(date) {
    const data = new Date().getFullYear();
    const filteredItems = date.filter((item) => item[0].indexOf(data) !== -1);
    let total = 0;

    filteredItems.forEach((item) => { total += item[1]; });
    setYearTotal(total);
  }

  function getTotalAll(date) {
    let total = 0;

    date.forEach((item) => { total += item[1]; });
    setAllTotal(total);
  }

  useEffect(() => {
    window.getStatistic().then((result) => {
      if (result !== null) createdModelDate(result);
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>Статистика оплат</div>
      <div className={classes.containerTotal}>
        <div className={classes.totalItem}>
          Всего за текущий год:
          <div className={classes.totalValue}>{`${yearTotal} р.`}</div>
        </div>
        <div className={classes.totalItem}>
          За всё время:
          <div className={classes.totalValue}>{`${allTotal} р.`}</div>
        </div>
      </div>
      <div className={classes.items}>
        <div className={`${classes.item} ${classes.title}`}>
          <span>Дата</span>
          <span>Оплата</span>
        </div>
        {stateDate ? (
          stateDate.map((elem) => (
            <div key={elem[1]} className={`${classes.item}`}>
              <span>{elem[0]}</span>
              <span>{`${elem[1]} р.`}</span>
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