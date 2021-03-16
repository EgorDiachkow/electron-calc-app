import { makeAutoObservable, runInAction } from 'mobx';
import dataModel from '../model/ModelData.js';
import Setting from '../entity/Setting.js';

export function settingStore() {
  return makeAutoObservable({
    dataRate: false,

    saveData(data) {
      window.setData(data[0]);
      const myNotification = new Notification('Калькулятор', {
        body: 'Данные сохранены',
      });
    },
    createModelRate(data) {
      this.dataRate[0].rate.forEach((item, index) => {
        item.diapason[0] = +data[index + 1].diapason[0];
        item.diapason[1] = +data[index + 1].diapason[1];
        item.value = +data[index + 1].value;
      });
      this.saveData(this.dataRate);
    },
    createModelServises(data) {
      const listData = Object.keys(data);

      listData.forEach((itemData) => {
        this.dataRate[0].servises.forEach((item) => {
          if (item.name === itemData) item.rate = data[itemData];
        });
      });

      this.createModelRate(data);
    },
    getData() {
      console.log('getSetting');
      window.getData().then((result) => {
        runInAction(() => {
          const availableData = result === null ? dataModel : result;
          const settingProfile = new Setting(availableData.rate, availableData.servises);

          this.dataRate = [settingProfile];
        });
      });
    },
  });
}
