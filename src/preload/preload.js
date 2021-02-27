import { ipcRenderer } from 'electron';

window.getData = () => new Promise((resolve) => {
  ipcRenderer.send('nameChenel');
  ipcRenderer.once('entries', (_, data) => resolve(data));
});
setTimeout(() => {
  console.log(123);
}, 1000);
