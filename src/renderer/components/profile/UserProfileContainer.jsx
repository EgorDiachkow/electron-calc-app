import React, { useState, useEffect } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import { observer } from 'mobx-react-lite';
import EditProfile from '../modal/EditProfile.jsx';
import classes from './UserProfile.module.css';
import { openPopUpstore, userProfileStore } from '../../store';

const popUpStore = openPopUpstore();
const userStore = userProfileStore();

export const UserProfileContainer = observer(() => {
  useEffect(() => {
    userStore.getData();
  }, [userStore.editProfile]);

  return (
    <div className={classes.container}>
      {userStore.userDate ? (
        <>
          <div className={classes.avatar}>
            <img onError={() => userStore.setCheckPhoto()} style={userStore.checkPhoto ? { display: 'none' } : null} src={userStore.userDate.photo} />
            {userStore.checkPhoto ? (<FaUserCircle size="40px" color="#fff" />) : (<></>)}
          </div>
          <div className={classes.userNameContaner}>
            <span className={classes.userName}>{`${userStore.userDate.name} ${userStore.userDate.lastname}`}</span>
            <RiEdit2Line onClick={popUpStore.openPopUp} className={classes.iconEdit} size="15px" color="rgba(255,255,255, .8)" />
            <EditProfile userDate={userStore.userDate} handleCloseModal={popUpStore.closePopUp} setEditProfile={userStore.setEditProfile} openFlag={popUpStore.flagPopUp} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
});