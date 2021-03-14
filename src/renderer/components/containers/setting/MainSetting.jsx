import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { BiRuble } from 'react-icons/bi';
import { observer } from 'mobx-react-lite';
import classes from './MainSetting.module.css';
import { settingStore } from '../../../store';

const store = settingStore();

export const MainSetting = observer(() => {
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (result) => store.createModelServises(result);

  useEffect(() => {
    store.getData();
  }, []);

  return (
    <div className={classes.container}>
      <div className={classes.wrapper}>
        <div className={classes.item}>
          <span className={classes.titleSetting}>Тарифы</span>
          <form onSubmit={handleSubmit(onSubmit)}>
            {store.dataRate ? (
              store.dataRate[0].servises.map((product) => (
                product.name === 'Энергия' ? (null) : (
                  <div className={classes.inputContainer} key={product.id}>
                    <label htmlFor={product.name} className={classes.inputILabel}>{product.name}</label>
                    <input
                      className={classes.inputItem}
                      id={product.name}
                      defaultValue={product.rate}
                      name={product.name}
                      type="text"
                      ref={register({
                        valueAsNumber: true,
                        min: {
                          value: 1,
                          message: 'Значение должно быть больше 0',
                        },
                        validate: {
                          isNumber: (value) => value.match(/[a-zA-Z,a-яЯ-а,ё]+/g) === null,
                          isSymbol: (value) => value.match(/[^\w|^.]|_/) === null,
                        },
                      })}
                    />
                    {product.name in errors ? <p className={classes.errorMessage}>{errors[product.name].message}</p> : <></>}
                    {product.name in errors && errors[product.name].type === 'isNumber' ? <p className={classes.errorMessage}>Значение должно быть числом</p> : <></>}
                    {product.name in errors && errors[product.name].type === 'isSymbol' ? <p className={classes.errorMessage}>Запрещёные символы</p> : <></>}
                    <BiRuble size="18px" color="#414241" />
                  </div>
                )
              ))
            ) : (
              <></>
            )}
            <div className={classes.containerRate}>
              <span className={`${classes.inputILabel} ${classes.title}`}>Электроэнергия</span>
              {store.dataRate ? (
                store.dataRate[0].rate.map((product) => (
                  <div key={product.id}>
                    <span className={classes.inputILabel}>от</span>
                    <input
                      className={classes.inputItem}
                      defaultValue={product.diapason[0]}
                      name={`${product.id}.diapason[0]`}
                      ref={register()}
                      type="number"
                    />
                    <span className={classes.inputILabel}>до</span>
                    <input
                      className={classes.inputItem}
                      defaultValue={product.diapason[1]}
                      name={`${product.id}.diapason[1]`}
                      ref={register()}
                      type="number"
                    />
                    <span className={`${classes.inputILabel} ${classes.value}`}>тариф</span>
                    <input
                      className={classes.inputItem}
                      defaultValue={product.value}
                      name={`${product.id}.value`}
                      ref={register({
                        min: {
                          value: 0,
                        },
                        validate: {
                          isNumber: (value) => value.match(/\D/) === null,
                        },
                      })}
                    />
                  </div>
                ))
              ) : (
                <></>
              )}
            </div>
            <input className={`${classes.btn}`} value="Сохранить" type="submit" />
          </form>
        </div>
      </div>
    </div>
  );
});