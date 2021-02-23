import { app, ipcMain } from 'electron';
import path from 'path';
import { mkdirSync, existsSync, readFileSync, writeFileSync } from 'fs';

// eslint-disable-next-line import/prefer-default-export
export class Storage {
  constructor() {
    this.directory = path.join(app.getPath('userData'), 'storage');
    if (!existsSync(this.directory)) {
      mkdirSync(this.directory);
    }
  }

  get(key) {
    return this.read(key);
  }

  set(key, data) {
    return this.write(key, data);
  }

  read(key) {
    return JSON.parse(readFileSync(this.file(key)).toString('utf-8'));
  }

  write(key, data) {
    return writeFileSync(this.file(key), JSON.stringify(data));
  }

  file(key) {
    const file = path.join(this.directory, `${key}.json`);
    if (!existsSync(file)) {
      writeFileSync(file, null, { flag: 'wx' });
    }
    return file;
  }
  // getSettingInBase(nameFile) {
  //   fs.readFile(nameFile, 'utf-8', (err, data) => {
  //     if (err) console.log(err);
  //     ipcMain.on('nameChenel', () => {
  //       this.window.webContents.send('data', data);
  //     });
  //   });
  // }
  // pushSettingInBase(nameFile) {
  //   ipcMain.on('action', (_, data) => {
  //     fs.writeFile(nameFile, data, (err) => {
  //       console.log(err, this.window);
  //     });
  //   });
  // }
}