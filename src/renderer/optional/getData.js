/* eslint-disable no-undef */
include('./entity/Setting.js');
include('./optional/waitFor.js');

window.onload = () => {
  const getDataApi = (widget) => {
    window.getData().then((result) => {
      const settingProfile = new Setting(result.priceRate, result.services);
      render(settingProfile, widget);
    });
  };

  waitFor(
    () => document.readyState === 'complete',
    () => {
      const widget = document.querySelector('#calculator');

      getDataApi(widget);
    },
  );
};
