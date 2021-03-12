/* eslint-disable react/prop-types */
/* eslint-disable react/destructuring-assignment */
/* eslint-disable react/jsx-props-no-spreading */
import React from 'react';
import { IoCloseOutline } from 'react-icons/io5';
import ReactModal from 'react-modal';
import classes from './ModalPopUp.module.css';

ReactModal.setAppElement('#root');

const ModalPopUp = (Component) => {
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

  return (props) => (
    <ReactModal style={modalStyle} className={classes.popUpwrap} isOpen={props.openFlag} onRequestClose={props.handleCloseModal}>
      <IoCloseOutline className={classes.closeBtn} onClick={props.handleCloseModal} size="25px" />
      <Component {...props} />
    </ReactModal>
  );
};

export default ModalPopUp;