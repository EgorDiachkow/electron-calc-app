/* eslint-disable no-use-before-define */
import React, { useEffect } from 'react';
import { LineChart } from 'react-chartkick';
import 'chart.js';
import { BiRuble } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';
import classes from './Statistick.module.css';
import { statisticStore } from '../../../../store';

const store = statisticStore();

export const StatistickContainer = observer(() => {
  useEffect(() => {
    store.getData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.containerTitle}>Статистика оплат</div>
      <div className={classes.containerTotal}>
        <div className={classes.totalItem}>
          Всего за текущий год:
          <div className={classes.totalValue}>
            {store.yearTotal}
            <BiRuble size="16px" color="#414241" />
          </div>
        </div>
        <div className={classes.totalItem}>
          За всё время:
          <div className={classes.totalValue}>
            {store.allTotal}
            <BiRuble size="16px" color="#414241" />
          </div>
        </div>
      </div>
      <div className={classes.items}>
        <div className={`${classes.item} ${classes.title}`}>
          <span>Дата</span>
          <span>Оплата</span>
        </div>
        {store.data ? (
          store.data.map((elem, index) => (
            // eslint-disable-next-line react/no-array-index-key
            <div key={`${elem[1]} ${index}`} className={`${classes.item}`}>
              <span>{elem[0]}</span>
              <span>
                {elem[1]}
                <BiRuble size="16px" color="#414241" />
              </span>
            </div>
          ))
        ) : (
          <></>
        )}
      </div>
      <LineChart height="160px" data={store.data} />
    </div>
  );
});