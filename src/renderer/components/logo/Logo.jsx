import React from 'react';
import { IoLogoStackoverflow } from 'react-icons/io5';
import classes from './Logo.module.css';

export default function Logo() {
  return (
    <div className={classes.container}>
      <IoLogoStackoverflow size="25px" color="#fff" />
      <span className={classes.title}> Калькулятор</span>
    </div>
  );
}