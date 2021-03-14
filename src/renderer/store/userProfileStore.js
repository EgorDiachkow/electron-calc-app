import { makeObservable, observable, action, runInAction } from 'mobx';
import ModelUser from '../model/ModelUser.js';

export function userProfileStore() {
  return makeObservable({
    userDate: false,
    editProfile: null,
    checkPhoto: false,

    setEditProfile(data) {
      this.editProfile = data;
    },
    setCheckPhoto() {
      this.checkPhoto = true;
    },
    getData() {
      window.getUserProfile().then((result) => {
        runInAction(() => {
          const availableData = result === null ? ModelUser : result;

          this.checkPhoto = false;
          this.userDate = availableData;
        });
      });
    },
  }, {
    userDate: observable,
    editProfile: observable,
    checkPhoto: observable,
    setEditProfile: action.bound,
    setCheckPhoto: action.bound,
    getData: action.bound,
  });
}
