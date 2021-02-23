import React from 'react';
import MenuContainer from './menu/MenuContainer.jsx';
import Logo from '../logo/Logo.jsx';
import classes from './MenuBar.module.css';

export default function LeftMenuBar() {
  return (
    <div className={classes.container}>
      <Logo />
      <MenuContainer />
    </div>
  );
}