import React from 'react';
import MenuItem from './menuItem.jsx';
import classes from './Menu.module.css';

export default function MenuContainer() {
  return (
    <div className={classes.container}>
      <MenuItem />
      <MenuItem />
      <MenuItem />
    </div>
  );
}