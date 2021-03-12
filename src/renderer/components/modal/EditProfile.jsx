/* eslint-disable no-use-before-define */
/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable jsx-a11y/no-static-element-interactions */
/* eslint-disable jsx-a11y/click-events-have-key-events */

import React, { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import ModelUser from '../../model/ModelUser.js';
import ModalPopUp from '../../hoc/popUp/ModalPopUp.jsx';
import classes from './EditProfile.module.css';

function EditProfile(props) {
  const [userDate, setUserDate] = useState(false);
  const { register, handleSubmit, errors } = useForm();
  const onSubmit = (data) => saveUserData(data);

  function saveUserData(data) {
    props.setEditProfile(data);
    window.setUserProfile(data);
    props.handleCloseModal();
  }

  useEffect(() => {
    window.getUserProfile().then((result) => {
      const availableData = result === null ? ModelUser : result;

      setUserDate(availableData);
    });
  }, []);

  return (
    <>
      <span className={classes.title}>Редактирование профиля</span>
      <div className={classes.container}>
        {userDate ? (
          <form className={classes.formContainer} onSubmit={handleSubmit(onSubmit)}>
            <div>
              <label htmlFor="name" className={classes.inputILabel}>Имя</label>
              <input className={classes.inputItem} type="text" name="name" defaultValue={userDate.name} ref={register} />
            </div>
            <div>
              <label htmlFor="lastname" className={classes.inputILabel}>Фамилия</label>
              <input className={classes.inputItem} type="text" name="lastname" defaultValue={userDate.lastname} ref={register} />
            </div>
            <div>
              <label htmlFor="photo" className={classes.inputILabel}>Фото</label>
              <input className={classes.inputItem} type="text" name="photo" defaultValue={userDate.photo} ref={register} />
            </div>
            <input className={classes.btn} type="submit" value="Сохранить" />
          </form>
        ) : (<></>)}
      </div>
    </>
  );
}

export default ModalPopUp(EditProfile);