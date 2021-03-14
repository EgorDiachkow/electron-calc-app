import { makeObservable, observable, action } from 'mobx';

export function openPopUpstore() {
  return makeObservable({
    flagPopUp: false,

    openPopUp() {
      this.flagPopUp = true;
    },
    closePopUp() {
      this.flagPopUp = false;
    },
  }, {
    flagPopUp: observable,
    openPopUp: action.bound,
    closePopUp: action.bound,
  });
}
