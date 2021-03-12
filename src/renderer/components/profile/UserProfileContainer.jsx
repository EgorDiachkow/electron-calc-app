import React, { useState, useEffect } from 'react';
import { RiEdit2Line } from 'react-icons/ri';
import { FaUserCircle } from 'react-icons/fa';
import ModelUser from '../../model/ModelUser.js';
import EditProfile from '../modal/EditProfile.jsx';
import classes from './UserProfile.module.css';

export default function UserProfileContainer() {
  const [userDate, setUserDate] = useState(false);
  const [openFlag, setOpenFlag] = useState(false);
  const [editProfile, setEditProfile] = useState(null);
  const [checkPhoto, setCheckPhoto] = useState(false);

  function handleCloseModal() {
    setOpenFlag(false);
  }

  function handlerOpenModal() {
    setOpenFlag(true);
  }

  useEffect(() => {
    window.getUserProfile().then((result) => {
      const availableData = result === null ? ModelUser : result;

      setCheckPhoto(false);
      setUserDate(availableData);
    });
  }, [editProfile]);

  return (
    <div className={classes.container}>
      {userDate ? (
        <>
          <div className={classes.avatar}>
            <img onError={() => setCheckPhoto(true)} style={checkPhoto ? { display: 'none' } : null} src={userDate.photo} />
            {checkPhoto ? (<FaUserCircle size="40px" color="#fff" />) : (<></>) }
          </div>
          <div className={classes.userNameContaner}>
            <span className={classes.userName}>{`${userDate.name} ${userDate.lastname}`}</span>
            <RiEdit2Line onClick={handlerOpenModal} className={classes.iconEdit} size="15px" color="rgba(255,255,255, .8)" />
            <EditProfile handleCloseModal={handleCloseModal} setEditProfile={setEditProfile} openFlag={openFlag} />
          </div>
        </>
      ) : (
        <></>
      )}
    </div>
  );
}