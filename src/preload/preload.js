import { ipcRenderer } from 'electron';

window.getData = () => new Promise((resolve) => {
  ipcRenderer.send('getData');
  ipcRenderer.once('entries', (_, data) => resolve(data));
});

window.setData = (a) => new Promise((resolve) => {
  ipcRenderer.send('setData', a);
  ipcRenderer.once('test', (_, data) => resolve(data));
});

window.getStatistic = () => new Promise((resolve) => {
  ipcRenderer.send('getStatistic');
  ipcRenderer.once('entriesState', (_, data) => resolve(data));
});

window.closeWindowApp = () => {
  ipcRenderer.send('closeWindow');
};
