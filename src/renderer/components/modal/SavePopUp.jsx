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
  const onSubmit = (data) => console.log(data, props.total);

  return (
    <ReactModal style={modalStyle} className={classes.popUpwrap} isOpen={props.openFlag} onRequestClose={props.handleCloseModal}>
      <IoCloseOutline className={classes.closeBtn} onClick={props.handleCloseModal} size="25px" />
      <span className={classes.title}>Сохранить платёж</span>
      <span className={classes.subtitle}>Укажите дату</span>

      <div className={classes.containerForm}>
        <form onSubmit={handleSubmit(onSubmit)}>
          <select name="date.month" ref={register}>
            <option value="Январь">Январь</option>
            <option value="Февраль">Февраль</option>
            <option value="Март">Март</option>
            <option value="Апрель">Апрель</option>
            <option value="Март">Март</option>
            <option value="Июнь">Июнь</option>
            <option value="Июль">Июль</option>
            <option value="Август">Август</option>
            <option value="Сентябрь">Сентябрь</option>
            <option value="Октябрь">Октябрь</option>
            <option value="Ноябрь">Ноябрь</option>
            <option value="Декабрь">Декабрь</option>
          </select>
          <input className={classes.itemInputYear} type="number" name="date.year" defaultValue="2021" ref={register} />
          <input className={classes.btn} type="submit" />
        </form>
      </div>
    </ReactModal>
  );
}