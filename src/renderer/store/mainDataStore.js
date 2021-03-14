import { makeAutoObservable, observable, action } from 'mobx';

export function openPopUpstore() {
  return makeAutoObservable({
    flagPopUp: false,
    data: [],
    openPopUp() {
      this.flagPopUp = true;
      console.log('open');
    },
    closePopUp() {
      this.flagPopUp = false;
    },
    getData() {
      console.log(123)
      window.getData().then((result) => {
        this.data = [result];
      });
    },
  });
}
