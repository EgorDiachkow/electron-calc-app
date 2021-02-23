import React from 'react';
import { IoCalculatorSharp } from 'react-icons/io5';
import classes from './Menu.module.css';

export default function MenuContainer() {
  return (
    <div className={classes.containerItem}>
      <IoCalculatorSharp size="25px" color="#fff" />
      <span className={classes.titleItem}>Регистрация</span>
    </div>
  );
}