import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import classes from './PanelMenu.module.css';

export default function PanelMenuContainer() {
  const closeApp = () => {
    window.closeWindowApp();
  };

  return (
    <div className={classes.container}>
      <span className={classes.item}><IoCloseOutline id="close" onClick={closeApp} size="25px" /></span>
    </div>
  );
}