/* eslint-disable react/prop-types */
import React from 'react';
import ReactTooltip from 'react-tooltip';
import classes from './RateToolTip.module.css';

export default function RateToolTip(props) {
  const { rate } = props;
  return (
    <ReactTooltip place="right" effect="solid" id="help">
      <div className={classes.title}>Тариф на электроэнергию</div>
      {
        rate.map((item) => (
          <div className={classes.item} key={item.diapazon}>
            {`Диапазон ${item.diapazon[0]} - ${item.diapazon[1]} : `}
            <span className={classes.rateValue}>{item.value}</span>
          </div>
        ))
      }
    </ReactTooltip>
  );
}