import React from 'react';
import MenuContainer from './menu/MenuContainer.jsx';
import Logo from '../logo/Logo.jsx';
import classes from './MenuBar.module.css';
import { UserProfileContainer } from '../profile/UserProfileContainer.jsx';

export default function LeftMenuBar() {
  return (
    <div className={classes.container}>
      <Logo />
      <MenuContainer />
      <UserProfileContainer />
    </div>
  );
}