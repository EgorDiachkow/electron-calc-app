import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaRegQuestionCircle } from 'react-icons/fa';
import { BiRuble } from 'react-icons/bi';
import RateToolTip from '../../toolTip/RateToolTip.jsx';
import Setting from '../../../../entity/Setting.js';
import classes from './Calculator.module.css';

export default function CalculatorContainer() {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-use-before-define
  const onSubmit = (result) => getTotalValue(result);
  const [data, setData] = useState(false);
  const [total, setTotal] = useState(0);
  const [totalRate, setTotalRate] = useState();

  function getEnergyValue(result) {
    const kvtValue = +result['Киловатт'];
    let totalValue = 0;
    let currentIndex = 0;

    data[0].rate.forEach((item, index) => {
      let currentValue = 0;

      if (index === 2) data[0].rate[2].diapazon[1] = kvtValue;

      for (let i = currentIndex; i < item.diapazon[1] && currentIndex < kvtValue; i++) {
        currentValue += item.value;
        currentIndex++;
      }
      totalValue += currentValue;
    });
    setTotalRate(Math.ceil(totalValue));
    return Math.ceil(totalValue);
  }

  function getTotalValue(result) {
    const listItem = Object.entries(result);
    let totalValue = 0;

    listItem.forEach((item) => {
      if (item[0] !== 'Энергия' && item[0] !== 'Киловатт') {
        totalValue += +item[1];
      }
    });
    totalValue += getEnergyValue(result);
    setTotal(totalValue);
  }

  function reserValue() {
    setTotalRate('');
    setTotal('');
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
                  disabled={product.disable}
                  defaultValue={product.name === 'Энергия' ? totalRate : product.rate}
                  ref={register({ max: 5000, min: 1, maxLength: 100 })}
                />
                {product.prefix === 'руб.' ? <BiRuble size="18px" color="#414241" /> : <HiOutlineLightBulb style={{ cursor: 'pointer' }} data-tip data-for="help" size="18px" color="#414241" />}
                <RateToolTip rate={data[0].rate} />
              </div>
            ))
          ) : (
            <h1>Загрузка данных</h1>
          )}
        </div>
        {total > 0 ? (<div className={classes.totalValue}>{`${total} Рублей`}</div>
        ) : (
          <></>
        )}
        <div className={classes.actionContainer}>
          <input className={`${classes.btn}`} value="Рассчитать" type="submit" />
          <input
            className={`${classes.btn} ${classes.reset}`}
            type="reset"
            value="Сбросить"
            onClick={reserValue}
          />
        </div>
      </form>
    </div>
  );
}