import { makeObservable, observable, action, runInAction } from 'mobx';

export function statisticStore() {
  return makeObservable({
    data: [],
    allTotal: 0,
    yearTotal: 0,

    createdModelDate(data) {
      const listData = Object.entries(data.statistick);
      const statistickItems = [];

      listData.forEach((item) => {
        statistickItems.push([item[1].when, item[1].total]);
      });
      this.getTotalAll(statistickItems);
      this.getTotalYear(statistickItems);
      this.data = statistickItems.reverse();
    },
    getTotalYear(date) {
      const data = new Date().getFullYear();
      const filteredItems = date.filter((item) => item[0].indexOf(data) !== -1);
      let total = 0;

      filteredItems.forEach((item) => { total += +item[1]; });
      this.yearTotal = total;
    },
    getTotalAll(date) {
      let total = 0;

      date.forEach((item) => { total += +item[1]; });
      this.allTotal = total;
    },
    getData() {
      window.getStatistic().then((result) => {
        runInAction(() => {
          if (result !== null) this.createdModelDate(result);
        });
      });
    },
  }, {
    data: observable,
    allTotal: observable,
    yearTotal: observable,
    getTotalYear: action.bound,
    getTotalAll: action.bound,
    createdModelDate: action.bound,
    getData: action.bound,
  });
}
