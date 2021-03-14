/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import sumHash from 'hash-sum';
import ModalPopUp from '../../hoc/popUp/ModalPopUp.jsx';
import classes from './SavePopUp.module.css';
import ModelStatistick from '../../model/ModelStatistic.js';

function SavePopUp(props) {
  const [stateDate, setStateDate] = useState([]);
  const { register, handleSubmit, errors } = useForm();
  const [flegUseModel, setFlegUseModel] = useState(false);
  // eslint-disable-next-line no-use-before-define
  const onSubmit = (when) => createdStatisticsModel(when, props.total);

  const filteredEmprySave = (item) => item.total !== 0;

  function createdStatisticsModel(when, total) {
    if (total !== 0) {
      const combinedWhen = `${when.date.year}-${when.date.month}-${new Date().getDate()}`;

      stateDate.statistick.push({ id: sumHash(new Date().getMilliseconds()), when: combinedWhen, total });
      stateDate.statistick = stateDate.statistick.filter(filteredEmprySave);

      window.setStatistic(stateDate);
      const myNotification = new Notification('Калькулятор', {
        body: 'Платёж сохранён',
      });
      props.handleCloseModal();
    } else {
      // eslint-disable-next-line no-alert
      alert('Вы не рассчитали платёж');
      props.handleCloseModal();
    }
  }

  useEffect(() => {
    window.getStatistic().then((result) => {
      const availableData = result === null ? ModelStatistick : result;
      if (result === null) setFlegUseModel(true);
      setStateDate(availableData);
    });
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
}

export default ModalPopUp(SavePopUp);