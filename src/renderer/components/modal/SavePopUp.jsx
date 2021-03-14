import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { observer } from 'mobx-react-lite';
import ModalPopUp from '../../hoc/popUp/ModalPopUp.jsx';
import classes from './SavePopUp.module.css';
import { savePopUpStore } from '../../store';

const store = savePopUpStore();

const SavePopUp = observer((props) => {
  const { register, handleSubmit } = useForm();
  // eslint-disable-next-line no-use-before-define
  // eslint-disable-next-line react/prop-types
  const onSubmit = (when) => store.createdStatisticsModel(when, props.total);

  useEffect(() => {
    store.getData();
  }, []);
  return (
    <>
      <span className={classes.title}>Сохранить платёж</span>
      <span className={classes.subtitle}>Укажите дату</span>
      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="date.month" ref={register}>
            <option value="01">Январь</option>
            <option value="02">Февраль</option>
            <option value="03">Март</option>
            <option value="04">Апрель</option>
            <option value="05">Май</option>
            <option value="06">Июнь</option>
            <option value="07">Июль</option>
            <option value="08">Август</option>
            <option value="09">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
          </select>
          <input className={classes.itemInputYear} type="number" name="date.year" defaultValue="2021" ref={register} />
          <input className={classes.btn} type="submit" value="Сохранить" />
        </form>
      </div>
    </>
  );
});

export default ModalPopUp(SavePopUp);