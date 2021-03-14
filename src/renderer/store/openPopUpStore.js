import { makeObservable, observable, action } from 'mobx';

export function mainDataStore() {
  return makeObservable({
    datas: [],

    getData() {
      window.getData().then((result) => {
        this.data = [result];
      });
    },
  }, {
    datas: observable,
    getData: action.bound,
  });
}
