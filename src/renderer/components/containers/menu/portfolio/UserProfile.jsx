import React from 'react';
import classes from './UserProfile.module.css';

export default function UserProfile() {
  return (
    <div className={classes.container}>
      <div className={classes.avatar}><img src="https://sun1-18.userapi.com/s/v1/if1/BvPNLuUN6LbyaungarPKpjKR40hpHgklhbsrncgBsHyOoQEmqVFbq6XldQ1g_vphNgn2Dc_G.jpg?size=50x0&quality=96&crop=121,457,972,972&ava=1" /></div>
      <div className={classes.userName}>Егор Дьячков</div>
    </div>
  );
}