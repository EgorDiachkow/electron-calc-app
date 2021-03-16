import * as React from 'react';
import * as ReactDOM from 'react-dom';
// eslint-disable-next-line import/no-unresolved
import { App } from './App.jsx';

function render() {
  ReactDOM.render(<App />, document.getElementById('root'));
}

render();