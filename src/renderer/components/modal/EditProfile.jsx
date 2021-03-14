/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */

import React from 'react';
import { useForm } from 'react-hook-form';
import ModalPopUp from '../../hoc/popUp/ModalPopUp.jsx';
import classes from './EditProfile.module.css';

function EditProfile(props) {
  const { register, handleSubmit } = useForm();
  const onSubmit = (data) => saveUserData(data);

  function saveUserData(data) {
    props.setEditProfile(data);
    window.setUserProfile(data);
    props.handleCloseModal();
  }

  return (
    <>
      <span className={classes.title}>Редактирование профиля</span>
      <div className={classes.container}>
        {props.userDate ? (
          <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className={classes.inputILabel}>Имя</label>
              <input className={classes.inputItem} type="text" name="name" defaultValue={props.userDate.name} ref={register} />
            </div>
            <div>
              <label htmlFor="lastname" className={classes.inputILabel}>Фамилия</label>
              <input className={classes.inputItem} type="text" name="lastname" defaultValue={props.userDate.lastname} ref={register} />
            </div>
            <div>
              <label htmlFor="photo" className={classes.inputILabel}>Фото</label>
              <input className={classes.inputItem} type="text" name="photo" defaultValue={props.userDate.photo} ref={register} />
            </div>
            <input className={classes.btn} type="submit" value="Сохранить" />
          </form>
        ) : (<></>)}
      </div>
    </>
  );
}

export default ModalPopUp(EditProfile);