import React from 'react';
import { IoCalculatorSharp, IoEnter, IoStatsChartOutline } from 'react-icons/io5';
import classes from './UserProfile.module.css';

export default function UserProfile() {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}><img src="https://sun1-98.userapi.com/s/v1/if1/du30I-ImuqiIxpa_qEt2fy0B1O-wQxBjkcxa4eLJjFkrm4TMakaagve5hEwDBG75Hij00Hoj.jpg?size=50x0&quality=96&crop=467,0,1539,1539&ava=1" /></div>
      <div className={classes.userName}>Настя Чуйкова</div>
      <IoEnter size="25px" color="#fff" />
    </div>
  );
}