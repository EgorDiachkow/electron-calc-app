import React from 'react';
import { HashRouter as Router } from 'react-router-dom';
import LeftBar from './components/containers/LeftBar.jsx';
import RigthBar from './components/containers/RigthBar.jsx';
import PanelMenuContainer from './components/containers/menu/PanelMenu/PanelMenuContainer.jsx';
import classes from './index.module.css';

export default function App() {
  return (
    <Router>
      <div>
        <div className={classes.container}>
          <PanelMenuContainer />
          <LeftBar />
          <RigthBar />
        </div>
      </div>
    </Router>
  );
}