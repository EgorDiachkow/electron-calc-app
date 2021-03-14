/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable react/jsx-no-comment-textnodes */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect, useState } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaSave } from 'react-icons/fa';
import { BiRuble } from 'react-icons/bi';
import ReactTooltip from 'react-tooltip';
import { observer } from 'mobx-react-lite';
import SavePopUp from '../../../modal/SavePopUp.jsx';
import RateToolTip from '../../toolTip/RateToolTip.jsx';
import declOfNum from '../../../../optional/declOfNum.js';
import PlugCalculator from './plug/PlugCalculator.jsx';
import Setting from '../../../../entity/Setting.js';
import classes from './Calculator.module.css';
import { openPopUpstore } from '../../../../store';

const store = openPopUpstore();

export const CalculatorContainer = observer(() => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-use-before-define
  const onSubmit = (result) => console.log(result); // getTotalValue(result);
  const [total, setTotal] = useState(0);
  const [totalRate, setTotalRate] = useState();
  const [titeleValue, setTiteleValue] = useState();
  const [checkuseModel, setCheckuseModel] = useState(false);

  /* function getEnergyValue(result) {
    const kvtValue = +result['Киловатт'];
    let totalValue = 0;
    let currentIndex = 0;

    data[0].rate.forEach((item, index) => {
      let currentValue = 0;

      if (index === 2) data[0].rate[2].diapason[1] = kvtValue;

      for (let i = currentIndex; i < item.diapason[1] && currentIndex < kvtValue; i++) {
        currentValue += item.value;
        currentIndex++;
      }
      totalValue += currentValue;
    });
    setTotalRate(Math.ceil(totalValue));
    return Math.ceil(totalValue);
  } */

  /* function getTotalValue(result) {
    const listItem = Object.entries(result);
    let totalValue = 0;

    listItem.forEach((item) => {
      if (item[0] !== 'Энергия' && item[0] !== 'Киловатт') {
        totalValue += +item[1];
      }
    });
    totalValue += getEnergyValue(result);
    setTiteleValue(declOfNum(totalValue, ['рубль', 'рубля', 'рублей']));
    setTotal(totalValue);
  }
 */
  function reserValue() {
    setTotalRate('');
    setTotal('');
  }

  // useEffect(() => {
  //   window.getData().then((result) => {
  //     if (result !== null) {
  //       const settingProfile = new Setting(result.rate, result.servises);

  //       setCheckuseModel(true);
  //       setData([settingProfile]);
  //     } else {
  //       setCheckuseModel(false);
  //     }
  //   });
  // }, []);
  useEffect(() => {
    store.getData();
  }, []);
  console.log(store.data[0], 'компонент');
  return (
    <div className={classes.container}>
      <div className={classes.iconSave} data-tip="Сохраните платёж">
        <span className={classes.containerIcon} onClick={store.openPopUp}><FaSave size="18px" color="#fff" /></span>
        <SavePopUp total={total} openFlag={store.flagPopUp} handleCloseModal={store.closePopUp} />
      </div>
      <ReactTooltip place="bottom" effect="solid" />
      {store.data.length ? (
        <>
          <div className={classes.titelContainer}>Расчёт</div>
          <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <div>
                <label htmlFor="Киловатт" className={classes.inputILabel}>Киловатт</label>
                <input
                  className={classes.inputItem}
                  id="Киловатт"
                  name="Киловатт"
                  disabled={false}
                  defaultValue=""
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
                <HiOutlineLightBulb style={{ cursor: 'pointer' }} data-tip data-for="help" size="18px" color="#414241" />
              </div>
              {
                store.data[0].servises.map((product) => (
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
                    <BiRuble size="18px" color="#414241" />
                    <RateToolTip rate={store.data[0].rate} />
                  </div>
                ))
              }
            </div>
            {total > 0 ? (<div className={classes.totalValue}>{`${total} ${titeleValue}`}</div>
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
        </>
      ) : (
        <PlugCalculator />
      )}
    </div>
  );
});