const { ipcRenderer } = require('electron');

window.getData = () => new Promise((resolve) => {
  ipcRenderer.send('nameChenel');
  ipcRenderer.once('entries', (_, data) => resolve(data));
});