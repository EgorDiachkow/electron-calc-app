/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { HiOutlineLightBulb } from 'react-icons/hi';
import { FaSave } from 'react-icons/fa';
import { BiRuble } from 'react-icons/bi';
import ReactTooltip from 'react-tooltip';
import { observer } from 'mobx-react-lite';
import SavePopUp from '../../../modal/SavePopUp.jsx';
import RateToolTip from '../../toolTip/RateToolTip.jsx';
import PlugCalculator from './plug/PlugCalculator.jsx';
import classes from './Calculator.module.css';
import { openPopUpstore, mainDataStore } from '../../../../store';

const popUpStore = openPopUpstore();
// const dataStore = mainDataStore();

export const CalculatorContainer = observer((props) => {
  const dataStore = props.dataStore;
  const { register, handleSubmit } = useForm();
  const onSubmit = (result) => dataStore.getTotalValue(result);

  // useEffect(() => {
  //   dataStore.getData();
  // }, []);

  return (
    <div className={classes.container}>
      <div className={classes.iconSave} data-tip="Сохраните платёж">
        <span className={classes.containerIcon} style={dataStore.accessSave} onClick={popUpStore.openPopUp}><FaSave size="18px" color="#fff" /></span>
        <SavePopUp setTest={props.setTest} getAccessSave={dataStore.getAccessSave} total={dataStore.total} openFlag={popUpStore.flagPopUp} handleCloseModal={popUpStore.closePopUp} />
      </div>
      <ReactTooltip place="bottom" effect="solid" />
      {dataStore.data.length ? (
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
                dataStore.data[0].servises.map((product) => (
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
                      defaultValue={product.name === 'Энергия' ? dataStore.totalRate : product.rate}
                      ref={register({ max: 5000, min: 1, maxLength: 100 })}
                    />
                    <BiRuble size="18px" color="#414241" />
                    <RateToolTip rate={dataStore.data[0].rate} />
                  </div>
                ))
              }
            </div>
            {dataStore.total > 0 ? (<div className={classes.totalValue}>{`${dataStore.total} ${dataStore.titeleValue}`}</div>
            ) : (
              <></>
            )}
            <div className={classes.actionContainer}>
              <input className={`${classes.btn}`} value="Рассчитать" type="submit" />
              <input
                className={`${classes.btn} ${classes.reset}`}
                type="reset"
                value="Сбросить"
                onClick={dataStore.reserValue}
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