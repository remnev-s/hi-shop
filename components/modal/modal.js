import React from 'react';
import ReactDOM from 'react-dom';

import styles from './modal.module.scss';

export const Modal = ({ children, isOpen, onRequestClose }) => {
  return ReactDOM.createPortal(
    <>
      <div className={`styles.popup ${isOpen ? 'popup__open' : ''}`}>
        <div className={styles.popup__close} onClick={onRequestClose}>
          ✖️
        </div>
        {children}
      </div>
    </>,
    document.querySelector('#modal')
  );
};
