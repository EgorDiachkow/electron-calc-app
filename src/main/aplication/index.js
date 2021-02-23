import path from 'path';
import { Storage } from '../processing/Storage';

const { app, BrowserWindow, ipcMain } = require('electron');

const look = app.requestSingleInstanceLock();

export default class CalculatorApp {
  constructor() {
    this.subscribeForAppEvents();
    this.subscriCheckCloneApp();
    this.storage = new Storage();

    app.whenReady().then(() => this.createWindow());
  }

  createWindow() {
    this.window = new BrowserWindow({
      height: 800,
      width: 800,
      show: false,
      backgroundColor: '#2980b9',
      webPreferences: {
        preload: path.join(__dirname, '../../preload/preload.js'),
        // nodeIntegration: true,
      },
    });

    // this.getFileSetting();
    // eslint-disable-next-line no-undef
    this.window.webContents.loadURL(MAIN_WINDOW_WEBPACK_ENTRY);
    this.window.on('closed', () => {
      this.window = null;
    });

    this.window.on('ready-to-show', () => {
      this.window.show();
    });
    ipcMain.on('nameChenel', () => {
      this.window.webContents.send('entries', this.storage.get('entries'));
    });
    ipcMain.on('action', (_, data) => {
      console.log(data);
    });
  }

  subscribeForAppEvents() {
    app.on('window-all-closed', () => {
      app.quit();
    });

    app.on('activate', () => {
      if (this.window === null) this.window();
    });
  }

  subscriCheckCloneApp() {
    if (!look) app.quit();
    else if (this.window) this.window.focus();
  }
  // getFileSetting() {
  //   const setting = new Storage(this.window);

  //   setting.getSettingInBase('file.json');
  // }
}
