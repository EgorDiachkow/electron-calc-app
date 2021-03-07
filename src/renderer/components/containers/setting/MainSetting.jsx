import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import classes from './MainSetting.module.css';
import dataModel from './model/ModelData.js';
import Setting from '../../../entity/Setting.js';

export default function MainSetting() {
  const { register, handleSubmit } = useForm();
  const [dataRate, setDataRate] = useState(false);
  // eslint-disable-next-line no-use-before-define
  const onSubmit = (result) => createModelServises(result);

  function saveData(data) {
    window.setData(data[0]);
  }

  function createModelRate(data) {
    dataRate[0].rate.forEach((item, index) => {
      item.diapason[0] = +data[index + 1].diapason[0];
      item.diapason[1] = +data[index + 1].diapason[1];
      item.value = +data[index + 1].value;
    });

    saveData(dataRate);
  }

  function createModelServises(data) {
    const listData = Object.keys(data);

    listData.forEach((itemData) => {
      dataRate[0].servises.forEach((item) => {
        if (item.name === itemData) item.rate = data[itemData];
      });
    });

    createModelRate(data);
  }

  useEffect(() => {
    window.getData().then((result) => {
      const settingProfile = new Setting(result.rate, result.servises);

      setDataRate([settingProfile]);
    });
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.titleBlock}>Настройки</div>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          тарифы
          <form onSubmit={handleSubmit(onSubmit)}>
            {dataRate ? (
              dataRate[0].servises.map((product) => (
                <div key={product.id}>
                  <label
                    htmlFor={product.name}
                  >
                    {product.name}
                  </label>
                  <input
                    id={product.name}
                    defaultValue={product.rate}
                    name={product.name}
                    ref={register()}
                  />
                </div>
              ))
            ) : (
              <></>
            )}
            {dataRate ? (
              dataRate[0].rate.map((product) => (
                <div key={product.id}>
                  <input
                    defaultValue={product.diapason[0]}
                    name={`${product.id}.diapason[0]`}
                    ref={register()}
                  />
                  <input
                    defaultValue={product.diapason[1]}
                    name={`${product.id}.diapason[1]`}
                    ref={register()}
                  />
                  <input
                    defaultValue={product.value}
                    name={`${product.id}.value`}
                    ref={register()}
                  />
                </div>
              ))
            ) : (
              <></>
            )}
            <input value="сохранить" onClick={saveData} type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
}