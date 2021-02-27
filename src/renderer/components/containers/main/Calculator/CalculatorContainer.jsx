import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { BiRuble } from 'react-icons/bi';
import Setting from '../../../../entity/Setting.js';
import classes from './Calculator.module.css';

export default function CalculatorContainer() {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  const onSubmit = (data) => console.log(data);
  const [data, setData] = useState(false);

  useEffect(() => {
    window.getData().then((result) => {
      const settingProfile = new Setting(result.priceRate, result.services);

      setData([settingProfile]);
    });
  }, []);

  return (
    <div className={classes.container}>
      <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
        <div>
          {data ? (
            data[0].servises.map((product) => (
              <div key={product.id}>
                <label
                  htmlFor={product.name}
                  className={classes.inputILabel}
                >
                  {product.name}
                </label>
                <input
                  className={classes.inputItem}
                  id={product.name}
                  name={product.name}
                  defaultValue={product.rate}
                  ref={register({ max: 0, min: 5000, maxLength: 100 })}
                />
                {product.prefix === 'руб.' ? <BiRuble size="18px" color="#414241" /> : <HiOutlineLightBulb size="18px" color="#414241" />}
              </div>
            ))
          ) : (
            <h1>Загрузка данных</h1>
          )}
        </div>
        <div className={classes.actionContainer}>
          <input className={`${classes.btn}`} type="submit" />
          <input
            className={`${classes.btn} ${classes.reset}`}
            type="reset"
            value="Сбросить"
          />
        </div>
      </form>
    </div>
  );
}