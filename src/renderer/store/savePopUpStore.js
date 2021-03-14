import { makeAutoObservable, runInAction } from 'mobx';
import sumHash from 'hash-sum';
import ModelStatistick from '../model/ModelStatistic.js';

export function savePopUpStore() {
  return makeAutoObservable({
    stateDate: [],

    filteredEmprySave(item) { return item.total !== 0; },
    createdStatisticsModel(when, total) {
      if (total !== 0) {
        const combinedWhen = `${when.date.year}-${when.date.month}-${new Date().getDate()}`;

        this.stateDate.statistick.push({ id: sumHash(new Date().getMilliseconds()), when: combinedWhen, total });
        this.stateDate.statistick = this.stateDate.statistick.filter(this.filteredEmprySave);

        window.setStatistic(this.stateDate);
      }
    },
    getData() {
      window.getStatistic().then((result) => {
        const availableData = result === null ? ModelStatistick : result;

        runInAction(() => {
          this.stateDate = availableData;
        });
      });
    },

  }, {}, { deep: false, proxy: false });
}
