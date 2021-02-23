import React from 'react';
import { AiOutlineLogout } from 'react-icons/ai';
import classes from './Logo.module.css';

export default function Logo() {
  return (
    <div className={classes.container}>
      <AiOutlineLogout size="25px" color="#fff" />
      <span className={classes.title}> Калькулятор</span>
    </div>
  );
}