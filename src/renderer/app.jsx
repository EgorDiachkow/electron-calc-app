import React, { useEffect, useState } from 'react';
import { HashRouter as Router } from 'react-router-dom';
import { observer } from 'mobx-react-lite';
import LeftBar from './components/containers/LeftBar.jsx';
import RigthBar from './components/containers/RigthBar.jsx';
import PanelMenuContainer from './components/containers/menu/PanelMenu/PanelMenuContainer.jsx';
import classes from './index.module.css';
import { mainDataStore } from './store/index.js';

const dataStore = mainDataStore();

export const App = observer(() => {
  const [test, setTest] = useState(null);
  useEffect(() => {
    dataStore.getData();
  }, [test]);

  return (
    <Router>
      <div>
        <div className={classes.container}>
          <PanelMenuContainer />
          <LeftBar />
          <RigthBar setTest={setTest} dataStore={dataStore} />
        </div>
      </div>
    </Router>
  );
})