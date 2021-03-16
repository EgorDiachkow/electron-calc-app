import { makeObservable, observable, action, runInAction, computed } from 'mobx';
import Setting from '../entity/Setting.js';
import declOfNum from '../optional/declOfNum.js';

export function mainDataStore() {
  return makeObservable({
    data: [],
    total: 0,
    totalRate: '',
    titeleValue: 0,
    flagAccessSave: false,

    get accessSave() {
      return !this.flagAccessSave ? { pointerEvents: 'none' } : null;
    },
    getEnergyValue(result) {
      const kvtValue = +result['Киловатт'];
      let totalValue = 0;
      let currentIndex = 0;

      this.data[0].rate.forEach((item, index) => {
        let currentValue = 0;

        if (index === 2) this.data[0].rate[2].diapason[1] = kvtValue;

        for (let i = currentIndex; i < item.diapason[1] && currentIndex < kvtValue; i++) {
          currentValue += item.value;
          currentIndex++;
        }
        totalValue += currentValue;
      });
      this.flagAccessSave = true;
      this.totalRate = Math.ceil(totalValue);
      return Math.ceil(totalValue);
    },
    getAccessSave() {
      this.flagAccessSave = false;
    },
    getTotalValue(result) {
      const listItem = Object.entries(result);
      let totalValue = 0;

      listItem.forEach((item) => {
        if (item[0] !== 'Энергия' && item[0] !== 'Киловатт') {
          totalValue += +item[1];
        }
      });
      totalValue += this.getEnergyValue(result);
      this.titeleValue = declOfNum(totalValue, ['рубль', 'рубля', 'рублей']);
      this.total = totalValue;
    },
    reserValue() {
      this.flagAccessSave = false;
      this.totalRate = '';
      this.total = '';
    },
    getData() {
      window.getData().then((result) => {
        console.log('getData');
        const settingProfile = new Setting(result.rate, result.servises);

        runInAction(() => {
          this.data = [settingProfile];
        });
      });
    },
  }, {
    flagAccessSave: observable,
    data: observable,
    total: observable,
    totalRate: observable,
    titeleValue: observable,
    reserValue: action.bound,
    getData: action.bound,
    accessSave: computed,
    getAccessSave: action.bound,
    getTotalValue: action.bound,
    getEnergyValue: action.bound,
  });
}
