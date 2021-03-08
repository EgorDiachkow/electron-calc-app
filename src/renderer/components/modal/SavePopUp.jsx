/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */
import React, { useState } from 'react';
import ReactModal from 'react-modal';
import { useForm } from 'react-hook-form';
import { IoCloseOutline } from 'react-icons/io5';
import classes from './SavePopUp.module.css';

const modalStyle = {
  content: {
    position: 'absolute',
    inset: 'auto',
    margin: '0 auto',
    border: '1px solid #ccc',
    background: '#fff',
    overflow: 'auto',
    WebkitOverflowScrolling: 'touch',
    borderRadius: '15px',
    outline: 'none',
    padding: '10px',
  },
  overlay: {
    position: 'fixed',
    backgroundColor: 'rgba(0,0,0,.1)',
  },
};

ReactModal.setAppElement('#root');

export default function SavePopUp(props) {
  const { register, handleSubmit, errors } = useForm();
  // eslint-disable-next-line no-use-before-define
  const onSubmit = (when) => createdStatisticsModel(when, props.total);

  function createdStatisticsModel(when, total) {
    const combinedWhen = `${when.date.year}-${when.date.month}-${new Date().getDate()}`;
    const result = { when: combinedWhen, total };

    props.handleCloseModal();
  }

  return (
    <ReactModal style={modalStyle} className={classes.popUpwrap} isOpen={props.openFlag} onRequestClose={props.handleCloseModal}>
      <IoCloseOutline className={classes.closeBtn} onClick={props.handleCloseModal} size="25px" />
      <span className={classes.title}>Сохранить платёж</span>
      <span className={classes.subtitle}>Укажите дату</span>

      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="date.month" ref={register}>
            <option value="01">Январь</option>
            <option value="02">Февраль</option>
            <option value="03">Март</option>
            <option value="04">Апрель</option>
            <option value="05">Март</option>
            <option value="06">Июнь</option>
            <option value="07">Июль</option>
            <option value="08">Август</option>
            <option value="09">Сентябрь</option>
            <option value="10">Октябрь</option>
            <option value="11">Ноябрь</option>
            <option value="12">Декабрь</option>
          </select>
          <input className={classes.itemInputYear} type="number" name="date.year" defaultValue="2021" ref={register} />
          <input className={classes.btn} type="submit" />
        </form>
      </div>
    </ReactModal>
  );
}