import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BiRuble } from 'react-icons/bi';
import Setting from '../../../../entity/Setting.js';
import classes from './Calculator.module.css';

export default function CalculatorContainer() {
  const { register, handleSubmit, watch, errors, reset } = useForm();
  // eslint-disable-next-line no-use-before-define
  const onSubmit = (result) => getTotalValue(result);
  const [data, setData] = useState(false);
  const [total, setTotal] = useState(0);
  const rate = [
    {
      diapazon: [0, 90],
      value: 0.4626,
    },
    {
      diapazon: [91, 150],
      value: 0.6668,
    },
    {
      diapazon: [151, 1000],
      value: 0.8388,
    },
  ];

  function getTotalValue(result) {
    const kvtValue = +result['Киловатт'];
    let totalValue = 0;
    let currentIndex = 0;

    rate.forEach((item, index) => {
      if (index === 2) rate[2].diapazon[1] = kvtValue;
      const currentDiapazon = item.diapazon;
      const currentRate = item.value;

      let currentValue = 0;

      for (let i = currentIndex; i < currentDiapazon[1] && currentIndex < kvtValue; i++) {
        currentValue += currentRate;
        currentIndex++;
        console.log(currentIndex, 'currentIndex');
      }
      totalValue += currentValue;
    });
    setTotal(totalValue);
  }

  useEffect(() => {
    window.getData().then((result) => {
      const settingProfile = new Setting(result.priceRate, result.services);

      setData([settingProfile]);
    });
  }, []);

  return (
    <div className={classes.container}>
      <span className={classes.heplItem}><FaRegQuestionCircle size="18px" color="rgba(36,36,36,.5)" /></span>
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
                  ref={register({ max: 5000, min: 0, maxLength: 100 })}
                />
                {product.prefix === 'руб.' ? <BiRuble size="18px" color="#414241" /> : <HiOutlineLightBulb size="18px" color="#414241" />}
              </div>
            ))
          ) : (
            <h1>Загрузка данных</h1>
          )}
        </div>
        {total > 0 ? (<div className={classes.totalValue}>{`${Math.ceil(total)} Рублей`}</div>
        ) : (
          <></>
        )}
        <div className={classes.actionContainer}>
          <input className={`${classes.btn}`} value="рассчитать" type="submit" />
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